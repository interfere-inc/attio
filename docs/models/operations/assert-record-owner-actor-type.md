# AssertRecordOwnerActorType

The type of actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { AssertRecordOwnerActorType } from "@interfere/attio/models/operations";

let value: AssertRecordOwnerActorType = "system";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```