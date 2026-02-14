# WorkspaceMembers

## Overview

Workspace members represent a user with access to a workspace. Workspace members are assigned roles that determine what they can do within the workspace.

### Available Operations

* [getV2WorkspaceMembers](#getv2workspacemembers) - List workspace members
* [getV2WorkspaceMembersWorkspaceMemberId](#getv2workspacemembersworkspacememberid) - Get a workspace member

## getV2WorkspaceMembers

Lists all workspace members in the workspace.

Required scopes: `user_management:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/workspace_members" method="get" path="/v2/workspace_members" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.workspaceMembers.getV2WorkspaceMembers();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { workspaceMembersGetV2WorkspaceMembers } from "@interfere/attio/funcs/workspace-members-get-v2-workspace-members.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await workspaceMembersGetV2WorkspaceMembers(attio);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceMembersGetV2WorkspaceMembers failed:", res.error);
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

**Promise\<[operations.GetV2WorkspaceMembersResponse](../../models/operations/get-v2-workspace-members-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## getV2WorkspaceMembersWorkspaceMemberId

Gets a single workspace member by ID.

Required scopes: `user_management:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/workspace_members/{workspace_member_id}" method="get" path="/v2/workspace_members/{workspace_member_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.workspaceMembers.getV2WorkspaceMembersWorkspaceMemberId({
    workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { workspaceMembersGetV2WorkspaceMembersWorkspaceMemberId } from "@interfere/attio/funcs/workspace-members-get-v2-workspace-members-workspace-member-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await workspaceMembersGetV2WorkspaceMembersWorkspaceMemberId(attio, {
    workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspaceMembersGetV2WorkspaceMembersWorkspaceMemberId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2WorkspaceMembersWorkspaceMemberIdRequest](../../models/operations/get-v2-workspace-members-workspace-member-id-request.md)                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2WorkspaceMembersWorkspaceMemberIdResponse](../../models/operations/get-v2-workspace-members-workspace-member-id-response.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.GetV2WorkspaceMembersWorkspaceMemberIdNotFoundError | 404                                                        | application/json                                           |
| errors.AttioError                                          | 4XX, 5XX                                                   | \*/\*                                                      |