# PatchV2MeetingsMeetingIdRequest

## Example Usage

```typescript
import { PatchV2MeetingsMeetingIdRequest } from "@interfere/attio/models/operations";

let value: PatchV2MeetingsMeetingIdRequest = {
  meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
  body: {
    data: {
      linkedRecords: [
        {
          object: "people",
          recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `meetingId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | cb59ab17-ad15-460c-a126-0715617c0853                                                                                   |
| `body`                                                                                                                 | [operations.PatchV2MeetingsMeetingIdRequestBody](../../models/operations/patch-v2-meetings-meeting-id-request-body.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |