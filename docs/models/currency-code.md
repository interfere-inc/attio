# CurrencyCode

The ISO4217 currency code representing the currency that the value is stored in.

## Example Usage

```typescript
import { CurrencyCode } from "@interfere/attio/models";

let value: CurrencyCode = "USD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ARS" | "AUD" | "BRL" | "BGN" | "CAD" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "HKD" | "HUF" | "ISK" | "INR" | "ILS" | "JPY" | "KES" | "KRW" | "MYR" | "MXN" | "NTD" | "NZD" | "NGN" | "NOK" | "XPF" | "PEN" | "PHP" | "PLN" | "GBP" | "RWF" | "SAR" | "SGD" | "ZAR" | "SEK" | "CHF" | "THB" | "AED" | "UYU" | "USD" | Unrecognized<string>
```