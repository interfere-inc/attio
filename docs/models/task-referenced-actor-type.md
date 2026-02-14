# TaskReferencedActorType

The type of actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { TaskReferencedActorType } from "@interfere/attio/models";

let value: TaskReferencedActorType = "workspace-member";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```