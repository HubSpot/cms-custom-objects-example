# CMS Custom Objects Example

This project demonstrates how custom objects can be used inside the HubSpot CMS.

## Getting started

Before getting started, you'll need an account that has CMS Hub Enterprise and access to the API Key.

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
7. Create a form that contains the following fields:
- First Name
- Last Name
- Email Address
8. Create a page that will display all property listings by using the "Home page" (`property-listsings.html`) template
9. Create a page that will display property details by using the "Details page" (`details.html`) template. This slug for this page must be `/property`. Additionally, in the "Property Details Module", you'll need to choose the form that you created in step 7.
