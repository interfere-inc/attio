# PutV2ObjectsObjectRecordsOwnerActor

The actor that created this value.

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsOwnerActor } from "@interfere/attio/models/operations";

let value: PutV2ObjectsObjectRecordsOwnerActor = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                            | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | An ID to identify the actor.                                                                                                    |
| `type`                                                                                                                          | [operations.PutV2ObjectsObjectRecordsOwnerActorType](../../models/operations/put-v2-objects-object-records-owner-actor-type.md) | :heavy_minus_sign:                                                                                                              | The type of actor. [Read more information on actor types here](/docs/actors).                                                   |