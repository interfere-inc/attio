# UpdateWebhookFilterRequest1

## Example Usage

```typescript
import { UpdateWebhookFilterRequest1 } from "@interfere/attio/models/operations";

let value: UpdateWebhookFilterRequest1 = {
  dollarOr: [
    {
      field: "<value>",
      operator: "equals",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `dollarOr`                                       | *operations.UpdateWebhookDollarOrRequestUnion*[] | :heavy_check_mark:                               | N/A                                              |