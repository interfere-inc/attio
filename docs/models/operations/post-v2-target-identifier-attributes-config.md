# PostV2TargetIdentifierAttributesConfig

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesConfig } from "@interfere/attio/models/operations";

let value: PostV2TargetIdentifierAttributesConfig = {
  currency: {
    defaultCurrencyCode: "USD",
    displayType: "symbol",
  },
  recordReference: {
    allowedObjects: [
      "people",
    ],
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                                     | [operations.PostV2TargetIdentifierAttributesCurrency](../../models/operations/post-v2-target-identifier-attributes-currency.md)                | :heavy_minus_sign:                                                                                                                             | Configuration available for attributes of type "currency".                                                                                     |
| `recordReference`                                                                                                                              | [operations.PostV2TargetIdentifierAttributesRecordReference](../../models/operations/post-v2-target-identifier-attributes-record-reference.md) | :heavy_minus_sign:                                                                                                                             | Configuration available for attributes of type "record-reference".                                                                             |