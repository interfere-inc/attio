# FindOrCreateMeetingResponse

Success

## Example Usage

```typescript
import { FindOrCreateMeetingResponse } from "@interfere/attio/models/operations";

let value: FindOrCreateMeetingResponse = {
  data: {
    title: "Onboarding Session",
    description:
      "Getting you up to speed with the platform and answering any questions you have.",
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
    },
    isAllDay: false,
    start: {
      date: "2027-11-27",
    },
    end: {
      datetime: "2027-11-27T15:00:00.000-04:00",
      timezone: "America/New_York",
    },
    participants: [],
    linkedRecords: [],
    createdAt: "2023-01-01T15:00:00.000000000Z",
    createdByActor: {
      type: "workspace-member",
      id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    },
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `data`                                    | [models.Meeting](../../models/meeting.md) | :heavy_check_mark:                        | N/A                                       |