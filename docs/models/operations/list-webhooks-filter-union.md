# ListWebhooksFilterUnion

Filters to determine whether the webhook event should be sent. If null, the filter always passes.


## Supported Types

### `operations.ListWebhooksFilter1`

```typescript
const value: operations.ListWebhooksFilter1 = {
  dollarOr: [
    {
      field: "<value>",
      operator: "equals",
      value: "<value>",
    },
  ],
};
```

### `operations.ListWebhooksFilter2`

```typescript
const value: operations.ListWebhooksFilter2 = {
  dollarAnd: [
    {
      field: "parent_object_id",
      operator: "equals",
      value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    },
  ],
};
```

