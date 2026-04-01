# UpdateAttributeDisplayType

How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".

## Example Usage

```typescript
import { UpdateAttributeDisplayType } from "@interfere/attio/models/operations";

let value: UpdateAttributeDisplayType = "symbol";
```

## Values

```typescript
"code" | "name" | "narrowSymbol" | "symbol"
```