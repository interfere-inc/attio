# GetEntryInteractionType

The type of interaction e.g. calendar or email.

## Example Usage

```typescript
import { GetEntryInteractionType } from "@interfere/attio/models/operations";

let value: GetEntryInteractionType = "email";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"activity" | "email" | "meeting" | "calendar-event" | Unrecognized<string>
```