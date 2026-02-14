# PatchV2TargetIdentifierAttributesAttributeConfig

Additional, type-dependent configuration for the attribute.

## Example Usage

```typescript
import { PatchV2TargetIdentifierAttributesAttributeConfig } from "@interfere/attio/models/operations";

let value: PatchV2TargetIdentifierAttributesAttributeConfig = {
  currency: {
    defaultCurrencyCode: "USD",
    displayType: "symbol",
  },
  recordReference: {
    allowedObjects: [
      "people",
    ],
  },
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                                                          | [operations.PatchV2TargetIdentifierAttributesAttributeCurrency](../../models/operations/patch-v2-target-identifier-attributes-attribute-currency.md)                | :heavy_minus_sign:                                                                                                                                                  | Configuration available for attributes of type "currency".                                                                                                          |
| `recordReference`                                                                                                                                                   | [operations.PatchV2TargetIdentifierAttributesAttributeRecordReference](../../models/operations/patch-v2-target-identifier-attributes-attribute-record-reference.md) | :heavy_minus_sign:                                                                                                                                                  | Configuration available for attributes of type "record-reference".                                                                                                  |