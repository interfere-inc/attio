# PostV2MeetingsRequest

## Example Usage

```typescript
import { PostV2MeetingsRequest } from "@interfere/attio/models/operations";

let value: PostV2MeetingsRequest = {
  data: {
    title: "Onboarding Session",
    description:
      "Getting you up to speed with the platform and answering any questions you have.",
    start: {
      datetime: new Date("2027-11-27T14:00:00Z"),
      timezone: "America/New_York",
    },
    end: {
      date: "2027-11-28",
    },
    isAllDay: false,
    participants: [],
    linkedRecords: [
      {
        object: "people",
        recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      },
    ],
    externalRef: "external_meeting_12345",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [operations.PostV2MeetingsData](../../models/operations/post-v2-meetings-data.md) | :heavy_check_mark:                                                                | N/A                                                                               |