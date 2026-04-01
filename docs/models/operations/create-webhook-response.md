# CreateWebhookResponse

Success

## Example Usage

```typescript
import { CreateWebhookResponse } from "@interfere/attio/models/operations";

let value: CreateWebhookResponse = {
  data: {
    targetUrl: "https://example.com/webhook",
    subscriptions: [],
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
    },
    status: "active",
    createdAt: "2023-04-27T13:22:49.061281000Z",
    secret: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [operations.CreateWebhookDataResponse](../../models/operations/create-webhook-data-response.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |