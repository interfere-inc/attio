# GetV2FilesResponse

Success

## Example Usage

```typescript
import { GetV2FilesResponse } from "@interfere/attio/models/operations";

let value: GetV2FilesResponse = {
  data: [
    {
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
      fileType: "folder",
      name: "Documents",
      parentFolderId: null,
    },
  ],
  pagination: {
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | *operations.GetV2FilesData*[]                                                         | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `pagination`                                                                          | [operations.GetV2FilesPagination](../../models/operations/get-v2-files-pagination.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |