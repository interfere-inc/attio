# GetRecordCreatedByActor1

The actor that created this value.

## Example Usage

```typescript
import { GetRecordCreatedByActor1 } from "@interfere/attio/models/operations";

let value: GetRecordCreatedByActor1 = {
  type: "workspace-member",
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                  | [operations.GetRecordCreatedByActorType1](../../models/operations/get-record-created-by-actor-type1.md) | :heavy_minus_sign:                                                                                      | The type of actor. [Read more information on actor types here](/docs/actors).                           |
| `id`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | An ID to identify the actor.                                                                            |