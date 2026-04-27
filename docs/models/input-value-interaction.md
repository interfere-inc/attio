# InputValueInteraction

## Example Usage

```typescript
import { InputValueInteraction } from "@interfere/attio/models";

let value: InputValueInteraction = {
  interactionType: "email",
  interactedAt: new Date("2023-01-01T15:00:00.000000000Z"),
  ownerActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `interactionType`                                                                             | [models.InputValueInteractionType](../models/input-value-interaction-type.md)                 | :heavy_check_mark:                                                                            | The type of interaction e.g. calendar or email.                                               | email                                                                                         |
| `interactedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the interaction occurred.                                                                | 2023-01-01T15:00:00.000000000Z                                                                |
| `ownerActor`                                                                                  | [models.InputValueOwnerActor](../models/input-value-owner-actor.md)                           | :heavy_check_mark:                                                                            | The actor that created this value.                                                            | {<br/>"type": "workspace-member",<br/>"id": "50cf242c-7fa3-4cad-87d0-75b1af71c57b"<br/>}      |