# PutV2ActivitiesActivityRecordsRecordIdDataResponse

## Example Usage

```typescript
import { PutV2ActivitiesActivityRecordsRecordIdDataResponse } from "@interfere/attio/models/operations";

let value: PutV2ActivitiesActivityRecordsRecordIdDataResponse = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    activityId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
  },
  createdAt: "2022-11-21T13:22:49.061281000Z",
  values: {
    "key": [],
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                              | [operations.PutV2ActivitiesActivityRecordsRecordIdId](../../models/operations/put-v2-activities-activity-records-record-id-id.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |                                                                                                                                   |
| `createdAt`                                                                                                                       | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | When this activity record was created.                                                                                            | 2022-11-21T13:22:49.061281000Z                                                                                                    |
| `values`                                                                                                                          | Record<string, *operations.PutV2ActivitiesActivityRecordsRecordIdValueUnion*[]>                                                   | :heavy_check_mark:                                                                                                                | A record type with an attribute `api_slug` as the key, and an array of value objects as the values.                               |                                                                                                                                   |