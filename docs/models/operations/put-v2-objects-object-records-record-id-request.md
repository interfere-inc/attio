# PutV2ObjectsObjectRecordsRecordIdRequest

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsRecordIdRequest } from "@interfere/attio/models/operations";

let value: PutV2ObjectsObjectRecordsRecordIdRequest = {
  object: "people",
  recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  body: {
    data: {
      values: {
        "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
          "Text value",
        ],
        "multiselect_attribute": [
          "Select option 1",
          "Select option 2",
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                                                   | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        | people                                                                                                                                     |
| `recordId`                                                                                                                                 | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        | 891dcbfc-9141-415d-9b2a-2238a6cc012d                                                                                                       |
| `body`                                                                                                                                     | [operations.PutV2ObjectsObjectRecordsRecordIdRequestBody](../../models/operations/put-v2-objects-object-records-record-id-request-body.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |