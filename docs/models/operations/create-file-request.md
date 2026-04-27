# CreateFileRequest


## Supported Types

### `operations.CreateFileFolder`

```typescript
const value: operations.CreateFileFolder = {
  name: "Documents",
  object: "people",
  recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  fileType: "folder",
  parentFolderId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
};
```

### `operations.ConnectedFolder`

```typescript
const value: operations.ConnectedFolder = {
  object: "people",
  recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  storageProvider: "google-drive",
  externalProviderFileId: "01ISGXZ5BRAMVD7SEPXNCYS4XGKT3YTOKQ",
  microsoftDriveId:
    "b!-RIj2DuyvEyV1T4NlOaMHk8XkS_I8MdFlUCq1BlcjgmhRfAj3-Z8RY2VpuvV_tpd",
  fileType: "connected-folder",
};
```

### `operations.ConnectedFile`

```typescript
const value: operations.ConnectedFile = {
  object: "people",
  recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  storageProvider: "google-drive",
  externalProviderFileId: "01ISGXZ5BRAMVD7SEPXNCYS4XGKT3YTOKQ",
  microsoftDriveId:
    "b!-RIj2DuyvEyV1T4NlOaMHk8XkS_I8MdFlUCq1BlcjgmhRfAj3-Z8RY2VpuvV_tpd",
  fileType: "connected-file",
};
```

