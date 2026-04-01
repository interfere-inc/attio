# UpdateEntryRequestBody

## Example Usage

```typescript
import { UpdateEntryRequestBody } from "@interfere/attio/models/operations";

let value: UpdateEntryRequestBody = {
  data: {
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
| `data`                                                                                    | [operations.UpdateEntryDataRequest](../../models/operations/update-entry-data-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |