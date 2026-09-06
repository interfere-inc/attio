# CreateCallRecordingTranscript

## Example Usage

```typescript
import { CreateCallRecordingTranscript } from "@interfere/attio/models/operations";

let value: CreateCallRecordingTranscript = {
  speech: "Hello everyone, welcome to the meeting.",
  startTime: 0.5123,
  endTime: 3.2123,
  speaker: {
    name: "Simon Mitchell",
    emailAddress: "person@company.com",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `speech`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | The spoken text for this segment of the transcript.                                               | Hello everyone, welcome to the meeting.                                                           |
| `startTime`                                                                                       | *number*                                                                                          | :heavy_check_mark:                                                                                | The start time of this speech segment in seconds.                                                 | 0.5123                                                                                            |
| `endTime`                                                                                         | *number*                                                                                          | :heavy_check_mark:                                                                                | The end time of this speech segment in seconds.                                                   | 3.2123                                                                                            |
| `speaker`                                                                                         | [operations.CreateCallRecordingSpeaker](../../models/operations/create-call-recording-speaker.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |