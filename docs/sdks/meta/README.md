# Meta

## Overview

Meta endpoints are used to get information about the API token.

### Available Operations

* [identify](#identify) - Identify

## identify

Identify the current access token, the workspace it is linked to, and any permissions it has.

Every kind of Attio access token can be introspected:

- **Workspace access tokens**, created from a workspace's settings. These have no OAuth client, so `client_id` and `aud` contain the workspace access token's own ID.
- **OAuth access tokens**, granted to an app through the OAuth 2.0 authorization code flow. `client_id` and `aud` contain the app ID.
- **App access tokens**, issued to an app installation and exposed to that app's server functions as `ATTIO_API_TOKEN`. `client_id` and `aud` contain the app ID.

Per [RFC 7662](https://www.rfc-editor.org/rfc/rfc7662), `active` is the only member guaranteed to be present. `exp` is always `null`, because Attio access tokens do not currently expire.
All other members are optional, and are omitted rather than returned as `null` when they are not present.

Unknown, revoked, and deleted tokens are not treated as an error. They return `200` with `{"active": false}` and no other members.

### Example Usage: App access token

<!-- UsageSnippet language="typescript" operationID="identify" method="get" path="/v2/self" example="App access token" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.meta.identify();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { metaIdentify } from "@interfere/attio/funcs/meta-identify.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await metaIdentify(attio);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metaIdentify failed:", res.error);
  }
}

run();
```
### Example Usage: Inactive token

<!-- UsageSnippet language="typescript" operationID="identify" method="get" path="/v2/self" example="Inactive token" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.meta.identify();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { metaIdentify } from "@interfere/attio/funcs/meta-identify.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await metaIdentify(attio);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metaIdentify failed:", res.error);
  }
}

run();
```
### Example Usage: Workspace access token

<!-- UsageSnippet language="typescript" operationID="identify" method="get" path="/v2/self" example="Workspace access token" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.meta.identify();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { metaIdentify } from "@interfere/attio/funcs/meta-identify.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await metaIdentify(attio);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metaIdentify failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IdentifyResponse](../../models/operations/identify-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |