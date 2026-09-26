# GetCallRecordingResponse

Success

## Example Usage

```typescript
import { GetCallRecordingResponse } from "@interfere/attio/models/operations";

let value: GetCallRecordingResponse = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
      callRecordingId: "e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
    },
    status: "completed",
    webUrl:
      "https://app.attio.com/salarya/calls/cb59ab17-ad15-460c-a126-0715617c0853/e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
    createdByActor: {
      type: "workspace-member",
      id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    },
    createdAt: "2023-01-01T15:00:00.000000000Z",
    videoUrl:
      "https://video.attio.com/call-recording/workspaces/14beef7a-99f7-4534-a87e-70b564330a4c/cb59ab17-ad15-460c-a126-0715617c0853/e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a.mp4",
    transcript: {
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
    },
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [operations.GetCallRecordingData](../../models/operations/get-call-recording-data.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |