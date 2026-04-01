# AssertEntryCreatedByActorType2

The type of actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { AssertEntryCreatedByActorType2 } from "@interfere/attio/models/operations";

let value: AssertEntryCreatedByActorType2 = "app";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```