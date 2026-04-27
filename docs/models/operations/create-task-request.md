# CreateTaskRequest

## Example Usage

```typescript
import { CreateTaskRequest } from "@interfere/attio/models/operations";

let value: CreateTaskRequest = {
  data: {
    content: "Follow up on current software solutions",
    format: "plaintext",
    deadlineAt: "2023-01-01T15:00:00.000000000Z",
    isCompleted: false,
    linkedRecords: [
      "person@company.com",
      "fundstack.com",
    ],
    assignees: [],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.CreateTaskData](../../models/operations/create-task-data.md) | :heavy_check_mark:                                                       | N/A                                                                      |