# PostV2TasksAssignee

## Example Usage

```typescript
import { PostV2TasksAssignee } from "@interfere/attio/models/operations";

let value: PostV2TasksAssignee = {
  workspaceMemberEmailAddress: "alice@attio.com",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `workspaceMemberEmailAddress`                                                   | *string*                                                                        | :heavy_check_mark:                                                              | Workspace member actors can be referenced by email address as well as actor ID. | alice@attio.com                                                                 |