# UpdateAttributeConfig

Additional, type-dependent configuration for the attribute.

## Example Usage

```typescript
import { UpdateAttributeConfig } from "@interfere/attio/models/operations";

let value: UpdateAttributeConfig = {
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

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                | [operations.UpdateAttributeCurrency](../../models/operations/update-attribute-currency.md)                | :heavy_minus_sign:                                                                                        | Configuration available for attributes of type "currency".                                                |
| `recordReference`                                                                                         | [operations.UpdateAttributeRecordReference](../../models/operations/update-attribute-record-reference.md) | :heavy_minus_sign:                                                                                        | Configuration available for attributes of type "record-reference".                                        |