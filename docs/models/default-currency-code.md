# DefaultCurrencyCode

The ISO4217 code representing the currency that values for this attribute should be stored in.

## Example Usage

```typescript
import { DefaultCurrencyCode } from "@interfere/attio/models";

let value: DefaultCurrencyCode = "USD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ARS" | "AUD" | "BRL" | "BGN" | "CAD" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "HKD" | "HUF" | "ISK" | "INR" | "ILS" | "JPY" | "KES" | "KRW" | "MYR" | "MXN" | "NTD" | "NZD" | "NGN" | "NOK" | "XPF" | "PEN" | "PHP" | "PLN" | "GBP" | "RWF" | "SAR" | "SGD" | "ZAR" | "SEK" | "CHF" | "THB" | "AED" | "UYU" | "USD" | Unrecognized<string>
```