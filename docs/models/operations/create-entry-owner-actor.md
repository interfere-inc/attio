# CreateEntryOwnerActor

The actor that created this value.

## Example Usage

```typescript
import { CreateEntryOwnerActor } from "@interfere/attio/models/operations";

let value: CreateEntryOwnerActor = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_minus_sign:                                                                               | An ID to identify the actor.                                                                     |
| `type`                                                                                           | [operations.CreateEntryOwnerActorType](../../models/operations/create-entry-owner-actor-type.md) | :heavy_minus_sign:                                                                               | The type of actor. [Read more information on actor types here](/docs/actors).                    |