# CreateNewAttributeConfig

## Example Usage

```typescript
import { CreateNewAttributeConfig } from "@interfere/attio/models/operations";

let value: CreateNewAttributeConfig = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                       | [operations.CreateNewAttributeCurrency](../../models/operations/create-new-attribute-currency.md)                | :heavy_minus_sign:                                                                                               | Configuration available for attributes of type "currency".                                                       |
| `recordReference`                                                                                                | [operations.CreateNewAttributeRecordReference](../../models/operations/create-new-attribute-record-reference.md) | :heavy_minus_sign:                                                                                               | Configuration available for attributes of type "record-reference".                                               |