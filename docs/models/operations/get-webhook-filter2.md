# GetWebhookFilter2

## Example Usage

```typescript
import { GetWebhookFilter2 } from "@interfere/attio/models/operations";

let value: GetWebhookFilter2 = {
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

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `dollarAnd`                             | *operations.GetWebhookDollarAndUnion*[] | :heavy_check_mark:                      | N/A                                     |