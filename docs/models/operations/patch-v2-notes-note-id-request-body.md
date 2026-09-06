# PatchV2NotesNoteIdRequestBody

## Example Usage

```typescript
import { PatchV2NotesNoteIdRequestBody } from "@interfere/attio/models/operations";

let value: PatchV2NotesNoteIdRequestBody = {
  data: {
    title: "Initial Prospecting Call Summary",
    format: "markdown",
    content:
      "# Meeting Recap: Q4 Planning\n\n**Date:** 2023-10-26\n**Attendees:** Alex, Jamie, Casey\n\n## Key Discussion Points\n\n- Reviewed Q3 performance metrics.\n- Brainstormed key initiatives for Q4.\n- Discussed budget allocation for ==Project Phoenix==.\n\n## Action Items\n\n1. Alex to finalize Q4 roadmap by EOD Friday.\n2. Jamie to schedule follow-up with [Marketing Team](https://app.attio.com/teams/marketing).\n3. Casey to draft initial budget for ~~Project Chimera~~ (now deferred).\n\n*Next steps: Review draft roadmap next week.*",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.PatchV2NotesNoteIdData](../../models/operations/patch-v2-notes-note-id-data.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |