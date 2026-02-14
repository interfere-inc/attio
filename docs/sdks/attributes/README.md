# Attributes

## Overview

Attributes model properties of objects and lists. Some attributes, such as the `name` attribute on a person, are system-defined, while others are user-defined. Attributes are one of [many types](/docs/attribute-types) such as text, location or select. See our [objects and lists guide](/docs/objects-and-lists) for more information.

### Available Operations

* [getV2TargetIdentifierAttributes](#getv2targetidentifierattributes) - List attributes
* [postV2TargetIdentifierAttributes](#postv2targetidentifierattributes) - Create an attribute
* [getV2TargetIdentifierAttributesAttribute](#getv2targetidentifierattributesattribute) - Get an attribute
* [patchV2TargetIdentifierAttributesAttribute](#patchv2targetidentifierattributesattribute) - Update an attribute
* [getV2TargetIdentifierAttributesAttributeOptions](#getv2targetidentifierattributesattributeoptions) - List select options
* [postV2TargetIdentifierAttributesAttributeOptions](#postv2targetidentifierattributesattributeoptions) - Create a select option
* [patchV2TargetIdentifierAttributesAttributeOptionsOption](#patchv2targetidentifierattributesattributeoptionsoption) - Update a select option
* [getV2TargetIdentifierAttributesAttributeStatuses](#getv2targetidentifierattributesattributestatuses) - List statuses
* [postV2TargetIdentifierAttributesAttributeStatuses](#postv2targetidentifierattributesattributestatuses) - Create a status
* [patchV2TargetIdentifierAttributesAttributeStatusesStatus](#patchv2targetidentifierattributesattributestatusesstatus) - Update a status

## getV2TargetIdentifierAttributes

Lists all attributes defined on a specific object or list. Attributes are returned in the order that they are sorted by in the UI.

Required scopes: `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/{target}/{identifier}/attributes" method="get" path="/v2/{target}/{identifier}/attributes" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.getV2TargetIdentifierAttributes({
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
import { attributesGetV2TargetIdentifierAttributes } from "@interfere/attio/funcs/attributes-get-v2-target-identifier-attributes.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesGetV2TargetIdentifierAttributes(attio, {
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
    console.log("attributesGetV2TargetIdentifierAttributes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TargetIdentifierAttributesRequest](../../models/operations/get-v2-target-identifier-attributes-request.md)                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TargetIdentifierAttributesResponse](../../models/operations/get-v2-target-identifier-attributes-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## postV2TargetIdentifierAttributes

Creates a new attribute on either an object or a list.

For record-reference attributes, you can optionally create a bidirectional relationship by providing a `relationship` object. This will create two entangled attributes: one on the specified object and a reverse attribute on the related object.

To create an attribute on an object, you must also have the `object_configuration:read-write` scope.

To create an attribute on a list, you must also have the `list_configuration:read-write` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/{target}/{identifier}/attributes" method="post" path="/v2/{target}/{identifier}/attributes" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.postV2TargetIdentifierAttributes({
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
        relationship: null,
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
import { attributesPostV2TargetIdentifierAttributes } from "@interfere/attio/funcs/attributes-post-v2-target-identifier-attributes.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPostV2TargetIdentifierAttributes(attio, {
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
        relationship: null,
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
    console.log("attributesPostV2TargetIdentifierAttributes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2TargetIdentifierAttributesRequest](../../models/operations/post-v2-target-identifier-attributes-request.md)                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2TargetIdentifierAttributesResponse](../../models/operations/post-v2-target-identifier-attributes-response.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.PostV2TargetIdentifierAttributesValidationTypeError | 400                                                        | application/json                                           |
| errors.PostV2TargetIdentifierAttributesNotFoundError       | 404                                                        | application/json                                           |
| errors.PostV2TargetIdentifierAttributesSlugConflictError   | 409                                                        | application/json                                           |
| errors.AttioError                                          | 4XX, 5XX                                                   | \*/\*                                                      |

## getV2TargetIdentifierAttributesAttribute

Gets information about a single attribute on either an object or a list.

Required scopes: `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/{target}/{identifier}/attributes/{attribute}" method="get" path="/v2/{target}/{identifier}/attributes/{attribute}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.getV2TargetIdentifierAttributesAttribute({
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
import { attributesGetV2TargetIdentifierAttributesAttribute } from "@interfere/attio/funcs/attributes-get-v2-target-identifier-attributes-attribute.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesGetV2TargetIdentifierAttributesAttribute(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesGetV2TargetIdentifierAttributesAttribute failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TargetIdentifierAttributesAttributeRequest](../../models/operations/get-v2-target-identifier-attributes-attribute-request.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TargetIdentifierAttributesAttributeResponse](../../models/operations/get-v2-target-identifier-attributes-attribute-response.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.GetV2TargetIdentifierAttributesAttributeNotFoundError | 404                                                          | application/json                                             |
| errors.AttioError                                            | 4XX, 5XX                                                     | \*/\*                                                        |

## patchV2TargetIdentifierAttributesAttribute

Updates a single attribute on a given object or list.

Required scopes: `object_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/{target}/{identifier}/attributes/{attribute}" method="patch" path="/v2/{target}/{identifier}/attributes/{attribute}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.patchV2TargetIdentifierAttributesAttribute({
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
import { attributesPatchV2TargetIdentifierAttributesAttribute } from "@interfere/attio/funcs/attributes-patch-v2-target-identifier-attributes-attribute.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPatchV2TargetIdentifierAttributesAttribute(attio, {
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
    console.log("attributesPatchV2TargetIdentifierAttributesAttribute failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2TargetIdentifierAttributesAttributeRequest](../../models/operations/patch-v2-target-identifier-attributes-attribute-request.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2TargetIdentifierAttributesAttributeResponse](../../models/operations/patch-v2-target-identifier-attributes-attribute-response.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.SystemEditUnauthorizedError                             | 400                                                            | application/json                                               |
| errors.PatchV2TargetIdentifierAttributesAttributeNotFoundError | 404                                                            | application/json                                               |
| errors.AttioError                                              | 4XX, 5XX                                                       | \*/\*                                                          |

## getV2TargetIdentifierAttributesAttributeOptions

Lists all select options for a particular attribute on either an object or a list.

Required scopes: `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/{target}/{identifier}/attributes/{attribute}/options" method="get" path="/v2/{target}/{identifier}/attributes/{attribute}/options" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.getV2TargetIdentifierAttributesAttributeOptions({
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
import { attributesGetV2TargetIdentifierAttributesAttributeOptions } from "@interfere/attio/funcs/attributes-get-v2-target-identifier-attributes-attribute-options.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesGetV2TargetIdentifierAttributesAttributeOptions(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showArchived: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesGetV2TargetIdentifierAttributesAttributeOptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TargetIdentifierAttributesAttributeOptionsRequest](../../models/operations/get-v2-target-identifier-attributes-attribute-options-request.md)                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TargetIdentifierAttributesAttributeOptionsResponse](../../models/operations/get-v2-target-identifier-attributes-attribute-options-response.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.GetV2TargetIdentifierAttributesAttributeOptionsNotFoundError | 404                                                                 | application/json                                                    |
| errors.AttioError                                                   | 4XX, 5XX                                                            | \*/\*                                                               |

## postV2TargetIdentifierAttributesAttributeOptions

Adds a select option to a select attribute on an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/{target}/{identifier}/attributes/{attribute}/options" method="post" path="/v2/{target}/{identifier}/attributes/{attribute}/options" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.postV2TargetIdentifierAttributesAttributeOptions({
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
import { attributesPostV2TargetIdentifierAttributesAttributeOptions } from "@interfere/attio/funcs/attributes-post-v2-target-identifier-attributes-attribute-options.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPostV2TargetIdentifierAttributesAttributeOptions(attio, {
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
    console.log("attributesPostV2TargetIdentifierAttributesAttributeOptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2TargetIdentifierAttributesAttributeOptionsRequest](../../models/operations/post-v2-target-identifier-attributes-attribute-options-request.md)                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2TargetIdentifierAttributesAttributeOptionsResponse](../../models/operations/post-v2-target-identifier-attributes-attribute-options-response.md)\>**

### Errors

| Error Type                                                                 | Status Code                                                                | Content Type                                                               |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| errors.PostV2TargetIdentifierAttributesAttributeOptionsValidationTypeError | 400                                                                        | application/json                                                           |
| errors.PostV2TargetIdentifierAttributesAttributeOptionsNotFoundError       | 404                                                                        | application/json                                                           |
| errors.PostV2TargetIdentifierAttributesAttributeOptionsSlugConflictError   | 409                                                                        | application/json                                                           |
| errors.AttioError                                                          | 4XX, 5XX                                                                   | \*/\*                                                                      |

## patchV2TargetIdentifierAttributesAttributeOptionsOption

Updates a select option on an attribute on either an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/{target}/{identifier}/attributes/{attribute}/options/{option}" method="patch" path="/v2/{target}/{identifier}/attributes/{attribute}/options/{option}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.patchV2TargetIdentifierAttributesAttributeOptionsOption({
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
import { attributesPatchV2TargetIdentifierAttributesAttributeOptionsOption } from "@interfere/attio/funcs/attributes-patch-v2-target-identifier-attributes-attribute-options-option.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPatchV2TargetIdentifierAttributesAttributeOptionsOption(attio, {
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
    console.log("attributesPatchV2TargetIdentifierAttributesAttributeOptionsOption failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2TargetIdentifierAttributesAttributeOptionsOptionRequest](../../models/operations/patch-v2-target-identifier-attributes-attribute-options-option-request.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponse](../../models/operations/patch-v2-target-identifier-attributes-attribute-options-option-response.md)\>**

### Errors

| Error Type                                                                       | Status Code                                                                      | Content Type                                                                     |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| errors.PatchV2TargetIdentifierAttributesAttributeOptionsOptionValueNotFoundError | 400                                                                              | application/json                                                                 |
| errors.PatchV2TargetIdentifierAttributesAttributeOptionsOptionNotFoundError      | 404                                                                              | application/json                                                                 |
| errors.PatchV2TargetIdentifierAttributesAttributeOptionsOptionSlugConflictError  | 409                                                                              | application/json                                                                 |
| errors.AttioError                                                                | 4XX, 5XX                                                                         | \*/\*                                                                            |

## getV2TargetIdentifierAttributesAttributeStatuses

Lists all statuses for a particular status attribute on either an object or a list.

Required scopes: `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/{target}/{identifier}/attributes/{attribute}/statuses" method="get" path="/v2/{target}/{identifier}/attributes/{attribute}/statuses" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.getV2TargetIdentifierAttributesAttributeStatuses({
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
import { attributesGetV2TargetIdentifierAttributesAttributeStatuses } from "@interfere/attio/funcs/attributes-get-v2-target-identifier-attributes-attribute-statuses.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesGetV2TargetIdentifierAttributesAttributeStatuses(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showArchived: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesGetV2TargetIdentifierAttributesAttributeStatuses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TargetIdentifierAttributesAttributeStatusesRequest](../../models/operations/get-v2-target-identifier-attributes-attribute-statuses-request.md)                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TargetIdentifierAttributesAttributeStatusesResponse](../../models/operations/get-v2-target-identifier-attributes-attribute-statuses-response.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.GetV2TargetIdentifierAttributesAttributeStatusesNotFoundError | 404                                                                  | application/json                                                     |
| errors.AttioError                                                    | 4XX, 5XX                                                             | \*/\*                                                                |

## postV2TargetIdentifierAttributesAttributeStatuses

Add a new status to a status attribute on either an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/{target}/{identifier}/attributes/{attribute}/statuses" method="post" path="/v2/{target}/{identifier}/attributes/{attribute}/statuses" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.postV2TargetIdentifierAttributesAttributeStatuses({
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
import { attributesPostV2TargetIdentifierAttributesAttributeStatuses } from "@interfere/attio/funcs/attributes-post-v2-target-identifier-attributes-attribute-statuses.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPostV2TargetIdentifierAttributesAttributeStatuses(attio, {
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
    console.log("attributesPostV2TargetIdentifierAttributesAttributeStatuses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2TargetIdentifierAttributesAttributeStatusesRequest](../../models/operations/post-v2-target-identifier-attributes-attribute-statuses-request.md)              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2TargetIdentifierAttributesAttributeStatusesResponse](../../models/operations/post-v2-target-identifier-attributes-attribute-statuses-response.md)\>**

### Errors

| Error Type                                                                  | Status Code                                                                 | Content Type                                                                |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| errors.PostV2TargetIdentifierAttributesAttributeStatusesValidationTypeError | 400                                                                         | application/json                                                            |
| errors.PostV2TargetIdentifierAttributesAttributeStatusesNotFoundError       | 404                                                                         | application/json                                                            |
| errors.PostV2TargetIdentifierAttributesAttributeStatusesSlugConflictError   | 409                                                                         | application/json                                                            |
| errors.AttioError                                                           | 4XX, 5XX                                                                    | \*/\*                                                                       |

## patchV2TargetIdentifierAttributesAttributeStatusesStatus

Update a status on an status attribute on either an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/{target}/{identifier}/attributes/{attribute}/statuses/{status}" method="patch" path="/v2/{target}/{identifier}/attributes/{attribute}/statuses/{status}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.patchV2TargetIdentifierAttributesAttributeStatusesStatus({
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
import { attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus } from "@interfere/attio/funcs/attributes-patch-v2-target-identifier-attributes-attribute-statuses-status.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus(attio, {
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
    console.log("attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.PatchV2TargetIdentifierAttributesAttributeStatusesStatusRequest](../../models/operations/patch-v2-target-identifier-attributes-attribute-statuses-status-request.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[operations.PatchV2TargetIdentifierAttributesAttributeStatusesStatusResponse](../../models/operations/patch-v2-target-identifier-attributes-attribute-statuses-status-response.md)\>**

### Errors

| Error Type                                                                        | Status Code                                                                       | Content Type                                                                      |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| errors.PatchV2TargetIdentifierAttributesAttributeStatusesStatusValueNotFoundError | 400                                                                               | application/json                                                                  |
| errors.PatchV2TargetIdentifierAttributesAttributeStatusesStatusNotFoundError      | 404                                                                               | application/json                                                                  |
| errors.PatchV2TargetIdentifierAttributesAttributeStatusesStatusSlugConflictError  | 409                                                                               | application/json                                                                  |
| errors.AttioError                                                                 | 4XX, 5XX                                                                          | \*/\*                                                                             |