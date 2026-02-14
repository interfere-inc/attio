# GetV2MeetingsResponse

Success

## Example Usage

```typescript
import { GetV2MeetingsResponse } from "@interfere/attio/models/operations";

let value: GetV2MeetingsResponse = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
      },
      title: "Onboarding Session",
      description:
        "Getting you up to speed with the platform and answering any questions you have.",
      isAllDay: false,
      start: {
        date: "2027-11-27",
      },
      end: {
        date: "2027-11-27",
      },
      participants: [
        {
          status: "accepted",
          isOrganizer: false,
          emailAddress: "person@company.com",
        },
      ],
      linkedRecords: [],
      createdAt: "2023-01-01T15:00:00.000000000Z",
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
    },
  ],
  pagination: {
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [models.Meeting](../../models/meeting.md)[]                                                 | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `pagination`                                                                                | [operations.GetV2MeetingsPagination](../../models/operations/get-v2-meetings-pagination.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |