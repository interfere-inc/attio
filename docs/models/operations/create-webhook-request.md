# CreateWebhookRequest

## Example Usage

```typescript
import { CreateWebhookRequest } from "@interfere/attio/models/operations";

let value: CreateWebhookRequest = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [operations.CreateWebhookDataRequest](../../models/operations/create-webhook-data-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |