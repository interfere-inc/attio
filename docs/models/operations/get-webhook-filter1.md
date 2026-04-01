# GetWebhookFilter1

## Example Usage

```typescript
import { GetWebhookFilter1 } from "@interfere/attio/models/operations";

let value: GetWebhookFilter1 = {
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

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `dollarOr`                             | *operations.GetWebhookDollarOrUnion*[] | :heavy_check_mark:                     | N/A                                    |