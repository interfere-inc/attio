# ResolvedBy

The actor that resolved this comment.

## Example Usage

```typescript
import { ResolvedBy } from "@interfere/attio/models";

let value: ResolvedBy = {
  type: "workspace-member",
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `type`                                                                        | [models.ResolvedByType](../models/resolved-by-type.md)                        | :heavy_minus_sign:                                                            | The type of actor. [Read more information on actor types here](/docs/actors). |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | An ID to identify the actor.                                                  |