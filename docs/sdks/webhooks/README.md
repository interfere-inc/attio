# Webhooks

## Overview

Webhooks allow you to listen for changes to data in Attio, for example when a record is updated.

### Available Operations

* [getV2Webhooks](#getv2webhooks) - List webhooks
* [postV2Webhooks](#postv2webhooks) - Create a webhook
* [getV2WebhooksWebhookId](#getv2webhookswebhookid) - Get a webhook
* [deleteV2WebhooksWebhookId](#deletev2webhookswebhookid) - Delete a webhook
* [patchV2WebhooksWebhookId](#patchv2webhookswebhookid) - Update a webhook

## getV2Webhooks

Get all of the webhooks in your workspace.

Required scopes: `webhook:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/webhooks" method="get" path="/v2/webhooks" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.webhooks.getV2Webhooks({
    limit: 10,
    offset: 5,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { webhooksGetV2Webhooks } from "@interfere/attio/funcs/webhooks-get-v2-webhooks.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await webhooksGetV2Webhooks(attio, {
    limit: 10,
    offset: 5,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksGetV2Webhooks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2WebhooksRequest](../../models/operations/get-v2-webhooks-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2WebhooksResponse](../../models/operations/get-v2-webhooks-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## postV2Webhooks

Create a webhook and associated subscriptions.

Required scopes: `webhook:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/webhooks" method="post" path="/v2/webhooks" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.webhooks.postV2Webhooks({
    data: {
      targetUrl: "https://example.com/webhook",
      subscriptions: [],
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
import { webhooksPostV2Webhooks } from "@interfere/attio/funcs/webhooks-post-v2-webhooks.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await webhooksPostV2Webhooks(attio, {
    data: {
      targetUrl: "https://example.com/webhook",
      subscriptions: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksPostV2Webhooks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2WebhooksRequest](../../models/operations/post-v2-webhooks-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2WebhooksResponse](../../models/operations/post-v2-webhooks-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.PostV2WebhooksValidationTypeError | 400                                      | application/json                         |
| errors.AttioError                        | 4XX, 5XX                                 | \*/\*                                    |

## getV2WebhooksWebhookId

Get a single webhook.

Required scopes: `webhook:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/webhooks/{webhook_id}" method="get" path="/v2/webhooks/{webhook_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.webhooks.getV2WebhooksWebhookId({
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { webhooksGetV2WebhooksWebhookId } from "@interfere/attio/funcs/webhooks-get-v2-webhooks-webhook-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await webhooksGetV2WebhooksWebhookId(attio, {
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksGetV2WebhooksWebhookId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2WebhooksWebhookIdRequest](../../models/operations/get-v2-webhooks-webhook-id-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2WebhooksWebhookIdResponse](../../models/operations/get-v2-webhooks-webhook-id-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetV2WebhooksWebhookIdNotFoundError | 404                                        | application/json                           |
| errors.AttioError                          | 4XX, 5XX                                   | \*/\*                                      |

## deleteV2WebhooksWebhookId

Delete a webhook by ID.

Required scopes: `webhook:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/webhooks/{webhook_id}" method="delete" path="/v2/webhooks/{webhook_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.webhooks.deleteV2WebhooksWebhookId({
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { webhooksDeleteV2WebhooksWebhookId } from "@interfere/attio/funcs/webhooks-delete-v2-webhooks-webhook-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await webhooksDeleteV2WebhooksWebhookId(attio, {
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksDeleteV2WebhooksWebhookId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV2WebhooksWebhookIdRequest](../../models/operations/delete-v2-webhooks-webhook-id-request.md)                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2WebhooksWebhookIdResponse](../../models/operations/delete-v2-webhooks-webhook-id-response.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.DeleteV2WebhooksWebhookIdNotFoundError | 404                                           | application/json                              |
| errors.AttioError                             | 4XX, 5XX                                      | \*/\*                                         |

## patchV2WebhooksWebhookId

Update a webhook and associated subscriptions.

Required scopes: `webhook:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/webhooks/{webhook_id}" method="patch" path="/v2/webhooks/{webhook_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.webhooks.patchV2WebhooksWebhookId({
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
    body: {
      data: {
        targetUrl: "https://example.com/webhook",
        subscriptions: [
          {
            eventType: "note.created",
            filter: {
              dollarAnd: [
                {
                  field: "parent_object_id",
                  operator: "equals",
                  value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
                },
              ],
            },
          },
        ],
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
import { webhooksPatchV2WebhooksWebhookId } from "@interfere/attio/funcs/webhooks-patch-v2-webhooks-webhook-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await webhooksPatchV2WebhooksWebhookId(attio, {
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
    body: {
      data: {
        targetUrl: "https://example.com/webhook",
        subscriptions: [
          {
            eventType: "note.created",
            filter: {
              dollarAnd: [
                {
                  field: "parent_object_id",
                  operator: "equals",
                  value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
                },
              ],
            },
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksPatchV2WebhooksWebhookId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2WebhooksWebhookIdRequest](../../models/operations/patch-v2-webhooks-webhook-id-request.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2WebhooksWebhookIdResponse](../../models/operations/patch-v2-webhooks-webhook-id-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.PatchV2WebhooksWebhookIdNotFoundError | 404                                          | application/json                             |
| errors.AttioError                            | 4XX, 5XX                                     | \*/\*                                        |