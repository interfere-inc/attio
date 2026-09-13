# CreateCallRecordingRequestBody

## Example Usage

```typescript
import { CreateCallRecordingRequestBody } from "@interfere/attio/models/operations";

let value: CreateCallRecordingRequestBody = {
  data: {
    videoUrl: "https://example.com/recording.mp4",
    transcript: [
      {
        speech: "Hello everyone, welcome to the meeting.",
        startTime: 0.5123,
        endTime: 3.2123,
        speaker: {
          name: "Simon Mitchell",
          emailAddress: "person@company.com",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                     | [operations.CreateCallRecordingDataRequest](../../models/operations/create-call-recording-data-request.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |