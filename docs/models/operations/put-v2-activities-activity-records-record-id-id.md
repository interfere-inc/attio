# PutV2ActivitiesActivityRecordsRecordIdId

## Example Usage

```typescript
import { PutV2ActivitiesActivityRecordsRecordIdId } from "@interfere/attio/models/operations";

let value: PutV2ActivitiesActivityRecordsRecordIdId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  activityId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `workspaceId`                                                     | *string*                                                          | :heavy_check_mark:                                                | A UUID identifying the workspace this activity record belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c                              |
| `activityId`                                                      | *string*                                                          | :heavy_check_mark:                                                | A UUID identifying the activity this record belongs to.           | 97052eb9-e65e-443f-a297-f2d9a4a7f795                              |
| `recordId`                                                        | *string*                                                          | :heavy_check_mark:                                                | A UUID identifying this activity record.                          | 5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26                              |