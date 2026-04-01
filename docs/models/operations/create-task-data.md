# CreateTaskData

## Example Usage

```typescript
import { CreateTaskData } from "@interfere/attio/models/operations";

let value: CreateTaskData = {
  content: "Follow up on current software solutions",
  format: "plaintext",
  deadlineAt: "2023-01-01T15:00:00.000000000Z",
  isCompleted: false,
  linkedRecords: [],
  assignees: [
    {
      referencedActorType: "workspace-member",
      referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The text content of the task, in the format specified by the `format` property. A max length of 2000 characters is enforced. | Follow up on current software solutions                                                                                      |
| `format`                                                                                                                     | [operations.CreateTaskFormat](../../models/operations/create-task-format.md)                                                 | :heavy_check_mark:                                                                                                           | The format of the task content to be created. Rich text formatting, links and @references are not supported.                 |                                                                                                                              |
| `deadlineAt`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The deadline of the task, in ISO 8601 format.                                                                                | 2023-01-01T15:00:00.000000000Z                                                                                               |
| `isCompleted`                                                                                                                | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | Whether the task has been completed.                                                                                         | false                                                                                                                        |
| `linkedRecords`                                                                                                              | *operations.CreateTaskLinkedRecordUnion*[]                                                                                   | :heavy_check_mark:                                                                                                           | Records linked to the task. Creating record links within task content text is not possible via the API at present.           |                                                                                                                              |
| `assignees`                                                                                                                  | *operations.CreateTaskAssigneeUnion*[]                                                                                       | :heavy_check_mark:                                                                                                           | Workspace members assigned to this task.                                                                                     |                                                                                                                              |