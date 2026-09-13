# Attributes.Options

## Overview

### Available Operations

* [list](#list) - List select options
* [create](#create) - Create a select option

## list

Lists all select options for a particular attribute on either an object or a list.

When `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAttributeOptions" method="get" path="/v2/{target}/{identifier}/attributes/{attribute}/options" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.options.list({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showArchived: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { attributesOptionsList } from "@interfere/attio/funcs/attributes-options-list.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesOptionsList(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showArchived: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesOptionsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAttributeOptionsRequest](../../models/operations/list-attribute-options-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAttributeOptionsResponse](../../models/operations/list-attribute-options-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.ListAttributeOptionsNotFoundError | 404                                      | application/json                         |
| errors.AttioError                        | 4XX, 5XX                                 | \*/\*                                    |

## create

Adds a select option to a select attribute on an object or a list.

When `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAttributeOption" method="post" path="/v2/{target}/{identifier}/attributes/{attribute}/options" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.options.create({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    body: {
      data: {
        title: "Medium",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { attributesOptionsCreate } from "@interfere/attio/funcs/attributes-options-create.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesOptionsCreate(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    body: {
      data: {
        title: "Medium",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesOptionsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAttributeOptionRequest](../../models/operations/create-attribute-option-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAttributeOptionResponse](../../models/operations/create-attribute-option-response.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.CreateAttributeOptionValidationTypeError | 400                                             | application/json                                |
| errors.CreateAttributeOptionAuthError           | 403                                             | application/json                                |
| errors.CreateAttributeOptionNotFoundError       | 404                                             | application/json                                |
| errors.CreateAttributeOptionSlugConflictError   | 409                                             | application/json                                |
| errors.AttioError                               | 4XX, 5XX                                        | \*/\*                                           |