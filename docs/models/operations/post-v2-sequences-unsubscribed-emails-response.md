# PostV2SequencesUnsubscribedEmailsResponse

Success

## Example Usage

```typescript
import { PostV2SequencesUnsubscribedEmailsResponse } from "@interfere/attio/models/operations";

let value: PostV2SequencesUnsubscribedEmailsResponse = {
  data: [
    {
      emailAddress: "person@example.com",
      createdAt: new Date("2026-01-02T15:04:05.000Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                       | [operations.PostV2SequencesUnsubscribedEmailsDataResponse](../../models/operations/post-v2-sequences-unsubscribed-emails-data-response.md)[] | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |