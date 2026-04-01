# GetEntryCreatedByActor3

The actor that created this value.

## Example Usage

```typescript
import { GetEntryCreatedByActor3 } from "@interfere/attio/models/operations";

let value: GetEntryCreatedByActor3 = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_minus_sign:                                                                                    | An ID to identify the actor.                                                                          |
| `type`                                                                                                | [operations.GetEntryCreatedByActorType3](../../models/operations/get-entry-created-by-actor-type3.md) | :heavy_minus_sign:                                                                                    | The type of actor. [Read more information on actor types here](/docs/actors).                         |