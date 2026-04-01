# UpdateListWorkspaceMemberAccess

## Example Usage

```typescript
import { UpdateListWorkspaceMemberAccess } from "@interfere/attio/models/operations";

let value: UpdateListWorkspaceMemberAccess = {
  workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  level: "read-and-write",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `workspaceMemberId`                                                        | *string*                                                                   | :heavy_check_mark:                                                         | A UUID to identify the workspace member to grant access to.                | 50cf242c-7fa3-4cad-87d0-75b1af71c57b                                       |
| `level`                                                                    | [operations.UpdateListLevel](../../models/operations/update-list-level.md) | :heavy_check_mark:                                                         | The level of access to the list.                                           | read-and-write                                                             |