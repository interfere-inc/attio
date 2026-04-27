# CreateNewAttributeType

The type of the attribute. This value affects the possible `config` values. Attributes of type "status" are not supported on objects.

## Example Usage

```typescript
import { CreateNewAttributeType } from "@interfere/attio/models/operations";

let value: CreateNewAttributeType = "text";
```

## Values

```typescript
"text" | "number" | "checkbox" | "currency" | "date" | "timestamp" | "rating" | "status" | "select" | "record-reference" | "actor-reference" | "location" | "domain" | "email-address" | "phone-number"
```