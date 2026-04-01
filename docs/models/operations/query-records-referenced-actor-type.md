# QueryRecordsReferencedActorType

The type of the referenced actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { QueryRecordsReferencedActorType } from "@interfere/attio/models/operations";

let value: QueryRecordsReferencedActorType = "workspace-member";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```