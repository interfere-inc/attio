# Records

## Overview

Records are individual instances of objects e.g. a specific [person](/rest-api/endpoint-reference/standard-objects/people/list-person-records) or [company](/rest-api/endpoint-reference/standard-objects/companies/list-company-records). See our [objects and lists guide](/docs/objects-and-lists) for more information.

### Available Operations

* [postV2ObjectsObjectRecordsQuery](#postv2objectsobjectrecordsquery) - List records
* [putV2ObjectsObjectRecords](#putv2objectsobjectrecords) - Assert a record
* [postV2ObjectsObjectRecords](#postv2objectsobjectrecords) - Create a record
* [getV2ObjectsObjectRecordsRecordId](#getv2objectsobjectrecordsrecordid) - Get a record
* [putV2ObjectsObjectRecordsRecordId](#putv2objectsobjectrecordsrecordid) - Update a record (overwrite multiselect values)
* [deleteV2ObjectsObjectRecordsRecordId](#deletev2objectsobjectrecordsrecordid) - Delete a record
* [patchV2ObjectsObjectRecordsRecordId](#patchv2objectsobjectrecordsrecordid) - Update a record (append multiselect values)
* [getV2ObjectsObjectRecordsRecordIdAttributesAttributeValues](#getv2objectsobjectrecordsrecordidattributesattributevalues) - List record attribute values
* [getV2ObjectsObjectRecordsRecordIdEntries](#getv2objectsobjectrecordsrecordidentries) - List record entries
* [postV2ObjectsRecordsSearch](#postv2objectsrecordssearch) - Search records

## postV2ObjectsObjectRecordsQuery

Lists people, company or other records, with the option to filter and sort results.

Required scopes: `record_permission:read`, `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/objects/{object}/records/query" method="post" path="/v2/objects/{object}/records/query" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.records.postV2ObjectsObjectRecordsQuery({
    object: "people",
    body: {
      filter: {
        "name": "Ada Lovelace",
      },
      sorts: [
        {
          direction: "asc",
          attribute: "name",
          field: "last_name",
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
import { recordsPostV2ObjectsObjectRecordsQuery } from "@interfere/attio/funcs/records-post-v2-objects-object-records-query.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await recordsPostV2ObjectsObjectRecordsQuery(attio, {
    object: "people",
    body: {
      filter: {
        "name": "Ada Lovelace",
      },
      sorts: [
        {
          direction: "asc",
          attribute: "name",
          field: "last_name",
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
    console.log("recordsPostV2ObjectsObjectRecordsQuery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2ObjectsObjectRecordsQueryRequest](../../models/operations/post-v2-objects-object-records-query-request.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2ObjectsObjectRecordsQueryResponse](../../models/operations/post-v2-objects-object-records-query-response.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.FilterError                                  | 400                                                 | application/json                                    |
| errors.PostV2ObjectsObjectRecordsQueryNotFoundError | 404                                                 | application/json                                    |
| errors.AttioDefaultError                            | 4XX, 5XX                                            | \*/\*                                               |

## putV2ObjectsObjectRecords

Use this endpoint to create or update people, companies and other records. A matching attribute is used to search for existing records. If a record is found with the same value for the matching attribute, that record will be updated. If no record with the same value for the matching attribute is found, a new record will be created instead. If you would like to avoid matching, please use the [Create record endpoint](/rest-api/endpoint-reference/records/create-a-record).

If the matching attribute is a multiselect attribute, new values will be added and existing values will not be deleted. For any other multiselect attribute, all values will be either created or deleted as necessary to match the list of supplied values.

Required scopes: `record_permission:read-write`, `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/v2/objects/{object}/records" method="put" path="/v2/objects/{object}/records" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.records.putV2ObjectsObjectRecords({
    object: "people",
    matchingAttribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
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
import { recordsPutV2ObjectsObjectRecords } from "@interfere/attio/funcs/records-put-v2-objects-object-records.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await recordsPutV2ObjectsObjectRecords(attio, {
    object: "people",
    matchingAttribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
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
    console.log("recordsPutV2ObjectsObjectRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV2ObjectsObjectRecordsRequest](../../models/operations/put-v2-objects-object-records-request.md)                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV2ObjectsObjectRecordsResponse](../../models/operations/put-v2-objects-object-records-response.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.PutV2ObjectsObjectRecordsValueNotFoundError | 400                                                | application/json                                   |
| errors.PutV2ObjectsObjectRecordsNotFoundError      | 404                                                | application/json                                   |
| errors.AttioDefaultError                           | 4XX, 5XX                                           | \*/\*                                              |

## postV2ObjectsObjectRecords

Creates a new person, company or other record. This endpoint will throw on conflicts of unique attributes. If you would prefer to update records on conflicts, please use the [Assert record endpoint](/rest-api/endpoint-reference/records/assert-a-record) instead.

Required scopes: `record_permission:read-write`, `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/objects/{object}/records" method="post" path="/v2/objects/{object}/records" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.records.postV2ObjectsObjectRecords({
    object: "people",
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
import { recordsPostV2ObjectsObjectRecords } from "@interfere/attio/funcs/records-post-v2-objects-object-records.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await recordsPostV2ObjectsObjectRecords(attio, {
    object: "people",
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
    console.log("recordsPostV2ObjectsObjectRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2ObjectsObjectRecordsRequest](../../models/operations/post-v2-objects-object-records-request.md)                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2ObjectsObjectRecordsResponse](../../models/operations/post-v2-objects-object-records-response.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.PostV2ObjectsObjectRecordsValueNotFoundError | 400                                                 | application/json                                    |
| errors.PostV2ObjectsObjectRecordsNotFoundError      | 404                                                 | application/json                                    |
| errors.AttioDefaultError                            | 4XX, 5XX                                            | \*/\*                                               |

## getV2ObjectsObjectRecordsRecordId

Gets a single person, company or other record by its `record_id`.

Required scopes: `record_permission:read`, `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/objects/{object}/records/{record_id}" method="get" path="/v2/objects/{object}/records/{record_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.records.getV2ObjectsObjectRecordsRecordId({
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { recordsGetV2ObjectsObjectRecordsRecordId } from "@interfere/attio/funcs/records-get-v2-objects-object-records-record-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await recordsGetV2ObjectsObjectRecordsRecordId(attio, {
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordsGetV2ObjectsObjectRecordsRecordId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2ObjectsObjectRecordsRecordIdRequest](../../models/operations/get-v2-objects-object-records-record-id-request.md)                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ObjectsObjectRecordsRecordIdResponse](../../models/operations/get-v2-objects-object-records-record-id-response.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.GetV2ObjectsObjectRecordsRecordIdNotFoundError | 404                                                   | application/json                                      |
| errors.AttioDefaultError                              | 4XX, 5XX                                              | \*/\*                                                 |

## putV2ObjectsObjectRecordsRecordId

Use this endpoint to update people, companies, and other records by `record_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to append multiselect values without removing those that already exist.

Required scopes: `record_permission:read-write`, `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/v2/objects/{object}/records/{record_id}" method="put" path="/v2/objects/{object}/records/{record_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.records.putV2ObjectsObjectRecordsRecordId({
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
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
import { recordsPutV2ObjectsObjectRecordsRecordId } from "@interfere/attio/funcs/records-put-v2-objects-object-records-record-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await recordsPutV2ObjectsObjectRecordsRecordId(attio, {
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
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
    console.log("recordsPutV2ObjectsObjectRecordsRecordId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV2ObjectsObjectRecordsRecordIdRequest](../../models/operations/put-v2-objects-object-records-record-id-request.md)                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV2ObjectsObjectRecordsRecordIdResponse](../../models/operations/put-v2-objects-object-records-record-id-response.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.PutV2ObjectsObjectRecordsRecordIdMissingValueError | 400                                                       | application/json                                          |
| errors.PutV2ObjectsObjectRecordsRecordIdNotFoundError     | 404                                                       | application/json                                          |
| errors.AttioDefaultError                                  | 4XX, 5XX                                                  | \*/\*                                                     |

## deleteV2ObjectsObjectRecordsRecordId

Deletes a single record (e.g. a company or person) by ID.

Required scopes: `object_configuration:read`, `record_permission:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/objects/{object}/records/{record_id}" method="delete" path="/v2/objects/{object}/records/{record_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.records.deleteV2ObjectsObjectRecordsRecordId({
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { recordsDeleteV2ObjectsObjectRecordsRecordId } from "@interfere/attio/funcs/records-delete-v2-objects-object-records-record-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await recordsDeleteV2ObjectsObjectRecordsRecordId(attio, {
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordsDeleteV2ObjectsObjectRecordsRecordId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV2ObjectsObjectRecordsRecordIdRequest](../../models/operations/delete-v2-objects-object-records-record-id-request.md)                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2ObjectsObjectRecordsRecordIdResponse](../../models/operations/delete-v2-objects-object-records-record-id-response.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.DeleteV2ObjectsObjectRecordsRecordIdNotFoundError | 404                                                      | application/json                                         |
| errors.AttioDefaultError                                 | 4XX, 5XX                                                 | \*/\*                                                    |

## patchV2ObjectsObjectRecordsRecordId

Use this endpoint to update people, companies, and other records by `record_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.

Required scopes: `record_permission:read-write`, `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/objects/{object}/records/{record_id}" method="patch" path="/v2/objects/{object}/records/{record_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.records.patchV2ObjectsObjectRecordsRecordId({
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
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
import { recordsPatchV2ObjectsObjectRecordsRecordId } from "@interfere/attio/funcs/records-patch-v2-objects-object-records-record-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await recordsPatchV2ObjectsObjectRecordsRecordId(attio, {
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
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
    console.log("recordsPatchV2ObjectsObjectRecordsRecordId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2ObjectsObjectRecordsRecordIdRequest](../../models/operations/patch-v2-objects-object-records-record-id-request.md)                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2ObjectsObjectRecordsRecordIdResponse](../../models/operations/patch-v2-objects-object-records-record-id-response.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.PatchV2ObjectsObjectRecordsRecordIdMissingValueError | 400                                                         | application/json                                            |
| errors.PatchV2ObjectsObjectRecordsRecordIdNotFoundError     | 404                                                         | application/json                                            |
| errors.AttioDefaultError                                    | 4XX, 5XX                                                    | \*/\*                                                       |

## getV2ObjectsObjectRecordsRecordIdAttributesAttributeValues

Gets all values for a given attribute on a record. Historic values can be queried using the `show_historic` query param. Historic values cannot be queried on COMINT (Communication Intelligence) or enriched attributes and the endpoint will return a 400 error if this is attempted. Historic values are sorted from oldest to newest (by `active_from`). Some attributes are subject to billing status and will return an empty array of values if theworkspace being queried does not have the required billing flag enabled.

Required scopes: `record_permission:read`, `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/objects/{object}/records/{record_id}/attributes/{attribute}/values" method="get" path="/v2/objects/{object}/records/{record_id}/attributes/{attribute}/values" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.records.getV2ObjectsObjectRecordsRecordIdAttributesAttributeValues({
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showHistoric: true,
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
import { recordsGetV2ObjectsObjectRecordsRecordIdAttributesAttributeValues } from "@interfere/attio/funcs/records-get-v2-objects-object-records-record-id-attributes-attribute-values.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await recordsGetV2ObjectsObjectRecordsRecordIdAttributesAttributeValues(attio, {
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showHistoric: true,
    limit: 10,
    offset: 5,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordsGetV2ObjectsObjectRecordsRecordIdAttributesAttributeValues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesRequest](../../models/operations/get-v2-objects-object-records-record-id-attributes-attribute-values-request.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesResponse](../../models/operations/get-v2-objects-object-records-record-id-attributes-attribute-values-response.md)\>**

### Errors

| Error Type                                                                           | Status Code                                                                          | Content Type                                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| errors.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesValidationTypeError | 400                                                                                  | application/json                                                                     |
| errors.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesNotFoundError       | 404                                                                                  | application/json                                                                     |
| errors.AttioDefaultError                                                             | 4XX, 5XX                                                                             | \*/\*                                                                                |

## getV2ObjectsObjectRecordsRecordIdEntries

List all entries, across all lists, for which this record is the parent.

Required scopes: `record_permission:read`, `object_configuration:read`, `list_entry:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/objects/{object}/records/{record_id}/entries" method="get" path="/v2/objects/{object}/records/{record_id}/entries" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.records.getV2ObjectsObjectRecordsRecordIdEntries({
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
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
import { recordsGetV2ObjectsObjectRecordsRecordIdEntries } from "@interfere/attio/funcs/records-get-v2-objects-object-records-record-id-entries.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await recordsGetV2ObjectsObjectRecordsRecordIdEntries(attio, {
    object: "people",
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    limit: 10,
    offset: 5,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordsGetV2ObjectsObjectRecordsRecordIdEntries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2ObjectsObjectRecordsRecordIdEntriesRequest](../../models/operations/get-v2-objects-object-records-record-id-entries-request.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ObjectsObjectRecordsRecordIdEntriesResponse](../../models/operations/get-v2-objects-object-records-record-id-entries-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.AttioDefaultError | 4XX, 5XX                 | \*/\*                    |

## postV2ObjectsRecordsSearch

The search records endpoint provides a convenient way to fuzzy search for records across one or more objects.
The matching strategy employed in this endpoint follows the in-product strategy and will match names, domains, emails, phone numbers and social handles on people and companies, and labels on all other objects.
Please note, results returned from this endpoint are eventually consistent. For results which are guaranteed to be up to date, please use the record query endpoint instead.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `record_permission:read`, `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/objects/records/search" method="post" path="/v2/objects/records/search" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.records.postV2ObjectsRecordsSearch({
    query: "alan mathis",
    objects: [
      "people",
      "deals",
      "1b31b79a-ddf9-4d57-a320-884061b2bcff",
    ],
    requestAs: {
      type: "workspace-member",
      emailAddress: "alice@attio.com",
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
import { recordsPostV2ObjectsRecordsSearch } from "@interfere/attio/funcs/records-post-v2-objects-records-search.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await recordsPostV2ObjectsRecordsSearch(attio, {
    query: "alan mathis",
    objects: [
      "people",
      "deals",
      "1b31b79a-ddf9-4d57-a320-884061b2bcff",
    ],
    requestAs: {
      type: "workspace-member",
      emailAddress: "alice@attio.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("recordsPostV2ObjectsRecordsSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2ObjectsRecordsSearchRequest](../../models/operations/post-v2-objects-records-search-request.md)                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2ObjectsRecordsSearchResponse](../../models/operations/post-v2-objects-records-search-response.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.PostV2ObjectsRecordsSearchValueNotFoundError | 400                                                 | application/json                                    |
| errors.AttioDefaultError                            | 4XX, 5XX                                            | \*/\*                                               |