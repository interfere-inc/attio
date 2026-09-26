# FindOrCreateMeetingRequest

## Example Usage

```typescript
import { FindOrCreateMeetingRequest } from "@interfere/attio/models/operations";

let value: FindOrCreateMeetingRequest = {
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.FindOrCreateMeetingData](../../models/operations/find-or-create-meeting-data.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |