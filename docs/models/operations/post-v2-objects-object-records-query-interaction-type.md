# PostV2ObjectsObjectRecordsQueryInteractionType

The type of interaction e.g. calendar or email.

## Example Usage

```typescript
import { PostV2ObjectsObjectRecordsQueryInteractionType } from "@interfere/attio/models/operations";

let value: PostV2ObjectsObjectRecordsQueryInteractionType = "email";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"calendar-event" | "call" | "chat-thread" | "email" | "in-person-meeting" | "meeting" | Unrecognized<string>
```