# UpdateWebhookRequestBody

## Example Usage

```typescript
import { UpdateWebhookRequestBody } from "@interfere/attio/models/operations";

let value: UpdateWebhookRequestBody = {
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
| `data`                                                                                        | [operations.UpdateWebhookDataRequest](../../models/operations/update-webhook-data-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |