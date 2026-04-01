# AssertEntryRequestBody

## Example Usage

```typescript
import { AssertEntryRequestBody } from "@interfere/attio/models/operations";

let value: AssertEntryRequestBody = {
  data: {
    parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    parentObject: "people",
    entryValues: {
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

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [operations.AssertEntryDataRequest](../../models/operations/assert-entry-data-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |