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

4. Run `npm run install` to create the custom object
5. Run `npm run upload` to upload the `hub-homes` theme

