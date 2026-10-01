# PutV2ListsListEntriesEntryIdAttributesAttributeValuesResponse

Success

## Example Usage

```typescript
import { PutV2ListsListEntriesEntryIdAttributesAttributeValuesResponse } from "@interfere/attio/models/operations";

let value: PutV2ListsListEntriesEntryIdAttributesAttributeValuesResponse = {
  data: [
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        type: "workspace-member",
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      },
      attributeType: "timestamp",
      value: new Date("2023-01-01T15:00:00.000000000Z"),
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | *operations.PutV2ListsListEntriesEntryIdAttributesAttributeValuesDataUnion*[] | :heavy_check_mark:                                                            | N/A                                                                           |