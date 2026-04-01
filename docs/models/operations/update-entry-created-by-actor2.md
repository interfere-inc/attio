# UpdateEntryCreatedByActor2

The actor that created this value.

## Example Usage

```typescript
import { UpdateEntryCreatedByActor2 } from "@interfere/attio/models/operations";

let value: UpdateEntryCreatedByActor2 = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | An ID to identify the actor.                                                                                |
| `type`                                                                                                      | [operations.UpdateEntryCreatedByActorType2](../../models/operations/update-entry-created-by-actor-type2.md) | :heavy_minus_sign:                                                                                          | The type of actor. [Read more information on actor types here](/docs/actors).                               |