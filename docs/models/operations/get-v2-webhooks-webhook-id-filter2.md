# GetV2WebhooksWebhookIdFilter2

## Example Usage

```typescript
import { GetV2WebhooksWebhookIdFilter2 } from "@interfere/attio/models/operations";

let value: GetV2WebhooksWebhookIdFilter2 = {
  dollarAnd: [
    {
      field: "parent_object_id",
      operator: "equals",
      value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    },
  ],
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `dollarAnd`                                         | *operations.GetV2WebhooksWebhookIdDollarAndUnion*[] | :heavy_check_mark:                                  | N/A                                                 |