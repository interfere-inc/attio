# GetWebhookResponse

Success

## Example Usage

```typescript
import { GetWebhookResponse } from "@interfere/attio/models/operations";

let value: GetWebhookResponse = {
  data: {
    targetUrl: "https://example.com/webhook",
    subscriptions: [],
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
    },
    status: "active",
    createdAt: "2023-04-27T13:22:49.061281000Z",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.GetWebhookData](../../models/operations/get-webhook-data.md) | :heavy_check_mark:                                                       | N/A                                                                      |