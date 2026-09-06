# ActivityRecords

## Overview

### Available Operations

* [postV2ActivitiesActivityRecordsQuery](#postv2activitiesactivityrecordsquery) - List activity records
* [postV2ActivitiesActivityRecords](#postv2activitiesactivityrecords) - Create an activity record
* [getV2ActivitiesActivityRecordsRecordId](#getv2activitiesactivityrecordsrecordid) - Get an activity record
* [putV2ActivitiesActivityRecordsRecordId](#putv2activitiesactivityrecordsrecordid) - Update an activity record (overwrite multiselect values)
* [deleteV2ActivitiesActivityRecordsRecordId](#deletev2activitiesactivityrecordsrecordid) - Delete an activity record
* [patchV2ActivitiesActivityRecordsRecordId](#patchv2activitiesactivityrecordsrecordid) - Update an activity record (append multiselect values)

## postV2ActivitiesActivityRecordsQuery

Lists activity records, with the option to filter and sort results.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `activity_record:read`, `activity_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/activities/{activity}/records/query" method="post" path="/v2/activities/{activity}/records/query" example="Filter by attribute" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.activityRecords.postV2ActivitiesActivityRecordsQuery({
    activity: "phone_calls",
    body: {
      filter: {
        "direction": "Outbound",
      },
      sorts: [
        {
          direction: "desc",
          attribute: "timestamp",
        },
      ],
      limit: 500,
      offset: 0,
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
import { activityRecordsPostV2ActivitiesActivityRecordsQuery } from "@interfere/attio/funcs/activity-records-post-v2-activities-activity-records-query.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await activityRecordsPostV2ActivitiesActivityRecordsQuery(attio, {
    activity: "phone_calls",
    body: {
      filter: {
        "direction": "Outbound",
      },
      sorts: [
        {
          direction: "desc",
          attribute: "timestamp",
        },
      ],
      limit: 500,
      offset: 0,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityRecordsPostV2ActivitiesActivityRecordsQuery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2ActivitiesActivityRecordsQueryRequest](../../models/operations/post-v2-activities-activity-records-query-request.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2ActivitiesActivityRecordsQueryResponse](../../models/operations/post-v2-activities-activity-records-query-response.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.PostV2ActivitiesActivityRecordsQueryFilterError   | 400                                                      | application/json                                         |
| errors.PostV2ActivitiesActivityRecordsQueryNotFoundError | 404                                                      | application/json                                         |
| errors.AttioError                                        | 4XX, 5XX                                                 | \*/\*                                                    |

## postV2ActivitiesActivityRecords

Creates a new activity record, for example one specific phone call.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `activity_record:read-write`, `activity_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/activities/{activity}/records" method="post" path="/v2/activities/{activity}/records" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.activityRecords.postV2ActivitiesActivityRecords({
    activity: "phone_calls",
    body: {
      data: {
        values: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
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
import { activityRecordsPostV2ActivitiesActivityRecords } from "@interfere/attio/funcs/activity-records-post-v2-activities-activity-records.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await activityRecordsPostV2ActivitiesActivityRecords(attio, {
    activity: "phone_calls",
    body: {
      data: {
        values: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityRecordsPostV2ActivitiesActivityRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2ActivitiesActivityRecordsRequest](../../models/operations/post-v2-activities-activity-records-request.md)                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2ActivitiesActivityRecordsResponse](../../models/operations/post-v2-activities-activity-records-response.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.PostV2ActivitiesActivityRecordsValueNotFoundError | 400                                                      | application/json                                         |
| errors.PostV2ActivitiesActivityRecordsAuthError          | 403                                                      | application/json                                         |
| errors.PostV2ActivitiesActivityRecordsNotFoundError      | 404                                                      | application/json                                         |
| errors.AttioError                                        | 4XX, 5XX                                                 | \*/\*                                                    |

## getV2ActivitiesActivityRecordsRecordId

Gets a single activity record by its `record_id`.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `activity_record:read`, `activity_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/activities/{activity}/records/{record_id}" method="get" path="/v2/activities/{activity}/records/{record_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.activityRecords.getV2ActivitiesActivityRecordsRecordId({
    activity: "phone_calls",
    recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { activityRecordsGetV2ActivitiesActivityRecordsRecordId } from "@interfere/attio/funcs/activity-records-get-v2-activities-activity-records-record-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await activityRecordsGetV2ActivitiesActivityRecordsRecordId(attio, {
    activity: "phone_calls",
    recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityRecordsGetV2ActivitiesActivityRecordsRecordId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2ActivitiesActivityRecordsRecordIdRequest](../../models/operations/get-v2-activities-activity-records-record-id-request.md)                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ActivitiesActivityRecordsRecordIdResponse](../../models/operations/get-v2-activities-activity-records-record-id-response.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.GetV2ActivitiesActivityRecordsRecordIdNotFoundError | 404                                                        | application/json                                           |
| errors.AttioError                                          | 4XX, 5XX                                                   | \*/\*                                                      |

## putV2ActivitiesActivityRecordsRecordId

Use this endpoint to update activity records by `record_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to append multiselect values without removing those that already exist.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `activity_record:read-write`, `activity_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/v2/activities/{activity}/records/{record_id}" method="put" path="/v2/activities/{activity}/records/{record_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.activityRecords.putV2ActivitiesActivityRecordsRecordId({
    activity: "phone_calls",
    recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
    body: {
      data: {
        values: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
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
import { activityRecordsPutV2ActivitiesActivityRecordsRecordId } from "@interfere/attio/funcs/activity-records-put-v2-activities-activity-records-record-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await activityRecordsPutV2ActivitiesActivityRecordsRecordId(attio, {
    activity: "phone_calls",
    recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
    body: {
      data: {
        values: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityRecordsPutV2ActivitiesActivityRecordsRecordId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV2ActivitiesActivityRecordsRecordIdRequest](../../models/operations/put-v2-activities-activity-records-record-id-request.md)                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV2ActivitiesActivityRecordsRecordIdResponse](../../models/operations/put-v2-activities-activity-records-record-id-response.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.PutV2ActivitiesActivityRecordsRecordIdMissingValueError | 400                                                            | application/json                                               |
| errors.PutV2ActivitiesActivityRecordsRecordIdAuthError         | 403                                                            | application/json                                               |
| errors.PutV2ActivitiesActivityRecordsRecordIdNotFoundError     | 404                                                            | application/json                                               |
| errors.AttioError                                              | 4XX, 5XX                                                       | \*/\*                                                          |

## deleteV2ActivitiesActivityRecordsRecordId

Deletes a single activity record by its `record_id`.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `activity_record:read-write`, `activity_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/activities/{activity}/records/{record_id}" method="delete" path="/v2/activities/{activity}/records/{record_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.activityRecords.deleteV2ActivitiesActivityRecordsRecordId({
    activity: "phone_calls",
    recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { activityRecordsDeleteV2ActivitiesActivityRecordsRecordId } from "@interfere/attio/funcs/activity-records-delete-v2-activities-activity-records-record-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await activityRecordsDeleteV2ActivitiesActivityRecordsRecordId(attio, {
    activity: "phone_calls",
    recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityRecordsDeleteV2ActivitiesActivityRecordsRecordId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV2ActivitiesActivityRecordsRecordIdRequest](../../models/operations/delete-v2-activities-activity-records-record-id-request.md)                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2ActivitiesActivityRecordsRecordIdResponse](../../models/operations/delete-v2-activities-activity-records-record-id-response.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.DeleteV2ActivitiesActivityRecordsRecordIdAuthError     | 403                                                           | application/json                                              |
| errors.DeleteV2ActivitiesActivityRecordsRecordIdNotFoundError | 404                                                           | application/json                                              |
| errors.AttioError                                             | 4XX, 5XX                                                      | \*/\*                                                         |

## patchV2ActivitiesActivityRecordsRecordId

Use this endpoint to update activity records by `record_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `activity_record:read-write`, `activity_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/activities/{activity}/records/{record_id}" method="patch" path="/v2/activities/{activity}/records/{record_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.activityRecords.patchV2ActivitiesActivityRecordsRecordId({
    activity: "phone_calls",
    recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
    body: {
      data: {
        values: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
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
import { activityRecordsPatchV2ActivitiesActivityRecordsRecordId } from "@interfere/attio/funcs/activity-records-patch-v2-activities-activity-records-record-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await activityRecordsPatchV2ActivitiesActivityRecordsRecordId(attio, {
    activity: "phone_calls",
    recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
    body: {
      data: {
        values: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("activityRecordsPatchV2ActivitiesActivityRecordsRecordId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2ActivitiesActivityRecordsRecordIdRequest](../../models/operations/patch-v2-activities-activity-records-record-id-request.md)                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2ActivitiesActivityRecordsRecordIdResponse](../../models/operations/patch-v2-activities-activity-records-record-id-response.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.PatchV2ActivitiesActivityRecordsRecordIdMissingValueError | 400                                                              | application/json                                                 |
| errors.PatchV2ActivitiesActivityRecordsRecordIdAuthError         | 403                                                              | application/json                                                 |
| errors.PatchV2ActivitiesActivityRecordsRecordIdNotFoundError     | 404                                                              | application/json                                                 |
| errors.AttioError                                                | 4XX, 5XX                                                         | \*/\*                                                            |