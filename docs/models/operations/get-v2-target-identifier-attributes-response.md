# GetV2TargetIdentifierAttributesResponse

Success

## Example Usage

```typescript
import { GetV2TargetIdentifierAttributesResponse } from "@interfere/attio/models/operations";

let value: GetV2TargetIdentifierAttributesResponse = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
        attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
      },
      title: "Company",
      description: "A company attribute",
      apiSlug: "company",
      type: "record-reference",
      isSystemAttribute: false,
      isWritable: true,
      isRequired: false,
      isUnique: false,
      isMultiselect: false,
      isDefaultValueEnabled: false,
      isArchived: false,
      defaultValue: null,
      relationship: {
        id: {
          workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
          objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
          attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
        },
        objectSlug: "companies",
        title: "Team members",
        apiSlug: "team_members",
        isMultiselect: true,
      },
      createdAt: "2021-11-21T13:22:49.061Z",
      config: {
        currency: {
          defaultCurrencyCode: null,
          displayType: null,
        },
        recordReference: {
          allowedObjectIds: [
            "companies",
          ],
        },
      },
    },
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `data`                                          | [models.Attribute](../../models/attribute.md)[] | :heavy_check_mark:                              | N/A                                             |