# CMS Custom Objects Example

This project demonstrates how custom objects can be used inside the HubSpot CMS.

## Getting started

Before getting started, you'll need an account that has CMS Hub Enterprise and access to the API Key.

1. Clone this repo to your machine
2. Install dependencies via `npm install`
3. If you already have a `hubspot.config.yml` file set up, run `hs auth` to authenticate with your account. Otherwise, run `hs init` to set up your config file.
4. Run `npm run setup` to create the custom object
5. Run `npm run upload` to upload the `Hub Homes` theme
6. Add your API key by running `hs secrets add APIKEY <apikey>`
7. Create a page that will display all property listings by using the "Home page" (`property-listings.html`) template
8. Create a page that will display property details by using the "Details page" (`details.html`) template. The slug for for Details page must be `/property`; you can change the content slug under the page's settings.
9. Within the "Property Details" module, create or select a form that contains the following fields:
- First Name
- Last Name
- Email Address
