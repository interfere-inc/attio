# GetV2FilesFileIdCreatedByActor

The actor that created this file entry.

## Example Usage

```typescript
import { GetV2FilesFileIdCreatedByActor } from "@interfere/attio/models/operations";

let value: GetV2FilesFileIdCreatedByActor = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | An ID to identify the actor.                                                                                           |
| `type`                                                                                                                 | [operations.GetV2FilesFileIdCreatedByActorType](../../models/operations/get-v2-files-file-id-created-by-actor-type.md) | :heavy_minus_sign:                                                                                                     | The type of actor. [Read more information on actor types here](/docs/actors).                                          |