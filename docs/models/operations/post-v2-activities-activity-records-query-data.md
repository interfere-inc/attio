# PostV2ActivitiesActivityRecordsQueryData

## Example Usage

```typescript
import { PostV2ActivitiesActivityRecordsQueryData } from "@interfere/attio/models/operations";

let value: PostV2ActivitiesActivityRecordsQueryData = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    activityId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
  },
  createdAt: "2022-11-21T13:22:49.061281000Z",
  values: {
    "key": [],
    "key1": [],
    "key2": [],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | [operations.PostV2ActivitiesActivityRecordsQueryId](../../models/operations/post-v2-activities-activity-records-query-id.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `createdAt`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | When this activity record was created.                                                                                       | 2022-11-21T13:22:49.061281000Z                                                                                               |
| `values`                                                                                                                     | Record<string, *operations.PostV2ActivitiesActivityRecordsQueryValueUnion*[]>                                                | :heavy_check_mark:                                                                                                           | A record type with an attribute `api_slug` as the key, and an array of value objects as the values.                          |                                                                                                                              |