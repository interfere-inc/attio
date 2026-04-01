# CreateWebhookFilterRequest1

## Example Usage

```typescript
import { CreateWebhookFilterRequest1 } from "@interfere/attio/models/operations";

let value: CreateWebhookFilterRequest1 = {
  dollarOr: [
    {
      field: "<value>",
      operator: "not_equals",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `dollarOr`                                       | *operations.CreateWebhookDollarOrRequestUnion*[] | :heavy_check_mark:                               | N/A                                              |