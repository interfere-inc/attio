# Participant

## Example Usage

```typescript
import { Participant } from "@interfere/attio/models";

let value: Participant = {
  status: "accepted",
  isOrganizer: false,
  emailAddress: "person@company.com",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `status`                                                        | [models.StatusEnum](../models/status-enum.md)                   | :heavy_check_mark:                                              | The status of the individual meeting participant.               | accepted                                                        |
| `isOrganizer`                                                   | *boolean*                                                       | :heavy_check_mark:                                              | Whether or not the participant is the organizer of the meeting. | false                                                           |
| `emailAddress`                                                  | *string*                                                        | :heavy_check_mark:                                              | The normalized email address of the meeting participant.        | person@company.com                                              |