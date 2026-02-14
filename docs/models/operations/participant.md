# Participant

## Example Usage

```typescript
import { Participant } from "@interfere/attio/models/operations";

let value: Participant = {
  emailAddress: "person@company.com",
  isOrganizer: true,
  status: "accepted",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emailAddress`                                                                                                                                     | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The email address of the participant. New person records and companies will automatically be created based upon the email address values provided. | person@company.com                                                                                                                                 |
| `isOrganizer`                                                                                                                                      | *operations.IsOrganizer*                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Whether or not the participant is the organizer of the meeting.                                                                                    | true                                                                                                                                               |
| `status`                                                                                                                                           | [operations.PostV2MeetingsStatus](../../models/operations/post-v2-meetings-status.md)                                                              | :heavy_check_mark:                                                                                                                                 | The status of the individual meeting participant.                                                                                                  | accepted                                                                                                                                           |