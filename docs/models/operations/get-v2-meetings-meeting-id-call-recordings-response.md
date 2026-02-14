# GetV2MeetingsMeetingIdCallRecordingsResponse

Success

## Example Usage

```typescript
import { GetV2MeetingsMeetingIdCallRecordingsResponse } from "@interfere/attio/models/operations";

let value: GetV2MeetingsMeetingIdCallRecordingsResponse = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
        callRecordingId: "e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
      },
      status: "completed",
      webUrl:
        "https://app.attio.com/salarya/calls/cb59ab17-ad15-460c-a126-0715617c0853/e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      createdAt: "2023-01-01T15:00:00.000000000Z",
    },
  ],
  pagination: {
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                        | [operations.GetV2MeetingsMeetingIdCallRecordingsData](../../models/operations/get-v2-meetings-meeting-id-call-recordings-data.md)[]           | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `pagination`                                                                                                                                  | [operations.GetV2MeetingsMeetingIdCallRecordingsPagination](../../models/operations/get-v2-meetings-meeting-id-call-recordings-pagination.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |