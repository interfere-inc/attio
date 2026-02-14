# OutputValueInteractionType

The type of interaction e.g. calendar or email.

## Example Usage

```typescript
import { OutputValueInteractionType } from "@interfere/attio/models";

let value: OutputValueInteractionType = "email";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"calendar-event" | "call" | "chat-thread" | "email" | "in-person-meeting" | "meeting" | Unrecognized<string>
```