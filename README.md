# CMS Custom Objects Example

This project demonstrates how custom objects can be used inside the HubSpot CMS.

## Getting started

Before getting started, you'll need an account that has CMS Hub Enterprise and access to the API Key.

1. Clone this repo to your machine
2. Install dependencies via `npm install`
3. Copy the API key for your portal from [HubSpot API key](https://app.hubspot.com/l/api-key). You will need to create one if you haven't already. More info on API Keys can be found [here](https://knowledge.hubspot.com/integrations/how-do-i-get-my-hubspot-api-key).
4. Create a `hubspot.config.yml` file by running `hs init --auth=apikey`. The contents should look like:
  ```yaml
  defaultPortal: demo
  portals:
    - name: demo
      portalId: <portalId>
      authType: apikey
      apiKey: <apiKey>
  ```
5. Run `npm run setup` to create the custom object
6. Add your API key by running `hs secrets add APIKEY <apikey>` using your API key from step 3.
7. [Create a form](https://app.hubspot.com/l/forms) that contains the following fields:
  - First Name
  - Last Name
  - Email Address
8. Upload the `hub-homes` folder from the repo to your portal by running `hs upload ./hub-homes hub-homes`
9. [Create a website page](https://app.hubspot.com/l/website) that will display property details by using the "Details page" (`details.html`) template. The slug for for Details page must be `/property`; you can change the content slug under the page's settings. Additionally, in the "Property Details Module", you'll need to choose the form that you created in step 7.
10. [Create a website page](https://app.hubspot.com/l/website) that will display all property listings by using the "Home page" (`property-listings.html`) template
11. View the newly created page from step 10.
