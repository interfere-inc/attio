# GetCallRecordingTranscript

The transcript for this call recording, `null` if no transcript is available.

## Example Usage

```typescript
import { GetCallRecordingTranscript } from "@interfere/attio/models/operations";

let value: GetCallRecordingTranscript = {
  segments: [
    {
      speech: "Hello,",
      startTime: 0.51,
      endTime: 0.81,
      speaker: {
        name: "Alex Bell",
      },
    },
    {
      speech: "Mr Watson, come here.",
      startTime: 0.81,
      endTime: 2.11,
      speaker: {
        name: "Alex Bell",
      },
    },
    {
      speech: "I'm here.",
      startTime: 4.21,
      endTime: 4.91,
      speaker: {
        name: "Tom Watson",
      },
    },
  ],
  rawTranscript:
    "[00:00] Alex Bell: Hello, Mr Watson, come here.\n[00:04] Tom Watson: I'm here.",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `segments`                                                                                                                                                                                                                                                                                                                  | [operations.Segment](../../models/operations/segment.md)[]                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | The transcript segments with speech, timing, and speaker information.                                                                                                                                                                                                                                                       | [<br/>{<br/>"speech": "Hello,",<br/>"start_time": 0.51,<br/>"end_time": 0.81,<br/>"speaker": {<br/>"name": "Alex Bell"<br/>}<br/>},<br/>{<br/>"speech": "Mr Watson, come here.",<br/>"start_time": 0.81,<br/>"end_time": 2.11,<br/>"speaker": {<br/>"name": "Alex Bell"<br/>}<br/>},<br/>{<br/>"speech": "I'm here.",<br/>"start_time": 4.21,<br/>"end_time": 4.91,<br/>"speaker": {<br/>"name": "Tom Watson"<br/>}<br/>}<br/>] |
| `rawTranscript`                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                          | The raw transcript of the call recording.                                                                                                                                                                                                                                                                                   | [00:00] Alex Bell: Hello, Mr Watson, come here.<br/>[00:04] Tom Watson: I'm here.                                                                                                                                                                                                                                           |