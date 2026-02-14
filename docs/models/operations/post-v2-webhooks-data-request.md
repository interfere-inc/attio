# PostV2WebhooksDataRequest

## Example Usage

```typescript
import { PostV2WebhooksDataRequest } from "@interfere/attio/models/operations";

let value: PostV2WebhooksDataRequest = {
  targetUrl: "https://example.com/webhook",
  subscriptions: [],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `targetUrl`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | URL where the webhook events will be delivered to.                                                                 | https://example.com/webhook                                                                                        |
| `subscriptions`                                                                                                    | [operations.PostV2WebhooksSubscriptionRequest](../../models/operations/post-v2-webhooks-subscription-request.md)[] | :heavy_check_mark:                                                                                                 | One or more events the webhook is subscribed to.                                                                   |                                                                                                                    |