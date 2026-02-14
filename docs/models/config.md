# Config

Additional, type-dependent configuration for the attribute.

## Example Usage

```typescript
import { Config } from "@interfere/attio/models";

let value: Config = {
  currency: {
    defaultCurrencyCode: "USD",
    displayType: "code",
  },
  recordReference: {
    allowedObjectIds: [
      "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `currency`                                                         | [models.Currency](../models/currency.md)                           | :heavy_check_mark:                                                 | Configuration available for attributes of type "currency".         |
| `recordReference`                                                  | [models.RecordReference](../models/record-reference.md)            | :heavy_check_mark:                                                 | Configuration available for attributes of type "record-reference". |