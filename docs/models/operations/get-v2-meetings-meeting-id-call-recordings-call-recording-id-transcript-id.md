# GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscriptId

## Example Usage

```typescript
import { GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscriptId } from "@interfere/attio/models/operations";

let value: GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscriptId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
  callRecordingId: "e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `workspaceId`                                            | *string*                                                 | :heavy_check_mark:                                       | The ID of the workspace this transcript belongs to.      | 14beef7a-99f7-4534-a87e-70b564330a4c                     |
| `meetingId`                                              | *string*                                                 | :heavy_check_mark:                                       | The ID of the meeting associated with this transcript.   | cb59ab17-ad15-460c-a126-0715617c0853                     |
| `callRecordingId`                                        | *string*                                                 | :heavy_check_mark:                                       | The ID of the call recording this transcript belongs to. | e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a                     |