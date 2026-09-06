# Activities

## Overview

### Available Operations

* [getV2Activities](#getv2activities) - List activities
* [postV2Activities](#postv2activities) - Create an activity
* [getV2ActivitiesActivity](#getv2activitiesactivity) - Get an activity
* [deleteV2ActivitiesActivity](#deletev2activitiesactivity) - Delete an activity
* [patchV2ActivitiesActivity](#patchv2activitiesactivity) - Update an activity

## getV2Activities

Lists all system-defined and user-defined activities in your workspace.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `activity_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/activities" method="get" path="/v2/activities" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.activities.getV2Activities({
    cursor: "eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { activitiesGetV2Activities } from "@interfere/attio/funcs/activities-get-v2-activities.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await activitiesGetV2Activities(attio, {
    cursor: "eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activitiesGetV2Activities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2ActivitiesRequest](../../models/operations/get-v2-activities-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ActivitiesResponse](../../models/operations/get-v2-activities-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## postV2Activities

Creates a new custom activity in your workspace.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `activity_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/activities" method="post" path="/v2/activities" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.activities.postV2Activities({
    data: {
      apiSlug: "site_visits",
      singularNoun: "Site visit",
      pluralNoun: "Site visits",
      extends: "interactions",
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
import { activitiesPostV2Activities } from "@interfere/attio/funcs/activities-post-v2-activities.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await activitiesPostV2Activities(attio, {
    data: {
      apiSlug: "site_visits",
      singularNoun: "Site visit",
      pluralNoun: "Site visits",
      extends: "interactions",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activitiesPostV2Activities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2ActivitiesRequest](../../models/operations/post-v2-activities-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2ActivitiesResponse](../../models/operations/post-v2-activities-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.PostV2ActivitiesAuthError         | 403                                      | application/json                         |
| errors.PostV2ActivitiesSlugConflictError | 409                                      | application/json                         |
| errors.AttioError                        | 4XX, 5XX                                 | \*/\*                                    |

## getV2ActivitiesActivity

Gets a single activity by its `activity_id` or slug.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `activity_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/activities/{activity}" method="get" path="/v2/activities/{activity}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.activities.getV2ActivitiesActivity({
    activity: "phone_calls",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { activitiesGetV2ActivitiesActivity } from "@interfere/attio/funcs/activities-get-v2-activities-activity.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await activitiesGetV2ActivitiesActivity(attio, {
    activity: "phone_calls",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activitiesGetV2ActivitiesActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2ActivitiesActivityRequest](../../models/operations/get-v2-activities-activity-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ActivitiesActivityResponse](../../models/operations/get-v2-activities-activity-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetV2ActivitiesActivityNotFoundError | 404                                         | application/json                            |
| errors.AttioError                           | 4XX, 5XX                                    | \*/\*                                       |

## deleteV2ActivitiesActivity

Deletes a single activity by its `activity_id` or slug, along with all of its records. Archived activities can also be deleted.

This endpoint should be used with caution as it has the potential to remove a large amount of potentially valuable data.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `activity_configuration:read-write`, `activity_record:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/activities/{activity}" method="delete" path="/v2/activities/{activity}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.activities.deleteV2ActivitiesActivity({
    activity: "phone_calls",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { activitiesDeleteV2ActivitiesActivity } from "@interfere/attio/funcs/activities-delete-v2-activities-activity.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await activitiesDeleteV2ActivitiesActivity(attio, {
    activity: "phone_calls",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activitiesDeleteV2ActivitiesActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV2ActivitiesActivityRequest](../../models/operations/delete-v2-activities-activity-request.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2ActivitiesActivityResponse](../../models/operations/delete-v2-activities-activity-response.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.DeleteV2ActivitiesActivitySystemEditUnauthorizedError | 400                                                          | application/json                                             |
| errors.DeleteV2ActivitiesActivityNotFoundError               | 404                                                          | application/json                                             |
| errors.AttioError                                            | 4XX, 5XX                                                     | \*/\*                                                        |

## patchV2ActivitiesActivity

Updates a single activity by its `activity_id` or slug. The schema an activity extends is fixed after creation, so `extends` cannot be changed.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `activity_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/activities/{activity}" method="patch" path="/v2/activities/{activity}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.activities.patchV2ActivitiesActivity({
    activity: "phone_calls",
    body: {
      data: {
        apiSlug: "site_visits",
        singularNoun: "Site visit",
        pluralNoun: "Site visits",
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
import { activitiesPatchV2ActivitiesActivity } from "@interfere/attio/funcs/activities-patch-v2-activities-activity.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await activitiesPatchV2ActivitiesActivity(attio, {
    activity: "phone_calls",
    body: {
      data: {
        apiSlug: "site_visits",
        singularNoun: "Site visit",
        pluralNoun: "Site visits",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activitiesPatchV2ActivitiesActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2ActivitiesActivityRequest](../../models/operations/patch-v2-activities-activity-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2ActivitiesActivityResponse](../../models/operations/patch-v2-activities-activity-response.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.PatchV2ActivitiesActivityValidationTypeError | 400                                                 | application/json                                    |
| errors.PatchV2ActivitiesActivityAuthError           | 403                                                 | application/json                                    |
| errors.PatchV2ActivitiesActivityNotFoundError       | 404                                                 | application/json                                    |
| errors.PatchV2ActivitiesActivitySlugConflictError   | 409                                                 | application/json                                    |
| errors.AttioError                                   | 4XX, 5XX                                            | \*/\*                                               |