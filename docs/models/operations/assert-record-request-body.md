# AssertRecordRequestBody

## Example Usage

```typescript
import { AssertRecordRequestBody } from "@interfere/attio/models/operations";

let value: AssertRecordRequestBody = {
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
| `data`                                                                                      | [operations.AssertRecordDataRequest](../../models/operations/assert-record-data-request.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |