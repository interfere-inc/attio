# ListFilesRequest

## Example Usage

```typescript
import { ListFilesRequest } from "@interfere/attio/models/operations";

let value: ListFilesRequest = {
  object: "<value>",
  recordId: "9911baed-38e4-45fa-bcd5-db5f17473657",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `recordId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `storageProvider`                                                                             | [operations.ListFilesStorageProvider](../../models/operations/list-files-storage-provider.md) | :heavy_minus_sign:                                                                            | Filter results by storage provider.                                                           |                                                                                               |
| `parentFolderId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 50                                                                                            |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |