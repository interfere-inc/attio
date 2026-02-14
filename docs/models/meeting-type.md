# MeetingType

The type of actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { MeetingType } from "@interfere/attio/models";

let value: MeetingType = "system";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```