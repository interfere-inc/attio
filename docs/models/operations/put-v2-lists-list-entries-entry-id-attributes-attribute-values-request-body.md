# PutV2ListsListEntriesEntryIdAttributesAttributeValuesRequestBody

## Example Usage

```typescript
import { PutV2ListsListEntriesEntryIdAttributesAttributeValuesRequestBody } from "@interfere/attio/models/operations";

let value: PutV2ListsListEntriesEntryIdAttributesAttributeValuesRequestBody = {
  data: {
    values: [
      {
        value: "Acme (old name)",
        activeFrom: new Date("2020-01-01T00:00:00Z"),
        activeUntil: new Date("2021-06-15T09:30:00Z"),
      },
      {
        value: "Acme Corporation",
        activeFrom: new Date("2021-06-15T09:30:00Z"),
        activeUntil: null,
      },
    ],
    replaceHistory: true,
  },
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                | [operations.PutV2ListsListEntriesEntryIdAttributesAttributeValuesDataRequest](../../models/operations/put-v2-lists-list-entries-entry-id-attributes-attribute-values-data-request.md) | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |