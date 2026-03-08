# FileT

## Example Usage

```typescript
import { FileT } from "@interfere/attio/models";

let value: FileT = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    fileId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  },
  objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  objectSlug: "people",
  recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  storageProvider: "attio",
  createdByActor: {
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    type: "workspace-member",
  },
  createdAt: "2023-01-01T15:00:00.000000000Z",
  fileType: "file",
  name: "document.pdf",
  contentType: "application/pdf",
  contentSize: 1024,
  parentFolderId: "122035d3-7b3c-45c1-8f61-c7fa3eb44205",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | [models.FileId](../models/file-id.md)                                        | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `objectId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | The ID of the object the record belongs to.                                  | 97052eb9-e65e-443f-a297-f2d9a4a7f795                                         |
| `objectSlug`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | The slug of the object the record belongs to.                                | people                                                                       |
| `recordId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | The ID of the record the file is linked to.                                  | bf071e1f-6035-429d-b874-d83ea64ea13b                                         |
| `storageProvider`                                                            | [models.FileStorageProvider](../models/file-storage-provider.md)             | :heavy_check_mark:                                                           | The storage provider for this file entry.                                    | attio                                                                        |
| `createdByActor`                                                             | [models.FileCreatedByActor](../models/file-created-by-actor.md)              | :heavy_check_mark:                                                           | The actor that created this file entry.                                      | {<br/>"type": "workspace-member",<br/>"id": "50cf242c-7fa3-4cad-87d0-75b1af71c57b"<br/>} |
| `createdAt`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Timestamp representing when the file entry was created.                      | 2023-01-01T15:00:00.000000000Z                                               |
| `fileType`                                                                   | [models.FileTypeEnum](../models/file-type-enum.md)                           | :heavy_check_mark:                                                           | The type of file entry.                                                      |                                                                              |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name of the file.                                                        | document.pdf                                                                 |
| `contentType`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | The content type of the file.                                                | application/pdf                                                              |
| `contentSize`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | The size of the file in bytes.                                               | 1024                                                                         |
| `parentFolderId`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | The ID of the parent folder, or null if this is a top-level file.            |                                                                              |