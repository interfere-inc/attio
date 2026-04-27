# AssertRecordCreatedByActor8

The actor that created this value.

## Example Usage

```typescript
import { AssertRecordCreatedByActor8 } from "@interfere/attio/models/operations";

let value: AssertRecordCreatedByActor8 = {
  type: "workspace-member",
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                        | [operations.AssertRecordCreatedByActorType8](../../models/operations/assert-record-created-by-actor-type8.md) | :heavy_minus_sign:                                                                                            | The type of actor. [Read more information on actor types here](/docs/actors).                                 |
| `id`                                                                                                          | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | An ID to identify the actor.                                                                                  |