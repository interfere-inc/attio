# UpdateWebhookDataRequest

## Example Usage

```typescript
import { UpdateWebhookDataRequest } from "@interfere/attio/models/operations";

let value: UpdateWebhookDataRequest = {
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
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `targetUrl`                                                                                                     | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | URL where the webhook events will be delivered to.                                                              | https://example.com/webhook                                                                                     |
| `subscriptions`                                                                                                 | [operations.UpdateWebhookSubscriptionRequest](../../models/operations/update-webhook-subscription-request.md)[] | :heavy_minus_sign:                                                                                              | One or more events the webhook is subscribed to.                                                                |                                                                                                                 |