# OutputValueReferencedActorType

The type of the referenced actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { OutputValueReferencedActorType } from "@interfere/attio/models";

let value: OutputValueReferencedActorType = "workspace-member";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```