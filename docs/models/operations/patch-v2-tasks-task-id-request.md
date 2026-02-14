# PatchV2TasksTaskIdRequest

## Example Usage

```typescript
import { PatchV2TasksTaskIdRequest } from "@interfere/attio/models/operations";

let value: PatchV2TasksTaskIdRequest = {
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
          referencedActorType: "workspace-member",
          referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `taskId`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | 649e34f4-c39a-4f4d-99ef-48a36bef8f04                                                                       |
| `body`                                                                                                     | [operations.PatchV2TasksTaskIdRequestBody](../../models/operations/patch-v2-tasks-task-id-request-body.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |