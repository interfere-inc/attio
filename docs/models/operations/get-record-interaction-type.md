# GetRecordInteractionType

The type of interaction e.g. calendar or email.

## Example Usage

```typescript
import { GetRecordInteractionType } from "@interfere/attio/models/operations";

let value: GetRecordInteractionType = "email";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"activity" | "email" | "meeting" | "calendar-event" | Unrecognized<string>
```