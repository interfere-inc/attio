# Entries

## Overview

Entries are elements in a list that reference a single parent record. Entries contain their own data from attributes defined on the list and also data from their parent record. See our [objects and lists guide](/docs/objects-and-lists) for more information.

### Available Operations

* [query](#query) - List entries
* [create](#create) - Create an entry (add record to list)
* [assert](#assert) - Upsert a list entry by parent
* [get](#get) - Get a list entry
* [update](#update) - Update a list entry (overwrite multiselect values)
* [delete](#delete) - Delete a list entry
* [updateAppending](#updateappending) - Update a list entry (append multiselect values)
* [listAttributeValues](#listattributevalues) - List attribute values for a list entry
* [putV2ListsListEntriesEntryIdAttributesAttributeValues](#putv2listslistentriesentryidattributesattributevalues) - Write list entry attribute values

## query

Lists entries in a given list, with the option to filter and sort results.

Required scopes: `list_entry:read`, `list_configuration:read`.

### Example Usage: Filter by attribute

<!-- UsageSnippet language="typescript" operationID="queryEntries" method="post" path="/v2/lists/{list}/entries/query" example="Filter by attribute" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.query({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
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
import { entriesQuery } from "@interfere/attio/funcs/entries-query.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesQuery(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
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
    console.log("entriesQuery failed:", res.error);
  }
}

run();
```
### Example Usage: Filter by view

<!-- UsageSnippet language="typescript" operationID="queryEntries" method="post" path="/v2/lists/{list}/entries/query" example="Filter by view" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.query({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    body: {
      filterViewId: "cf7aaeb5-7507-4a84-9c26-9d36e34d7b70",
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
import { entriesQuery } from "@interfere/attio/funcs/entries-query.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesQuery(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    body: {
      filterViewId: "cf7aaeb5-7507-4a84-9c26-9d36e34d7b70",
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
    console.log("entriesQuery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryEntriesRequest](../../models/operations/query-entries-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.QueryEntriesResponse](../../models/operations/query-entries-response.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.QueryEntriesNotFoundError | 404                              | application/json                 |
| errors.AttioError                | 4XX, 5XX                         | \*/\*                            |

## create

Adds a record to a list as a new list entry. This endpoint will throw on conflicts of unique attributes. Multiple list entries are allowed for the same parent record

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createEntry" method="post" path="/v2/lists/{list}/entries" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.create({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    body: {
      data: {
        parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        parentObject: "people",
        entryValues: {
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
import { entriesCreate } from "@interfere/attio/funcs/entries-create.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesCreate(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    body: {
      data: {
        parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        parentObject: "people",
        entryValues: {
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
    console.log("entriesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateEntryRequest](../../models/operations/create-entry-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateEntryResponse](../../models/operations/create-entry-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.CreateEntryValueNotFoundError | 400                                  | application/json                     |
| errors.CreateEntryAuthError          | 403                                  | application/json                     |
| errors.CreateEntryNotFoundError      | 404                                  | application/json                     |
| errors.AttioError                    | 4XX, 5XX                             | \*/\*                                |

## assert

Use this endpoint to create or update a list entry for a given parent record. If an entry with the specified parent record is found, that entry will be updated. If no such entry is found, a new entry will be created instead. If there are multiple entries with the same parent record, this endpoint with return the "MULTIPLE_MATCH_RESULTS" error. When writing to multi-select attributes, all values will be either created or deleted as necessary to match the list of values supplied in the request body.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="assertEntry" method="put" path="/v2/lists/{list}/entries" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.assert({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    body: {
      data: {
        parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        parentObject: "people",
        entryValues: {
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
import { entriesAssert } from "@interfere/attio/funcs/entries-assert.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesAssert(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    body: {
      data: {
        parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        parentObject: "people",
        entryValues: {
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
    console.log("entriesAssert failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AssertEntryRequest](../../models/operations/assert-entry-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AssertEntryResponse](../../models/operations/assert-entry-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.AssertEntryInvalidRequestError | 400                                   | application/json                      |
| errors.AssertEntryAuthError           | 403                                   | application/json                      |
| errors.AssertEntryNotFoundError       | 404                                   | application/json                      |
| errors.AttioError                     | 4XX, 5XX                              | \*/\*                                 |

## get

Gets a single list entry by its `entry_id`.

Required scopes: `list_entry:read`, `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getEntry" method="get" path="/v2/lists/{list}/entries/{entry_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.get({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { entriesGet } from "@interfere/attio/funcs/entries-get.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesGet(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("entriesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEntryRequest](../../models/operations/get-entry-request.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEntryResponse](../../models/operations/get-entry-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.GetEntryNotFoundError | 404                          | application/json             |
| errors.AttioError            | 4XX, 5XX                     | \*/\*                        |

## update

Use this endpoint to update list entries by `entry_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to add multiselect attribute values without removing those value that already exist.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateEntry" method="put" path="/v2/lists/{list}/entries/{entry_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.update({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    body: {
      data: {
        entryValues: {
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
import { entriesUpdate } from "@interfere/attio/funcs/entries-update.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesUpdate(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    body: {
      data: {
        entryValues: {
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
    console.log("entriesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateEntryRequest](../../models/operations/update-entry-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateEntryResponse](../../models/operations/update-entry-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UpdateEntryInvalidRequestError | 400                                   | application/json                      |
| errors.UpdateEntryAuthError           | 403                                   | application/json                      |
| errors.UpdateEntryNotFoundError       | 404                                   | application/json                      |
| errors.AttioError                     | 4XX, 5XX                              | \*/\*                                 |

## delete

Deletes a single list entry by its `entry_id`.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteEntry" method="delete" path="/v2/lists/{list}/entries/{entry_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.delete({
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { entriesDelete } from "@interfere/attio/funcs/entries-delete.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesDelete(attio, {
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("entriesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteEntryRequest](../../models/operations/delete-entry-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteEntryResponse](../../models/operations/delete-entry-response.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.DeleteEntryAuthError     | 403                             | application/json                |
| errors.DeleteEntryNotFoundError | 404                             | application/json                |
| errors.AttioError               | 4XX, 5XX                        | \*/\*                           |

## updateAppending

Use this endpoint to update list entries by `entry_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAppendingEntry" method="patch" path="/v2/lists/{list}/entries/{entry_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.updateAppending({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    body: {
      data: {
        entryValues: {
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
import { entriesUpdateAppending } from "@interfere/attio/funcs/entries-update-appending.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesUpdateAppending(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    body: {
      data: {
        entryValues: {
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
    console.log("entriesUpdateAppending failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAppendingEntryRequest](../../models/operations/update-appending-entry-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAppendingEntryResponse](../../models/operations/update-appending-entry-response.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.UpdateAppendingEntryInvalidRequestError | 400                                            | application/json                               |
| errors.UpdateAppendingEntryAuthError           | 403                                            | application/json                               |
| errors.UpdateAppendingEntryNotFoundError       | 404                                            | application/json                               |
| errors.AttioError                              | 4XX, 5XX                                       | \*/\*                                          |

## listAttributeValues

Gets all values for a given attribute on a list entry. This endpoint has the ability to return all historic values using the `show_historic` query param. Historic values are sorted from oldest to newest (by `active_from`).

Required scopes: `list_entry:read`, `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listEntryAttributeValues" method="get" path="/v2/lists/{list}/entries/{entry_id}/attributes/{attribute}/values" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.listAttributeValues({
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
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
import { entriesListAttributeValues } from "@interfere/attio/funcs/entries-list-attribute-values.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesListAttributeValues(attio, {
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showHistoric: true,
    limit: 10,
    offset: 5,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("entriesListAttributeValues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListEntryAttributeValuesRequest](../../models/operations/list-entry-attribute-values-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListEntryAttributeValuesResponse](../../models/operations/list-entry-attribute-values-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.ListEntryAttributeValuesNotFoundError | 404                                          | application/json                             |
| errors.AttioError                            | 4XX, 5XX                                     | \*/\*                                        |

## putV2ListsListEntriesEntryIdAttributesAttributeValues

Replaces the entire value history of a single attribute on a list entry, primarily to migrate historic data from an external source. Every value the attribute currently has is destroyed, including values not present in the request, and the supplied values are written with the `active_from` and `active_until` timestamps given.

Values may be supplied in any order and gaps between intervals are allowed. For attributes that accept a single value, at most one value may be active at a time, so intervals may not overlap and at most one may have a `null` `active_until`. At least one value is required.

Webhooks and workflow triggers do not fire for these writes, so migrating history does not replay automations. Search indexes and caches are still updated, and formula attributes that depend on this attribute are still recalculated.

Value history cannot be written for relationship attributes, formula attributes, enriched attributes, or immutable system attributes such as the entry's parent record.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/v2/lists/{list}/entries/{entry_id}/attributes/{attribute}/values" method="put" path="/v2/lists/{list}/entries/{entry_id}/attributes/{attribute}/values" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.putV2ListsListEntriesEntryIdAttributesAttributeValues({
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    body: {
      data: {
        values: [
          {
            value: "Acme (old name)",
            activeFrom: new Date("2020-01-01T00:00:00Z"),
            activeUntil: new Date("2021-06-15T09:30:00Z"),
          },
          {
            value: "Acme Corporation",
            activeFrom: new Date("2021-06-15T09:30:00Z"),
            activeUntil: null,
          },
        ],
        replaceHistory: true,
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
import { entriesPutV2ListsListEntriesEntryIdAttributesAttributeValues } from "@interfere/attio/funcs/entries-put-v2-lists-list-entries-entry-id-attributes-attribute-values.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesPutV2ListsListEntriesEntryIdAttributesAttributeValues(attio, {
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    body: {
      data: {
        values: [
          {
            value: "Acme (old name)",
            activeFrom: new Date("2020-01-01T00:00:00Z"),
            activeUntil: new Date("2021-06-15T09:30:00Z"),
          },
          {
            value: "Acme Corporation",
            activeFrom: new Date("2021-06-15T09:30:00Z"),
            activeUntil: null,
          },
        ],
        replaceHistory: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("entriesPutV2ListsListEntriesEntryIdAttributesAttributeValues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV2ListsListEntriesEntryIdAttributesAttributeValuesRequest](../../models/operations/put-v2-lists-list-entries-entry-id-attributes-attribute-values-request.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV2ListsListEntriesEntryIdAttributesAttributeValuesResponse](../../models/operations/put-v2-lists-list-entries-entry-id-attributes-attribute-values-response.md)\>**

### Errors

| Error Type                                                                                | Status Code                                                                               | Content Type                                                                              |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| errors.PutV2ListsListEntriesEntryIdAttributesAttributeValuesBadRequestInvalidRequestError | 400                                                                                       | application/json                                                                          |
| errors.PutV2ListsListEntriesEntryIdAttributesAttributeValuesAuthError                     | 403                                                                                       | application/json                                                                          |
| errors.PutV2ListsListEntriesEntryIdAttributesAttributeValuesNotFoundInvalidRequestError   | 404                                                                                       | application/json                                                                          |
| errors.AttioError                                                                         | 4XX, 5XX                                                                                  | \*/\*                                                                                     |