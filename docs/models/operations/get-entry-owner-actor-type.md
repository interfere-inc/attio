# GetEntryOwnerActorType

The type of actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { GetEntryOwnerActorType } from "@interfere/attio/models/operations";

let value: GetEntryOwnerActorType = "api-token";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```