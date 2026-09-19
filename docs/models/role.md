# Role

The role this participant had on the email.

## Example Usage

```typescript
import { Role } from "@interfere/attio/models";

let value: Role = "from";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"from" | "reply-to" | "to" | "cc" | "bcc" | Unrecognized<string>
```