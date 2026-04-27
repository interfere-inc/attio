# UpdateTaskRequest

## Example Usage

```typescript
import { UpdateTaskRequest } from "@interfere/attio/models/operations";

let value: UpdateTaskRequest = {
  taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
  body: {
    data: {
      deadlineAt: "2023-01-01T15:00:00.000000000Z",
      isCompleted: false,
      linkedRecords: [
        "person@company.com",
        "fundstack.com",
      ],
      assignees: [
        {
          referencedActorType: "workspace-member",
          referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `taskId`                                                                                | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | 649e34f4-c39a-4f4d-99ef-48a36bef8f04                                                    |
| `body`                                                                                  | [operations.UpdateTaskRequestBody](../../models/operations/update-task-request-body.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |