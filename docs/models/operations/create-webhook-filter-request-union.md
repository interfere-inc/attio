# CreateWebhookFilterRequestUnion

Filters to determine whether the webhook event should be sent. If null, the filter always passes.

When filters are compared for uniqueness, key order and the order of operations are ignored.


## Supported Types

### `operations.CreateWebhookFilterRequest1`

```typescript
const value: operations.CreateWebhookFilterRequest1 = {
  dollarOr: [
    {
      field: "<value>",
      operator: "equals",
      value: "<value>",
    },
  ],
};
```

### `operations.CreateWebhookFilterRequest2`

```typescript
const value: operations.CreateWebhookFilterRequest2 = {
  dollarAnd: [
    {
      field: "parent_object_id",
      operator: "equals",
      value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    },
  ],
};
```

