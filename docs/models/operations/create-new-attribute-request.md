# CreateNewAttributeRequest

## Example Usage

```typescript
import { CreateNewAttributeRequest } from "@interfere/attio/models/operations";

let value: CreateNewAttributeRequest = {
  target: "lists",
  identifier: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  body: {
    data: {
      type: "text",
      title: "Your Attribute",
      description: "Lorem ipsum",
      apiSlug: "my_attribute",
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
        title: "Team members",
        object: "companies",
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
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `target`                                                                                                 | [operations.CreateNewAttributeTarget](../../models/operations/create-new-attribute-target.md)            | :heavy_check_mark:                                                                                       | Whether the attribute is to be created on an object or a list.                                           | lists                                                                                                    |
| `identifier`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 97052eb9-e65e-443f-a297-f2d9a4a7f795                                                                     |
| `body`                                                                                                   | [operations.CreateNewAttributeRequestBody](../../models/operations/create-new-attribute-request-body.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |