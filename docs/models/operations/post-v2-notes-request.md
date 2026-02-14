# PostV2NotesRequest

## Example Usage

```typescript
import { PostV2NotesRequest } from "@interfere/attio/models/operations";

let value: PostV2NotesRequest = {
  data: {
    parentObject: "people",
    parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    title: "Initial Prospecting Call Summary",
    format: "plaintext",
    content:
      "# Meeting Recap: Q4 Planning\n\n**Date:** 2023-10-26\n**Attendees:** Alex, Jamie, Casey\n\n## Key Discussion Points\n\n- Reviewed Q3 performance metrics.\n- Brainstormed key initiatives for Q4.\n- Discussed budget allocation for ==Project Phoenix==.\n\n## Action Items\n\n1. Alex to finalize Q4 roadmap by EOD Friday.\n2. Jamie to schedule follow-up with [Marketing Team](https://app.attio.com/teams/marketing).\n3. Casey to draft initial budget for ~~Project Chimera~~ (now deferred).\n\n*Next steps: Review draft roadmap next week.*",
    createdAt: "2023-01-01T15:00:00.000000000Z",
    meetingId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [operations.PostV2NotesData](../../models/operations/post-v2-notes-data.md) | :heavy_check_mark:                                                          | N/A                                                                         |