# ListFilesResponse

Success

## Example Usage

```typescript
import { ListFilesResponse } from "@interfere/attio/models/operations";

let value: ListFilesResponse = {
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
        type: "workspace-member",
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      },
      createdAt: "2023-01-01T15:00:00.000000000Z",
      fileType: "connected-file",
      externalProviderFileId: "01ISGXZ5BRAMVD7SEPXNCYS4XGKT3YTOKQ",
      microsoftDriveId:
        "b!-RIj2DuyvEyV1T4NlOaMHk8XkS_I8MdFlUCq1BlcjgmhRfAj3-Z8RY2VpuvV_tpd",
    },
  ],
  pagination: {
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | *operations.ListFilesData*[]                                                       | :heavy_check_mark:                                                                 | N/A                                                                                |
| `pagination`                                                                       | [operations.ListFilesPagination](../../models/operations/list-files-pagination.md) | :heavy_check_mark:                                                                 | N/A                                                                                |