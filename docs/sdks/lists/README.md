# Lists

## Overview

Lists are used to model a particular process. A list contains many records of a single object type, where each record is represented by an entry. Entries contain their own data from attributes defined on the list and also data from their parent record. See our [objects and lists guide](/docs/objects-and-lists) for more information.

### Available Operations

* [list](#list) - List all lists
* [create](#create) - Create a list
* [get](#get) - Get a list
* [update](#update) - Update a list

## list

List all lists that your access token has access to. lists are returned in the order that they are sorted in the sidebar.

Required scopes: `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/lists" method="get" path="/v2/lists" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.lists.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { listsList } from "@interfere/attio/funcs/lists-list.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await listsList(attio);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("listsList failed:", res.error);
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

**Promise\<[operations.GetV2ListsResponse](../../models/operations/get-v2-lists-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## create

Creates a new list.

Once you have your list, add attributes to it using the [Create attribute](/rest-api/endpoint-reference/attributes/create-an-attribute) API, and add records to it using the [Add records to list](/rest-api/endpoint-reference/entries/create-an-entry-add-record-to-list) API. 

New lists must specify which records can be added with the `parent_object` parameter which accepts either an object slug or an object ID. Permissions for the list are controlled with the `workspace_access` and `workspace_member_access` parameters.

Please note that new lists must have either `workspace_access` set to `"full-access"` or one or more element of `workspace_member_access` with a `"full-access"` level. It is also possible to receive a `403` billing error if your workspace is not on a plan that supports either advanced workspace or workspace member-level access for lists.

Required scopes: `list_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/lists" method="post" path="/v2/lists" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.lists.create({
    data: {
      name: "Enterprise Sales",
      apiSlug: "enterprise_sales",
      parentObject: "people",
      workspaceAccess: "read-and-write",
      workspaceMemberAccess: [
        {
          workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          level: "read-and-write",
        },
      ],
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
import { listsCreate } from "@interfere/attio/funcs/lists-create.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await listsCreate(attio, {
    data: {
      name: "Enterprise Sales",
      apiSlug: "enterprise_sales",
      parentObject: "people",
      workspaceAccess: "read-and-write",
      workspaceMemberAccess: [
        {
          workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          level: "read-and-write",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("listsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2ListsRequest](../../models/operations/post-v2-lists-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2ListsResponse](../../models/operations/post-v2-lists-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.PostV2ListsValueNotFoundError | 400                                  | application/json                     |
| errors.BillingError                  | 403                                  | application/json                     |
| errors.PostV2ListsNotFoundError      | 404                                  | application/json                     |
| errors.PostV2ListsSlugConflictError  | 409                                  | application/json                     |
| errors.AttioError                    | 4XX, 5XX                             | \*/\*                                |

## get

Gets a single list in your workspace that your access token has access to.

Required scopes: `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/lists/{list}" method="get" path="/v2/lists/{list}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.lists.get({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { listsGet } from "@interfere/attio/funcs/lists-get.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await listsGet(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("listsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2ListsListRequest](../../models/operations/get-v2-lists-list-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ListsListResponse](../../models/operations/get-v2-lists-list-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.GetV2ListsListNotFoundError | 404                                | application/json                   |
| errors.AttioError                  | 4XX, 5XX                           | \*/\*                              |

## update

Updates an existing list. Permissions for the list are controlled with the `workspace_access` and `workspace_member_access` parameters. Please note that lists must have either `workspace_access` set to `"full-access"` or one or more element of `workspace_member_access` with a `"full-access"` level. It is also possible to receive a `403` billing error if your workspace is not on a plan that supports either advanced workspace or workspace member level access for lists. Changing the parent object of a list is not possible through the API as it can have unintended side-effects that should be considered carefully. If you wish to carry out a parent object change you should do so through the UI.

Required scopes: `list_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/lists/{list}" method="patch" path="/v2/lists/{list}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.lists.update({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    body: {
      data: {
        name: "Enterprise Sales",
        apiSlug: "enterprise_sales",
        workspaceAccess: "read-and-write",
        workspaceMemberAccess: [
          {
            workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
            level: "read-and-write",
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
import { listsUpdate } from "@interfere/attio/funcs/lists-update.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await listsUpdate(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    body: {
      data: {
        name: "Enterprise Sales",
        apiSlug: "enterprise_sales",
        workspaceAccess: "read-and-write",
        workspaceMemberAccess: [
          {
            workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
            level: "read-and-write",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("listsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2ListsListRequest](../../models/operations/patch-v2-lists-list-request.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2ListsListResponse](../../models/operations/patch-v2-lists-list-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.PostV2ListsValueNotFoundError | 400                                  | application/json                     |
| errors.GetV2ListsListNotFoundError   | 404                                  | application/json                     |
| errors.AttioError                    | 4XX, 5XX                             | \*/\*                                |