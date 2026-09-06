# PostV2SequencesUnsubscribedEmailsDataResponse

## Example Usage

```typescript
import { PostV2SequencesUnsubscribedEmailsDataResponse } from "@interfere/attio/models/operations";

let value: PostV2SequencesUnsubscribedEmailsDataResponse = {
  emailAddress: "person@example.com",
  createdAt: new Date("2026-01-02T15:04:05.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `emailAddress`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The normalized email address on the unsubscribe list.                                         | person@example.com                                                                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the email address was added to the unsubscribe list.                                     | 2026-01-02T15:04:05.000Z                                                                      |