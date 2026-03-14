# ConnectedFolder

## Example Usage

```typescript
import { ConnectedFolder } from "@interfere/attio/models/operations";

let value: ConnectedFolder = {
  object: "people",
  recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  storageProvider: "google-drive",
  externalProviderFileId: "01ISGXZ5BRAMVD7SEPXNCYS4XGKT3YTOKQ",
  microsoftDriveId:
    "b!-RIj2DuyvEyV1T4NlOaMHk8XkS_I8MdFlUCq1BlcjgmhRfAj3-Z8RY2VpuvV_tpd",
  fileType: "connected-folder",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `object`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | The object slug or ID.                                                                               | people                                                                                               |
| `recordId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the record to create the file entry on.                                                    | bf071e1f-6035-429d-b874-d83ea64ea13b                                                                 |
| `storageProvider`                                                                                    | [operations.PostV2FilesStorageProvider1](../../models/operations/post-v2-files-storage-provider1.md) | :heavy_check_mark:                                                                                   | The external storage provider.                                                                       | google-drive                                                                                         |
| `externalProviderFileId`                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the file or folder in the external storage provider.                                       | 01ISGXZ5BRAMVD7SEPXNCYS4XGKT3YTOKQ                                                                   |
| `microsoftDriveId`                                                                                   | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Microsoft drive ID. Only used when `storage_provider` is `microsoft-onedrive`.                       | b!-RIj2DuyvEyV1T4NlOaMHk8XkS_I8MdFlUCq1BlcjgmhRfAj3-Z8RY2VpuvV_tpd                                   |
| `fileType`                                                                                           | *"connected-folder"*                                                                                 | :heavy_check_mark:                                                                                   | Creates a connected folder entry.                                                                    |                                                                                                      |