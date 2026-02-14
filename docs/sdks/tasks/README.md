# Tasks

## Overview

A task is a defined, actionable item with references to linked records and assigned workspace members.

### Available Operations

* [getV2Tasks](#getv2tasks) - List tasks
* [postV2Tasks](#postv2tasks) - Create a task
* [getV2TasksTaskId](#getv2taskstaskid) - Get a task
* [deleteV2TasksTaskId](#deletev2taskstaskid) - Delete a task
* [patchV2TasksTaskId](#patchv2taskstaskid) - Update a task

## getV2Tasks

List all tasks. Results are sorted by creation date, from oldest to newest.

Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/tasks" method="get" path="/v2/tasks" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.tasks.getV2Tasks({
    limit: 10,
    offset: 5,
    sort: "created_at:desc",
    linkedObject: "people",
    linkedRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    assignee: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    isCompleted: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { tasksGetV2Tasks } from "@interfere/attio/funcs/tasks-get-v2-tasks.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await tasksGetV2Tasks(attio, {
    limit: 10,
    offset: 5,
    sort: "created_at:desc",
    linkedObject: "people",
    linkedRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    assignee: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    isCompleted: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksGetV2Tasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TasksRequest](../../models/operations/get-v2-tasks-request.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TasksResponse](../../models/operations/get-v2-tasks-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.AttioDefaultError | 4XX, 5XX                 | \*/\*                    |

## postV2Tasks

Creates a new task.

At present, tasks can only be created from plaintext without record reference formatting.

Required scopes: `task:read-write`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/tasks" method="post" path="/v2/tasks" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.tasks.postV2Tasks({
    data: {
      content: "Follow up on current software solutions",
      format: "plaintext",
      deadlineAt: "2023-01-01T15:00:00.000000000Z",
      isCompleted: false,
      linkedRecords: [],
      assignees: [],
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
import { tasksPostV2Tasks } from "@interfere/attio/funcs/tasks-post-v2-tasks.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await tasksPostV2Tasks(attio, {
    data: {
      content: "Follow up on current software solutions",
      format: "plaintext",
      deadlineAt: "2023-01-01T15:00:00.000000000Z",
      isCompleted: false,
      linkedRecords: [],
      assignees: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksPostV2Tasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2TasksRequest](../../models/operations/post-v2-tasks-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2TasksResponse](../../models/operations/post-v2-tasks-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.PostV2TasksValidationTypeError | 400                                   | application/json                      |
| errors.PostV2TasksNotFoundError       | 404                                   | application/json                      |
| errors.AttioDefaultError              | 4XX, 5XX                              | \*/\*                                 |

## getV2TasksTaskId

Get a single task by ID.

Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/tasks/{task_id}" method="get" path="/v2/tasks/{task_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.tasks.getV2TasksTaskId({
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { tasksGetV2TasksTaskId } from "@interfere/attio/funcs/tasks-get-v2-tasks-task-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await tasksGetV2TasksTaskId(attio, {
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksGetV2TasksTaskId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TasksTaskIdRequest](../../models/operations/get-v2-tasks-task-id-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TasksTaskIdResponse](../../models/operations/get-v2-tasks-task-id-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetV2TasksTaskIdNotFoundError | 404                                  | application/json                     |
| errors.AttioDefaultError             | 4XX, 5XX                             | \*/\*                                |

## deleteV2TasksTaskId

Delete a task by ID.

Required scopes: `task:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/tasks/{task_id}" method="delete" path="/v2/tasks/{task_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.tasks.deleteV2TasksTaskId({
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { tasksDeleteV2TasksTaskId } from "@interfere/attio/funcs/tasks-delete-v2-tasks-task-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await tasksDeleteV2TasksTaskId(attio, {
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksDeleteV2TasksTaskId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV2TasksTaskIdRequest](../../models/operations/delete-v2-tasks-task-id-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2TasksTaskIdResponse](../../models/operations/delete-v2-tasks-task-id-response.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.DeleteV2TasksTaskIdNotFoundError | 404                                     | application/json                        |
| errors.AttioDefaultError                | 4XX, 5XX                                | \*/\*                                   |

## patchV2TasksTaskId

Updates an existing task by `task_id`. At present, only the `deadline_at`, `is_completed`, `linked_records`, and `assignees` fields can be updated.

Required scopes: `task:read-write`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/tasks/{task_id}" method="patch" path="/v2/tasks/{task_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.tasks.patchV2TasksTaskId({
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
    body: {
      data: {
        deadlineAt: "2023-01-01T15:00:00.000000000Z",
        isCompleted: false,
        linkedRecords: [
          {
            targetObject: "people",
            slugOrIdOfMatchingAttribute: [],
          },
        ],
        assignees: [
          {
            workspaceMemberEmailAddress: "alice@attio.com",
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
import { tasksPatchV2TasksTaskId } from "@interfere/attio/funcs/tasks-patch-v2-tasks-task-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await tasksPatchV2TasksTaskId(attio, {
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
    body: {
      data: {
        deadlineAt: "2023-01-01T15:00:00.000000000Z",
        isCompleted: false,
        linkedRecords: [
          {
            targetObject: "people",
            slugOrIdOfMatchingAttribute: [],
          },
        ],
        assignees: [
          {
            workspaceMemberEmailAddress: "alice@attio.com",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksPatchV2TasksTaskId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2TasksTaskIdRequest](../../models/operations/patch-v2-tasks-task-id-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2TasksTaskIdResponse](../../models/operations/patch-v2-tasks-task-id-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.PatchV2TasksTaskIdValidationTypeError | 400                                          | application/json                             |
| errors.PatchV2TasksTaskIdNotFoundError       | 404                                          | application/json                             |
| errors.AttioDefaultError                     | 4XX, 5XX                                     | \*/\*                                        |