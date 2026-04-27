# UpdateTaskRequestBody

## Example Usage

```typescript
import { UpdateTaskRequestBody } from "@interfere/attio/models/operations";

let value: UpdateTaskRequestBody = {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.UpdateTaskData](../../models/operations/update-task-data.md) | :heavy_check_mark:                                                       | N/A                                                                      |