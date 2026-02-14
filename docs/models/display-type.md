# DisplayType

How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".

## Example Usage

```typescript
import { DisplayType } from "@interfere/attio/models";

let value: DisplayType = "code";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"code" | "name" | "narrowSymbol" | "symbol" | Unrecognized<string>
```