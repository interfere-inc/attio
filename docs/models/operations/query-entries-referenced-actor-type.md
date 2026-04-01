# QueryEntriesReferencedActorType

The type of the referenced actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { QueryEntriesReferencedActorType } from "@interfere/attio/models/operations";

let value: QueryEntriesReferencedActorType = "workspace-member";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```