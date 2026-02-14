# GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscriptResponse

Success

## Example Usage

```typescript
import { GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscriptResponse } from "@interfere/attio/models/operations";

let value:
  GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscriptResponse = {
    data: {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
        callRecordingId: "e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
      },
      transcript: [
        {
          speech: "Hello,",
          startTime: 0.51,
          endTime: 0.81,
          speaker: {
            name: "Alex Bell",
          },
        },
        {
          speech: "Mr Watson,",
          startTime: 0.81,
          endTime: 1.41,
          speaker: {
            name: "Alex Bell",
          },
        },
        {
          speech: "come",
          startTime: 1.41,
          endTime: 1.71,
          speaker: {
            name: "Alex Bell",
          },
        },
        {
          speech: "here.",
          startTime: 1.71,
          endTime: 2.11,
          speaker: {
            name: "Alex Bell",
          },
        },
        {
          speech: "I",
          startTime: 2.11,
          endTime: 2.31,
          speaker: {
            name: "Alex Bell",
          },
        },
        {
          speech: "want",
          startTime: 2.31,
          endTime: 2.71,
          speaker: {
            name: "Alex Bell",
          },
        },
        {
          speech: "to",
          startTime: 2.71,
          endTime: 2.91,
          speaker: {
            name: "Alex Bell",
          },
        },
        {
          speech: "see",
          startTime: 2.91,
          endTime: 3.21,
          speaker: {
            name: "Alex Bell",
          },
        },
        {
          speech: "you.",
          startTime: 3.21,
          endTime: 3.61,
          speaker: {
            name: "Alex Bell",
          },
        },
        {
          speech: "I'm",
          startTime: 4.21,
          endTime: 4.51,
          speaker: {
            name: "Tom Watson",
          },
        },
        {
          speech: "here.",
          startTime: 4.51,
          endTime: 4.91,
          speaker: {
            name: "Tom Watson",
          },
        },
      ],
      rawTranscript:
        "[00:00] Alex Bell: Mr Watson, come here. I want to see you.\n[00:05] Tom Watson: I'm here.",
      webUrl:
        "https://app.attio.com/salarya/calls/cb59ab17-ad15-460c-a126-0715617c0853/e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a/transcript",
    },
    pagination: {
      nextCursor: "<value>",
    },
  };
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                              | [operations.GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscriptData](../../models/operations/get-v2-meetings-meeting-id-call-recordings-call-recording-id-transcript-data.md)             | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |
| `pagination`                                                                                                                                                                                        | [operations.GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscriptPagination](../../models/operations/get-v2-meetings-meeting-id-call-recordings-call-recording-id-transcript-pagination.md) | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |