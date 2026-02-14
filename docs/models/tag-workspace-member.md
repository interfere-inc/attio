# TagWorkspaceMember

## Example Usage

```typescript
import { TagWorkspaceMember } from "@interfere/attio/models";

let value: TagWorkspaceMember = {
  type: "workspace-member",
  workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `type`                                                                              | *"workspace-member"*                                                                | :heavy_check_mark:                                                                  | The type of entity tagged in the note. Can be either 'workspace-member' or 'record' |                                                                                     |
| `workspaceMemberId`                                                                 | *string*                                                                            | :heavy_check_mark:                                                                  | The ID of the workspace member that is tagged in the note.                          | 50cf242c-7fa3-4cad-87d0-75b1af71c57b                                                |