# CMS Custom Objects Example

This project demonstrates how custom objects can be used inside the HubSpot CMS.

## Getting started

Before getting started, you'll need an account that has CMS Hub Enterprise and access to the API Key.

1. Clone this repo to your machine
2. Install dependencies via `npm install`
3. If you already have a `hubspot.config.yml` file set up, you will need to run `hs auth` and generate a new `personalaccesskey` that includes the "Custom Objects" permission. Otherwise, run `hs init` to set up your config file. Make sure to include the "Custom Objects" permission. More info on setting up the config file can be found [here](https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development).

  ![image](https://user-images.githubusercontent.com/6472448/94728811-cb5a3e00-032e-11eb-93b2-1fb36167df6b.png)

4. Run `npm run setup` to create the custom schema and custom object
5. Copy the API key for your portal from [HubSpot API key](https://app.hubspot.com/l/api-key). You will need to create one if you haven't already. More info on API Keys can be found [here](https://knowledge.hubspot.com/integrations/how-do-i-get-my-hubspot-api-key).
6. Add your API key by running `hs secrets add APIKEY <apikey>` using your API key from step 5. This will allow the [serverless function used when submitting the form](https://github.com/HubSpot/cms-custom-objects-example/blob/master/hub-homes/api.functions/submit.js#L3) to make authenticated calls.
7. [Create a form](https://app.hubspot.com/l/forms) that contains the following fields:
  - First Name
  - Last Name
  - Email Address
8. Upload the `hub-homes` folder from the repo to your portal by running `npm run upload`
9. [Create a website page](https://app.hubspot.com/l/website) that will display property details by using the "Details page" (`details.html`) template. The slug for for Details page must be `/property`; you can change the content slug under the page's settings. Additionally, in the "Property Details Module", you'll need to choose the form that you created in step 7.
10. [Create a website page](https://app.hubspot.com/l/website) that will display all property listings by using the "Home page" (`property-listings.html`) template
11. View the newly created page from step 10.
