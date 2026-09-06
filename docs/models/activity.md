# Activity

## Example Usage

```typescript
import { Activity } from "@interfere/attio/models";

let value: Activity = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    activityId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  },
  apiSlug: "phone_calls",
  singularNoun: "Phone call",
  pluralNoun: "Phone calls",
  extends: [],
  isSystemActivity: true,
  createdAt: "2022-11-21T13:22:49.061281000Z",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | [models.ActivityId](../models/activity-id.md)                                                             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `apiSlug`                                                                                                 | *string*                                                                                                  | :heavy_check_mark:                                                                                        | A unique, human-readable slug to access the activity through URLs and API calls. Formatted in snake case. | phone_calls                                                                                               |
| `singularNoun`                                                                                            | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The singular form of the activity's name.                                                                 | Phone call                                                                                                |
| `pluralNoun`                                                                                              | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The plural form of the activity's name.                                                                   | Phone calls                                                                                               |
| `extends`                                                                                                 | [models.Extend](../models/extend.md)[]                                                                    | :heavy_check_mark:                                                                                        | The schemas this activity directly extends, which supply its inherited attributes.                        |                                                                                                           |
| `isSystemActivity`                                                                                        | *boolean*                                                                                                 | :heavy_check_mark:                                                                                        | `true` when Attio defines the activity, `false` when it's a custom activity.                              | true                                                                                                      |
| `createdAt`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | When the activity was created.                                                                            | 2022-11-21T13:22:49.061281000Z                                                                            |