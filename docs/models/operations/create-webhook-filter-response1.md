# CreateWebhookFilterResponse1

## Example Usage

```typescript
import { CreateWebhookFilterResponse1 } from "@interfere/attio/models/operations";

let value: CreateWebhookFilterResponse1 = {
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

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `dollarOr`                                        | *operations.CreateWebhookDollarOrResponseUnion*[] | :heavy_check_mark:                                | N/A                                               |