# OutputValueCurrency

## Example Usage

```typescript
import { OutputValueCurrency } from "@interfere/attio/models";

let value: OutputValueCurrency = {
  currencyValue: 99,
  currencyCode: "USD",
  attributeType: "currency",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `currencyValue`                                                                             | *number*                                                                                    | :heavy_check_mark:                                                                          | A numerical representation of the currency value. A decimal with a max of 4 decimal places. | 99                                                                                          |
| `currencyCode`                                                                              | [models.CurrencyCode](../models/currency-code.md)                                           | :heavy_minus_sign:                                                                          | The ISO4217 currency code representing the currency that the value is stored in.            | USD                                                                                         |
| `attributeType`                                                                             | [models.AttributeTypeCurrency](../models/attribute-type-currency.md)                        | :heavy_check_mark:                                                                          | The attribute type of the value.                                                            | currency                                                                                    |