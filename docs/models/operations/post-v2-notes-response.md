# PostV2NotesResponse

Success

## Example Usage

```typescript
import { PostV2NotesResponse } from "@interfere/attio/models/operations";

let value: PostV2NotesResponse = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
    },
    parentObject: "people",
    parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    title: "Initial Prospecting Call Summary",
    meetingId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    contentPlaintext:
      "Introduction\nDate and time of the call\nParticipants\nPurpose of the call\nCustomer Background\nCompany overview (industry, size, location)\nKey business challenges\nCurrent software solutions (if any) and pain points",
    contentMarkdown:
      "# Introduction\nDate and time of the call\nParticipants\nPurpose of the call\n\n## Customer Background\n- Company overview (industry, size, location)\n- Key business challenges\n- Current software solutions (if any) and pain points",
    tags: [
      {
        type: "workspace-member",
        workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      },
      {
        type: "record",
        object: "people",
        recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      },
    ],
    createdByActor: {
      id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      type: "workspace-member",
    },
    createdAt: "2022-11-21T13:22:49.061281000Z",
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `data`                              | [models.Note](../../models/note.md) | :heavy_check_mark:                  | N/A                                 |