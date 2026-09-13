# PatchV2NotesNoteIdRequest

## Example Usage

```typescript
import { PatchV2NotesNoteIdRequest } from "@interfere/attio/models/operations";

let value: PatchV2NotesNoteIdRequest = {
  noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
  body: {
    data: {
      title: "Initial Prospecting Call Summary",
      format: "markdown",
      content:
        "# Meeting Recap: Q4 Planning\n\n**Date:** 2023-10-26\n**Attendees:** Alex, Jamie, Casey\n\n## Key Discussion Points\n\n- Reviewed Q3 performance metrics.\n- Brainstormed key initiatives for Q4.\n- Discussed budget allocation for ==Project Phoenix==.\n\n## Action Items\n\n1. Alex to finalize Q4 roadmap by EOD Friday.\n2. Jamie to schedule follow-up with [Marketing Team](https://app.attio.com/teams/marketing).\n3. Casey to draft initial budget for ~~Project Chimera~~ (now deferred).\n\n*Next steps: Review draft roadmap next week.*",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `noteId`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | ff3f3bd4-40f4-4f80-8187-cd02385af424                                                                       |
| `body`                                                                                                     | [operations.PatchV2NotesNoteIdRequestBody](../../models/operations/patch-v2-notes-note-id-request-body.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |