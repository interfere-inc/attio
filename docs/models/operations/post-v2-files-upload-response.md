# PostV2FilesUploadResponse

Created

## Example Usage

```typescript
import { PostV2FilesUploadResponse } from "@interfere/attio/models/operations";

let value: PostV2FilesUploadResponse = {
  data: {
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
    parentFolderId: "2e0d7ff7-8eed-4cff-91bf-fd5b60d65df9",
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `data`                                 | [models.FileT](../../models/file-t.md) | :heavy_check_mark:                     | N/A                                    |