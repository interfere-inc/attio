# PostV2ObjectsObjectRecordsRequest

## Example Usage

```typescript
import { PostV2ObjectsObjectRecordsRequest } from "@interfere/attio/models/operations";

let value: PostV2ObjectsObjectRecordsRequest = {
  object: "people",
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        | people                                                                                                                     |
| `body`                                                                                                                     | [operations.PostV2ObjectsObjectRecordsRequestBody](../../models/operations/post-v2-objects-object-records-request-body.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |