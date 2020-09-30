# CMS Custom Objects Example

This project demonstrates how custom objects can be used inside the HubSpot CMS.

## Getting started

Before getting started, you'll need an account that has CMS Hub Enterprise and access to the API Key. More info on API Keys can be found [here](https://knowledge.hubspot.com/integrations/how-do-i-get-my-hubspot-api-key).

1. Clone this repo to your machine
2. Install dependencies via `npm install`
3. Create a `hubspot.config.yml` file as follows:

```yaml
defaultPortal: demo
portals:
  - name: demo
    portalId: <portalId>
    authType: apikey
    apiKey: <apiKey>
```

4. Run `npm run setup` to create the custom object
5. Run `npm run upload` to upload the `hub-homes` theme
6. Add your API key by running `hs secrets add APIKEY <apikey>`
7. [Create a form](https://app.hubspot.com/l/forms) that contains the following fields:
- First Name
- Last Name
- Email Address
8. Upload the `hub-homes` folder from the repo to your portal by running `hs upload ./hub-homes hub-homes`
9. [Create a website page](https://app.hubspot.com/l/website) that will display property details by using the "Details page" (`details.html`) template. The slug for for Details page must be `/property`; you can change the content slug under the page's settings. Additionally, in the "Property Details Module", you'll need to choose the form that you created in step 7.
10. [Create a website page](https://app.hubspot.com/l/website) that will display all property listings by using the "Home page" (`property-listings.html`) template
11. View the newly created page from step 10.
