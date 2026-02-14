# AttributeTypeEnum

The type of the attribute.

## Example Usage

```typescript
import { AttributeTypeEnum } from "@interfere/attio/models";

let value: AttributeTypeEnum = "text";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "number" | "checkbox" | "currency" | "date" | "timestamp" | "rating" | "status" | "select" | "record-reference" | "actor-reference" | "location" | "domain" | "email-address" | "phone-number" | "interaction" | "personal-name" | Unrecognized<string>
```