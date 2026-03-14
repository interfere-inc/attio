# GetV2FilesFileIdData


## Supported Types

### `models.FileT`

```typescript
const value: models.FileT = {
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

### `operations.GetV2FilesFileIdFolder`

```typescript
const value: operations.GetV2FilesFileIdFolder = {
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
  parentFolderId: "e7134ff4-2a76-4dda-8d09-041ab1ce603e",
  hasChildren: true,
};
```

### `models.ConnectedFile`

```typescript
const value: models.ConnectedFile = {
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
  fileType: "connected-file",
  externalProviderFileId: "01ISGXZ5BRAMVD7SEPXNCYS4XGKT3YTOKQ",
  microsoftDriveId:
    "b!-RIj2DuyvEyV1T4NlOaMHk8XkS_I8MdFlUCq1BlcjgmhRfAj3-Z8RY2VpuvV_tpd",
};
```

### `models.ConnectedFolder`

```typescript
const value: models.ConnectedFolder = {
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
  fileType: "connected-folder",
  externalProviderFileId: "01ISGXZ5BRAMVD7SEPXNCYS4XGKT3YTOKQ",
  microsoftDriveId:
    "b!-RIj2DuyvEyV1T4NlOaMHk8XkS_I8MdFlUCq1BlcjgmhRfAj3-Z8RY2VpuvV_tpd",
};
```

