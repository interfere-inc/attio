# OutputValueInteractionType

The type of interaction e.g. calendar or email.

## Example Usage

```typescript
import { OutputValueInteractionType } from "@interfere/attio/models";

let value: OutputValueInteractionType = "email";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"activity" | "email" | "meeting" | "calendar-event" | Unrecognized<string>
```