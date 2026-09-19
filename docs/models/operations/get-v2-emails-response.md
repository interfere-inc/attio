# GetV2EmailsResponse

Success

## Example Usage

```typescript
import { GetV2EmailsResponse } from "@interfere/attio/models/operations";

let value: GetV2EmailsResponse = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        mailboxId: "7f3a1c88-2e4b-4d59-9a0c-6b8d5e7f1a23",
        emailId: "d2c4f0a1-5b6e-4a7c-8d9e-1f2a3b4c5d6e",
      },
      sentAt: "2023-01-01T15:00:00.000000000Z",
      direction: "outbound",
      subjectLine: "Re: Q3 renewal",
      participants: [
        {
          name: "Simon Mitchell",
          role: "from",
          emailAddress: "person@company.com",
          emailDomain: "fundstack.com",
        },
      ],
      linkedRecords: [
        {
          objectSlug: "people",
          objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
          recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        },
      ],
    },
  ],
  pagination: {
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [models.Email](../../models/email.md)[]                                                 | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `pagination`                                                                            | [operations.GetV2EmailsPagination](../../models/operations/get-v2-emails-pagination.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |