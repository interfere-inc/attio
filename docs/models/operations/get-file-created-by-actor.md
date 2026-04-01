# GetFileCreatedByActor

The actor that created this file entry.

## Example Usage

```typescript
import { GetFileCreatedByActor } from "@interfere/attio/models/operations";

let value: GetFileCreatedByActor = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `id`                                                                                              | *string*                                                                                          | :heavy_minus_sign:                                                                                | An ID to identify the actor.                                                                      |
| `type`                                                                                            | [operations.GetFileCreatedByActorType](../../models/operations/get-file-created-by-actor-type.md) | :heavy_minus_sign:                                                                                | The type of actor. [Read more information on actor types here](/docs/actors).                     |