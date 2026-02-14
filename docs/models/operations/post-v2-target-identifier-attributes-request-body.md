# PostV2TargetIdentifierAttributesRequestBody

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesRequestBody } from "@interfere/attio/models/operations";

let value: PostV2TargetIdentifierAttributesRequestBody = {
  data: {
    title: "Your Attribute",
    description: "Lorem ipsum",
    apiSlug: "my-attribute",
    type: "text",
    isRequired: true,
    isUnique: true,
    isMultiselect: true,
    defaultValue: {
      type: "static",
      template: [
        {
          value: 5,
        },
      ],
    },
    relationship: {
      object: "companies",
      title: "Team members",
      apiSlug: "team_members",
      isMultiselect: false,
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
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [operations.PostV2TargetIdentifierAttributesData](../../models/operations/post-v2-target-identifier-attributes-data.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |