# Attributes

## Overview

Attributes model properties of objects and lists. Some attributes, such as the `name` attribute on a person, are system-defined, while others are user-defined. Attributes are one of [many types](/docs/attribute-types) such as text, location or select. See our [objects and lists guide](/docs/objects-and-lists) for more information.

### Available Operations

* [listAll](#listall) - List attributes
* [createNew](#createnew) - Create an attribute
* [get](#get) - Get an attribute
* [update](#update) - Update an attribute
* [updateSelectOption](#updateselectoption) - Update a select option
* [listStatuses](#liststatuses) - List statuses
* [createStatus](#createstatus) - Create a status
* [updateStatus](#updatestatus) - Update a status

## listAll

Lists all attributes defined on a specific object or list. Attributes are returned in the order that they are sorted by in the UI.

When `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAllAttributes" method="get" path="/v2/{target}/{identifier}/attributes" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.listAll({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    limit: 10,
    offset: 5,
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
import { attributesListAll } from "@interfere/attio/funcs/attributes-list-all.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesListAll(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    limit: 10,
    offset: 5,
    showArchived: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesListAll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAllAttributesRequest](../../models/operations/list-all-attributes-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAllAttributesResponse](../../models/operations/list-all-attributes-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## createNew

Creates a new attribute on either an object or a list.

For record-reference attributes, you can optionally create a bidirectional relationship by providing a `relationship` object. This will create two entangled attributes: one on the specified object and a reverse attribute on the related object.

To create an attribute on an object, you must also have the `object_configuration:read-write` scope.

To create an attribute on a list, you must also have the `list_configuration:read-write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createNewAttribute" method="post" path="/v2/{target}/{identifier}/attributes" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.createNew({
    target: "lists",
    identifier: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    body: {
      data: {
        title: "Your Attribute",
        description: "Lorem ipsum",
        apiSlug: "my-attribute",
        type: "text",
        isRequired: true,
        isUnique: true,
        isMultiselect: true,
        defaultValue: {
          type: "static",
          template: [
            {
              value: 5,
            },
          ],
        },
        relationship: {
          object: "companies",
          title: "Team members",
          apiSlug: "team_members",
          isMultiselect: false,
        },
        config: {
          currency: {
            defaultCurrencyCode: "USD",
            displayType: "symbol",
          },
          recordReference: {
            allowedObjects: [
              "people",
            ],
          },
        },
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
import { attributesCreateNew } from "@interfere/attio/funcs/attributes-create-new.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesCreateNew(attio, {
    target: "lists",
    identifier: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    body: {
      data: {
        title: "Your Attribute",
        description: "Lorem ipsum",
        apiSlug: "my-attribute",
        type: "text",
        isRequired: true,
        isUnique: true,
        isMultiselect: true,
        defaultValue: {
          type: "static",
          template: [
            {
              value: 5,
            },
          ],
        },
        relationship: {
          object: "companies",
          title: "Team members",
          apiSlug: "team_members",
          isMultiselect: false,
        },
        config: {
          currency: {
            defaultCurrencyCode: "USD",
            displayType: "symbol",
          },
          recordReference: {
            allowedObjects: [
              "people",
            ],
          },
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesCreateNew failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateNewAttributeRequest](../../models/operations/create-new-attribute-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateNewAttributeResponse](../../models/operations/create-new-attribute-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.CreateNewAttributeValidationTypeError | 400                                          | application/json                             |
| errors.CreateNewAttributeNotFoundError       | 404                                          | application/json                             |
| errors.CreateNewAttributeSlugConflictError   | 409                                          | application/json                             |
| errors.AttioError                            | 4XX, 5XX                                     | \*/\*                                        |

## get

Gets information about a single attribute on either an object or a list.

When `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAttribute" method="get" path="/v2/{target}/{identifier}/attributes/{attribute}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.get({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { attributesGet } from "@interfere/attio/funcs/attributes-get.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesGet(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAttributeRequest](../../models/operations/get-attribute-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAttributeResponse](../../models/operations/get-attribute-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.GetAttributeNotFoundError | 404                              | application/json                 |
| errors.AttioError                | 4XX, 5XX                         | \*/\*                            |

## update

Updates a single attribute on a given object or list.

When `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAttribute" method="patch" path="/v2/{target}/{identifier}/attributes/{attribute}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.update({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    body: {
      data: {
        title: "Your Attribute",
        description: "Lorem ipsum",
        apiSlug: "my-attribute",
        isRequired: true,
        isUnique: true,
        defaultValue: {
          type: "static",
          template: [
            {
              value: 5,
            },
          ],
        },
        config: {
          currency: {
            defaultCurrencyCode: "USD",
            displayType: "symbol",
          },
          recordReference: {
            allowedObjects: [
              "people",
            ],
          },
        },
        isArchived: false,
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
import { attributesUpdate } from "@interfere/attio/funcs/attributes-update.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesUpdate(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    body: {
      data: {
        title: "Your Attribute",
        description: "Lorem ipsum",
        apiSlug: "my-attribute",
        isRequired: true,
        isUnique: true,
        defaultValue: {
          type: "static",
          template: [
            {
              value: 5,
            },
          ],
        },
        config: {
          currency: {
            defaultCurrencyCode: "USD",
            displayType: "symbol",
          },
          recordReference: {
            allowedObjects: [
              "people",
            ],
          },
        },
        isArchived: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAttributeRequest](../../models/operations/update-attribute-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAttributeResponse](../../models/operations/update-attribute-response.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.SystemEditUnauthorizedError  | 400                                 | application/json                    |
| errors.UpdateAttributeNotFoundError | 404                                 | application/json                    |
| errors.AttioError                   | 4XX, 5XX                            | \*/\*                               |

## updateSelectOption

Updates a select option on an attribute on either an object or a list.

When `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAttributeSelectOption" method="patch" path="/v2/{target}/{identifier}/attributes/{attribute}/options/{option}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.updateSelectOption({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    option: "Medium",
    body: {
      data: {
        title: "Medium",
        isArchived: false,
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
import { attributesUpdateSelectOption } from "@interfere/attio/funcs/attributes-update-select-option.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesUpdateSelectOption(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    option: "Medium",
    body: {
      data: {
        title: "Medium",
        isArchived: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesUpdateSelectOption failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAttributeSelectOptionRequest](../../models/operations/update-attribute-select-option-request.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAttributeSelectOptionResponse](../../models/operations/update-attribute-select-option-response.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.UpdateAttributeSelectOptionValueNotFoundError | 400                                                  | application/json                                     |
| errors.UpdateAttributeSelectOptionNotFoundError      | 404                                                  | application/json                                     |
| errors.UpdateAttributeSelectOptionSlugConflictError  | 409                                                  | application/json                                     |
| errors.AttioError                                    | 4XX, 5XX                                             | \*/\*                                                |

## listStatuses

Lists all statuses for a particular status attribute on either an object or a list.

When `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAttributeStatuses" method="get" path="/v2/{target}/{identifier}/attributes/{attribute}/statuses" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.listStatuses({
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
import { attributesListStatuses } from "@interfere/attio/funcs/attributes-list-statuses.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesListStatuses(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showArchived: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesListStatuses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAttributeStatusesRequest](../../models/operations/list-attribute-statuses-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAttributeStatusesResponse](../../models/operations/list-attribute-statuses-response.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.ListAttributeStatusesNotFoundError | 404                                       | application/json                          |
| errors.AttioError                         | 4XX, 5XX                                  | \*/\*                                     |

## createStatus

Add a new status to a status attribute on either an object or a list.

When `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAttributeStatus" method="post" path="/v2/{target}/{identifier}/attributes/{attribute}/statuses" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.createStatus({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    body: {
      data: {
        title: "In Progress",
        celebrationEnabled: true,
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
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
import { attributesCreateStatus } from "@interfere/attio/funcs/attributes-create-status.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesCreateStatus(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    body: {
      data: {
        title: "In Progress",
        celebrationEnabled: true,
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesCreateStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAttributeStatusRequest](../../models/operations/create-attribute-status-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAttributeStatusResponse](../../models/operations/create-attribute-status-response.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.CreateAttributeStatusValidationTypeError | 400                                             | application/json                                |
| errors.CreateAttributeStatusNotFoundError       | 404                                             | application/json                                |
| errors.CreateAttributeStatusSlugConflictError   | 409                                             | application/json                                |
| errors.AttioError                               | 4XX, 5XX                                        | \*/\*                                           |

## updateStatus

Update a status on an status attribute on either an object or a list.

When `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAttributeStatus" method="patch" path="/v2/{target}/{identifier}/attributes/{attribute}/statuses/{status}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.updateStatus({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    status: "In Progress",
    body: {
      data: {
        title: "In Progress",
        celebrationEnabled: true,
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
        isArchived: false,
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
import { attributesUpdateStatus } from "@interfere/attio/funcs/attributes-update-status.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesUpdateStatus(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    status: "In Progress",
    body: {
      data: {
        title: "In Progress",
        celebrationEnabled: true,
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
        isArchived: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesUpdateStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAttributeStatusRequest](../../models/operations/update-attribute-status-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAttributeStatusResponse](../../models/operations/update-attribute-status-response.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.UpdateAttributeStatusValueNotFoundError | 400                                            | application/json                               |
| errors.UpdateAttributeStatusNotFoundError      | 404                                            | application/json                               |
| errors.UpdateAttributeStatusSlugConflictError  | 409                                            | application/json                               |
| errors.AttioError                              | 4XX, 5XX                                       | \*/\*                                          |