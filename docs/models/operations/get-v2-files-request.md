# GetV2FilesRequest

## Example Usage

```typescript
import { GetV2FilesRequest } from "@interfere/attio/models/operations";

let value: GetV2FilesRequest = {
  object: "<value>",
  recordId: "1576f66d-6116-4356-93d9-bbb558c26bfb",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `object`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `recordId`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `storageProvider`                                                                                | [operations.GetV2FilesStorageProvider](../../models/operations/get-v2-files-storage-provider.md) | :heavy_minus_sign:                                                                               | Filter results by storage provider.                                                              |                                                                                                  |
| `parentFolderId`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
| `limit`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 50                                                                                               |
| `cursor`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |