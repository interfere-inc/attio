# PatchV2WebhooksWebhookIdRequest

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdRequest } from "@interfere/attio/models/operations";

let value: PatchV2WebhooksWebhookIdRequest = {
  webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
  body: {
    data: {
      targetUrl: "https://example.com/webhook",
      subscriptions: [
        {
          eventType: "note.created",
          filter: {
            dollarAnd: [
              {
                field: "parent_object_id",
                operator: "equals",
                value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
              },
            ],
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `webhookId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | 23e42eaf-323a-41da-b5bb-fd67eebda553                                                                                   |
| `body`                                                                                                                 | [operations.PatchV2WebhooksWebhookIdRequestBody](../../models/operations/patch-v2-webhooks-webhook-id-request-body.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |