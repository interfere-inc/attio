# PutV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataRequest

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataRequest } from "@interfere/attio/models/operations";

let value:
  PutV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataRequest = {
    values: [
      {
        value: {},
        activeFrom: new Date("2024-01-12T18:24:23.287Z"),
        activeUntil: new Date("2025-01-01T09:16:30.872Z"),
      },
    ],
    replaceHistory: true,
  };
```

## Fields

| Field                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`                                                                                                                                                                                                                                | [operations.PutV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesValue](../../models/operations/put-v2-objects-object-records-record-id-attributes-attribute-values-value.md)[]                                                    | :heavy_check_mark:                                                                                                                                                                                                                      | The complete value history to write, replacing any existing values. Values may be supplied in any order. Gaps between intervals are allowed. At least one value is required, and a maximum of 400 values may be written in one request. |
| `replaceHistory`                                                                                                                                                                                                                        | *boolean*                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                      | Must be `true`. Acknowledges that this request replaces the attribute's entire value history, destroying every value it currently has, including values not present in this request.                                                    |