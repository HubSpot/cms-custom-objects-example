const axios = require("axios");

const { APIKEY } = process.env;

exports.main = ({ accountId, contact, body }, sendResponse) => {
  const { email, firstName, lastName, formId, utk, realEstateId } = body;
  const FORMS_API = `https://api.hsforms.com/submissions/v3/integration/submit/${accountId}/${formId}`;
  const CONTACT_API = `https://api.hubapi.com/contacts/v1/contact/email/${email}/profile`;
  const ASSOCIATIONS_API = `https://api.hubapi.com/crm/v3/associations/contact/p${accountId}_realestate/batch/create`;



  if (!APIKEY) {
    sendResponse({
      statusCode: 403,
      body: { message: "API key not present" },
    });
  }

  const submitFormData = async () => {
    try {
      await axios({
        method: "post",
        url: FORMS_API,
        data: {
          fields: [
            {
              name: "firstname",
              value: firstName,
            },
            {
              name: "lastname",
              value: lastName,
            },
            {
              name: "email",
              value: email,
            },
          ],
          context: {
            hutk: utk,
          },
        },
      });
    } catch (e) {
      sendResponse({
        statusCode: 500,
        body: { message: e },
      });
    }
  };

  const getContactByEmail = async (email) => {
    const CONTACT_API_POLLING_DELAY = 500;
    const delay = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const fetchContact = async () => {
      return axios({
        method: "get",
        url: CONTACT_API,
        params: {
          portalId: accountId,
          hapikey: APIKEY,
        },
        validateStatus: function (status) {
          return status < 500;
        },
      });
    };

    try {
      let contactData = null;
      while (!contactData) {
        const { data, status } = await fetchContact();
        if (status == 200) {
          contactData = data.vid;
        } else {
          await delay(CONTACT_API_POLLING_DELAY);
        }
      }

      return contactData;
    } catch (e) {
      sendResponse({
        statusCode: 500,
        body: { message: e },
      });
    }
  };

  const associateContactWithRealEstate = async (
    visitorId,
    accountId,
    realEstateId
  ) => {
    try {
      await axios({
        method: "post",
        url: ASSOCIATIONS_API,
        params: {
          portalId: accountId,
          hapikey: APIKEY,
        },
        data: {
          inputs: [
            {
              from: {
                id: visitorId,
              },
              to: {
                id: realEstateId,
              },
              type: "real_estate_listing_to_contact",
            },
          ],
        },
      });
    } catch (e) {
      sendResponse({
        statusCode: 500,
        body: { message: e },
      });
    }
  };


  (async () => {
    await submitFormData();
    let visitorId;
    if (contact && contact.hasOwnProperty("vid")) {
      visitorId = contact.vid;
    } else {
      visitorId = await getContactByEmail(email);
    }
    await associateContactWithRealEstate(visitorId, accountId, realEstateId);

    sendResponse({ body: { statusCode: 200 } });
  })();
};
