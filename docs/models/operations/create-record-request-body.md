# CreateRecordRequestBody

## Example Usage

```typescript
import { CreateRecordRequestBody } from "@interfere/attio/models/operations";

let value: CreateRecordRequestBody = {
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
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.CreateRecordDataRequest](../../models/operations/create-record-data-request.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |