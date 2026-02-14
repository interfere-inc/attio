# PostV2MeetingsMeetingIdCallRecordingsCreatedByActor

The actor that created this call recording.

## Example Usage

```typescript
import { PostV2MeetingsMeetingIdCallRecordingsCreatedByActor } from "@interfere/attio/models/operations";

let value: PostV2MeetingsMeetingIdCallRecordingsCreatedByActor = {
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  type: "workspace-member",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                               | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | An ID to identify the actor.                                                                                                                                       |
| `type`                                                                                                                                                             | [operations.PostV2MeetingsMeetingIdCallRecordingsCreatedByActorType](../../models/operations/post-v2-meetings-meeting-id-call-recordings-created-by-actor-type.md) | :heavy_minus_sign:                                                                                                                                                 | The type of actor. [Read more information on actor types here](/docs/actors).                                                                                      |