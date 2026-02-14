# MeetingId

## Example Usage

```typescript
import { MeetingId } from "@interfere/attio/models";

let value: MeetingId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `workspaceId`                                   | *string*                                        | :heavy_check_mark:                              | The ID of the workspace the meeting belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c            |
| `meetingId`                                     | *string*                                        | :heavy_check_mark:                              | The ID of the Attio meeting.                    | cb59ab17-ad15-460c-a126-0715617c0853            |