# PostV2MeetingsMeetingIdCallRecordingsRequest

## Example Usage

```typescript
import { PostV2MeetingsMeetingIdCallRecordingsRequest } from "@interfere/attio/models/operations";

let value: PostV2MeetingsMeetingIdCallRecordingsRequest = {
  meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
  body: {
    data: {
      videoUrl: "https://example.com/recording.mp4",
    },
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meetingId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                | cb59ab17-ad15-460c-a126-0715617c0853                                                                                                               |
| `body`                                                                                                                                             | [operations.PostV2MeetingsMeetingIdCallRecordingsRequestBody](../../models/operations/post-v2-meetings-meeting-id-call-recordings-request-body.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |                                                                                                                                                    |