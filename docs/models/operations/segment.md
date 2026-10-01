# Segment

## Example Usage

```typescript
import { Segment } from "@interfere/attio/models/operations";

let value: Segment = {
  speech: "Hello,",
  startTime: 0.51,
  endTime: 0.81,
  speaker: {
    name: "Alex Bell",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `speech`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | The spoken text for this segment of the transcript.                                         | Hello,                                                                                      |
| `startTime`                                                                                 | *number*                                                                                    | :heavy_check_mark:                                                                          | The start time of this speech segment in seconds, measured from the start of the recording. | 0.51                                                                                        |
| `endTime`                                                                                   | *number*                                                                                    | :heavy_check_mark:                                                                          | The end time of this speech segment in seconds, measured from the start of the recording.   | 0.81                                                                                        |
| `speaker`                                                                                   | [operations.GetCallRecordingSpeaker](../../models/operations/get-call-recording-speaker.md) | :heavy_check_mark:                                                                          | The speaker of this transcript segment.                                                     |                                                                                             |