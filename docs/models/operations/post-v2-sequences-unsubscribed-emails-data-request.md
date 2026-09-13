# PostV2SequencesUnsubscribedEmailsDataRequest

## Example Usage

```typescript
import { PostV2SequencesUnsubscribedEmailsDataRequest } from "@interfere/attio/models/operations";

let value: PostV2SequencesUnsubscribedEmailsDataRequest = {
  emailAddresses: [
    "person@example.com",
  ],
};
```

## Fields

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emailAddresses`                                                                                                                                                          | *string*[]                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                        | The email addresses to add to the unsubscribe list. A maximum of 1000 email addresses can be provided per request. Email addresses are normalized before they are stored. |