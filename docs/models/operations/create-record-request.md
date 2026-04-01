# CreateRecordRequest

## Example Usage

```typescript
import { CreateRecordRequest } from "@interfere/attio/models/operations";

let value: CreateRecordRequest = {
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

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `object`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | people                                                                                      |
| `body`                                                                                      | [operations.CreateRecordRequestBody](../../models/operations/create-record-request-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |