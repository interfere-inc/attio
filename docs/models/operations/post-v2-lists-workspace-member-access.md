# PostV2ListsWorkspaceMemberAccess

## Example Usage

```typescript
import { PostV2ListsWorkspaceMemberAccess } from "@interfere/attio/models/operations";

let value: PostV2ListsWorkspaceMemberAccess = {
  workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  level: "read-and-write",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `workspaceMemberId`                                                           | *string*                                                                      | :heavy_check_mark:                                                            | A UUID to identify the workspace member to grant access to.                   | 50cf242c-7fa3-4cad-87d0-75b1af71c57b                                          |
| `level`                                                                       | [operations.PostV2ListsLevel](../../models/operations/post-v2-lists-level.md) | :heavy_check_mark:                                                            | The level of access to the list.                                              | read-and-write                                                                |