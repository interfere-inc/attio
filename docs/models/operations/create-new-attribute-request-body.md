# CreateNewAttributeRequestBody

## Example Usage

```typescript
import { CreateNewAttributeRequestBody } from "@interfere/attio/models/operations";

let value: CreateNewAttributeRequestBody = {
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

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [operations.CreateNewAttributeData](../../models/operations/create-new-attribute-data.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |