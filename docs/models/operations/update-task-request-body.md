# UpdateTaskRequestBody

## Example Usage

```typescript
import { UpdateTaskRequestBody } from "@interfere/attio/models/operations";

let value: UpdateTaskRequestBody = {
  data: {
    deadlineAt: "2023-01-01T15:00:00.000000000Z",
    isCompleted: false,
    linkedRecords: [
      {
        targetObject: "people",
        targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      },
    ],
    assignees: [
      {
        workspaceMemberEmailAddress: "alice@attio.com",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.UpdateTaskData](../../models/operations/update-task-data.md) | :heavy_check_mark:                                                       | N/A                                                                      |