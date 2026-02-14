# PutV2ObjectsObjectRecordsRequest

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsRequest } from "@interfere/attio/models/operations";

let value: PutV2ObjectsObjectRecordsRequest = {
  object: "people",
  matchingAttribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      | people                                                                                                                   |
| `matchingAttribute`                                                                                                      | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      | 41252299-f8c7-4b5e-99c9-4ff8321d2f96                                                                                     |
| `body`                                                                                                                   | [operations.PutV2ObjectsObjectRecordsRequestBody](../../models/operations/put-v2-objects-object-records-request-body.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |