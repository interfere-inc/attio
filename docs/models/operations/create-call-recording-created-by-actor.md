# CreateCallRecordingCreatedByActor

The actor that created this call recording.

## Example Usage

```typescript
import { CreateCallRecordingCreatedByActor } from "@interfere/attio/models/operations";

let value: CreateCallRecordingCreatedByActor = {
  type: "workspace-member",
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `type`                                                                                      | [operations.CreateCallRecordingType](../../models/operations/create-call-recording-type.md) | :heavy_minus_sign:                                                                          | The type of actor. [Read more information on actor types here](/docs/actors).               |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | An ID to identify the actor.                                                                |