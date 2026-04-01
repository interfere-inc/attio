# CreateWebhookDataRequest

## Example Usage

```typescript
import { CreateWebhookDataRequest } from "@interfere/attio/models/operations";

let value: CreateWebhookDataRequest = {
  targetUrl: "https://example.com/webhook",
  subscriptions: [],
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `targetUrl`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | URL where the webhook events will be delivered to.                                                              | https://example.com/webhook                                                                                     |
| `subscriptions`                                                                                                 | [operations.CreateWebhookSubscriptionRequest](../../models/operations/create-webhook-subscription-request.md)[] | :heavy_check_mark:                                                                                              | One or more events the webhook is subscribed to.                                                                |                                                                                                                 |