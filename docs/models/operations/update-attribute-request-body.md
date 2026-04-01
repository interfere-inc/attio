# UpdateAttributeRequestBody

## Example Usage

```typescript
import { UpdateAttributeRequestBody } from "@interfere/attio/models/operations";

let value: UpdateAttributeRequestBody = {
  data: {
    title: "Your Attribute",
    description: "Lorem ipsum",
    apiSlug: "my-attribute",
    isRequired: true,
    isUnique: true,
    defaultValue: {
      type: "static",
      template: [
        {
          value: 5,
        },
      ],
    },
    config: {
      currency: {
        defaultCurrencyCode: "USD",
        displayType: "symbol",
      },
      recordReference: {
        allowedObjects: [
          "people",
        ],
      },
    },
    isArchived: false,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [operations.UpdateAttributeData](../../models/operations/update-attribute-data.md) | :heavy_check_mark:                                                                 | N/A                                                                                |