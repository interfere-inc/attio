# PostV2ObjectsObjectRecordsReferencedActorType

The type of the referenced actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { PostV2ObjectsObjectRecordsReferencedActorType } from "@interfere/attio/models/operations";

let value: PostV2ObjectsObjectRecordsReferencedActorType = "workspace-member";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```