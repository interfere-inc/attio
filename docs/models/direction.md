# Direction

Whether the email was sent from your workspace or received by it.

## Example Usage

```typescript
import { Direction } from "@interfere/attio/models";

let value: Direction = "outbound";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"inbound" | "outbound" | Unrecognized<string>
```