# PutV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesRequestBody

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesRequestBody } from "@interfere/attio/models/operations";

let value:
  PutV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesRequestBody = {
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

| Field                                                                                                                                                                                           | Type                                                                                                                                                                                            | Required                                                                                                                                                                                        | Description                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                          | [operations.PutV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataRequest](../../models/operations/put-v2-objects-object-records-record-id-attributes-attribute-values-data-request.md) | :heavy_check_mark:                                                                                                                                                                              | N/A                                                                                                                                                                                             |