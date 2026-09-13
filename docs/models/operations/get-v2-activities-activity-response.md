# GetV2ActivitiesActivityResponse

Success

## Example Usage

```typescript
import { GetV2ActivitiesActivityResponse } from "@interfere/attio/models/operations";

let value: GetV2ActivitiesActivityResponse = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      activityId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    },
    apiSlug: "phone_calls",
    singularNoun: "Phone call",
    pluralNoun: "Phone calls",
    extends: [
      {
        schemaId: "b1d6a29e-6f6f-4a0a-9b0e-59f0a3e3f7a1",
        schemaSlug: "calls",
      },
    ],
    isSystemActivity: true,
    createdAt: "2022-11-21T13:22:49.061281000Z",
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `data`                                      | [models.Activity](../../models/activity.md) | :heavy_check_mark:                          | N/A                                         |