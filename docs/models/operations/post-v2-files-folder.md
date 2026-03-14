# PostV2FilesFolder

## Example Usage

```typescript
import { PostV2FilesFolder } from "@interfere/attio/models/operations";

let value: PostV2FilesFolder = {
  object: "people",
  recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  fileType: "folder",
  name: "Documents",
  parentFolderId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `object`                                                      | *string*                                                      | :heavy_check_mark:                                            | The object slug or ID.                                        | people                                                        |
| `recordId`                                                    | *string*                                                      | :heavy_check_mark:                                            | The ID of the record to create the file entry on.             | bf071e1f-6035-429d-b874-d83ea64ea13b                          |
| `fileType`                                                    | *"folder"*                                                    | :heavy_check_mark:                                            | Creates a native Attio folder entry.                          |                                                               |
| `name`                                                        | *string*                                                      | :heavy_check_mark:                                            | The folder name.                                              | Documents                                                     |
| `parentFolderId`                                              | *string*                                                      | :heavy_minus_sign:                                            | Optional parent folder ID. Omit to create a top-level folder. | a1b2c3d4-e5f6-7890-abcd-ef1234567890                          |