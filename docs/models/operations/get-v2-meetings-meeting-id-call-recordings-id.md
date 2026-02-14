# GetV2MeetingsMeetingIdCallRecordingsId

## Example Usage

```typescript
import { GetV2MeetingsMeetingIdCallRecordingsId } from "@interfere/attio/models/operations";

let value: GetV2MeetingsMeetingIdCallRecordingsId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
  callRecordingId: "e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `workspaceId`                                              | *string*                                                   | :heavy_check_mark:                                         | The ID of the workspace this call recording belongs to.    | 14beef7a-99f7-4534-a87e-70b564330a4c                       |
| `meetingId`                                                | *string*                                                   | :heavy_check_mark:                                         | The ID of the meeting associated with this call recording. | cb59ab17-ad15-460c-a126-0715617c0853                       |
| `callRecordingId`                                          | *string*                                                   | :heavy_check_mark:                                         | The call recording ID of the call recording.               | e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a                       |