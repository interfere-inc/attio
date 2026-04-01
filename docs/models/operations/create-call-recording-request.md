# CreateCallRecordingRequest

## Example Usage

```typescript
import { CreateCallRecordingRequest } from "@interfere/attio/models/operations";

let value: CreateCallRecordingRequest = {
  meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
  body: {
    data: {
      videoUrl: "https://example.com/recording.mp4",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `meetingId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | cb59ab17-ad15-460c-a126-0715617c0853                                                                       |
| `body`                                                                                                     | [operations.CreateCallRecordingRequestBody](../../models/operations/create-call-recording-request-body.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |