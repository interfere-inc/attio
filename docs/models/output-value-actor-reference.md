# OutputValueActorReference

## Example Usage

```typescript
import { OutputValueActorReference } from "@interfere/attio/models";

let value: OutputValueActorReference = {
  referencedActorType: "workspace-member",
  referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  attributeType: "actor-reference",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `referencedActorType`                                                                        | [models.OutputValueReferencedActorType](../models/output-value-referenced-actor-type.md)     | :heavy_check_mark:                                                                           | The type of the referenced actor. [Read more information on actor types here](/docs/actors). | workspace-member                                                                             |
| `referencedActorId`                                                                          | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the referenced actor.                                                              | 50cf242c-7fa3-4cad-87d0-75b1af71c57b                                                         |
| `attributeType`                                                                              | [models.AttributeTypeActorReference](../models/attribute-type-actor-reference.md)            | :heavy_check_mark:                                                                           | The attribute type of the value.                                                             | actor-reference                                                                              |