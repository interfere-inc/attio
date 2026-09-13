# ActivityId

## Example Usage

```typescript
import { ActivityId } from "@interfere/attio/models";

let value: ActivityId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  activityId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `workspaceId`                                              | *string*                                                   | :heavy_check_mark:                                         | A UUID to identify the workspace this activity belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c                       |
| `activityId`                                               | *string*                                                   | :heavy_check_mark:                                         | A UUID to identify the activity.                           | 97052eb9-e65e-443f-a297-f2d9a4a7f795                       |