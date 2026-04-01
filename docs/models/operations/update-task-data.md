# UpdateTaskData

## Example Usage

```typescript
import { UpdateTaskData } from "@interfere/attio/models/operations";

let value: UpdateTaskData = {
  deadlineAt: "2023-01-01T15:00:00.000000000Z",
  isCompleted: false,
  linkedRecords: [
    {
      targetObject: "people",
      slugOrIdOfMatchingAttribute: [
        {
          originalPhoneNumber: "07234172834",
          countryCode: "GB",
        },
      ],
    },
  ],
  assignees: [
    {
      workspaceMemberEmailAddress: "alice@attio.com",
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `deadlineAt`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The deadline of the task, in ISO 8601 format.                                                                      | 2023-01-01T15:00:00.000000000Z                                                                                     |
| `isCompleted`                                                                                                      | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Whether the task has been completed.                                                                               | false                                                                                                              |
| `linkedRecords`                                                                                                    | *operations.UpdateTaskLinkedRecordUnion*[]                                                                         | :heavy_minus_sign:                                                                                                 | Records linked to the task. Creating record links within task content text is not possible via the API at present. |                                                                                                                    |
| `assignees`                                                                                                        | *operations.UpdateTaskAssigneeUnion*[]                                                                             | :heavy_minus_sign:                                                                                                 | Workspace members assigned to this task.                                                                           |                                                                                                                    |