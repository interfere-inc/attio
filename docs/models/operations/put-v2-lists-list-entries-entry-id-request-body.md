# PutV2ListsListEntriesEntryIdRequestBody

## Example Usage

```typescript
import { PutV2ListsListEntriesEntryIdRequestBody } from "@interfere/attio/models/operations";

let value: PutV2ListsListEntriesEntryIdRequestBody = {
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

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                           | [operations.PutV2ListsListEntriesEntryIdDataRequest](../../models/operations/put-v2-lists-list-entries-entry-id-data-request.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |