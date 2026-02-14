# MeetingCreatedByActor

The actor that created this meeting.

## Example Usage

```typescript
import { MeetingCreatedByActor } from "@interfere/attio/models";

let value: MeetingCreatedByActor = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | An ID to identify the actor.                                                  |
| `type`                                                                        | [models.MeetingType](../models/meeting-type.md)                               | :heavy_minus_sign:                                                            | The type of actor. [Read more information on actor types here](/docs/actors). |