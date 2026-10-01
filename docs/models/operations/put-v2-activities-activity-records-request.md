# PutV2ActivitiesActivityRecordsRequest

## Example Usage

```typescript
import { PutV2ActivitiesActivityRecordsRequest } from "@interfere/attio/models/operations";

let value: PutV2ActivitiesActivityRecordsRequest = {
  activity: "phone_calls",
  matchingAttribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  body: {
    data: {
      values: {
        "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
          "Text value",
        ],
        "multiselect_attribute": [
          "Select option 1",
          "Select option 2",
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `activity`                                                                                                                         | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | phone_calls                                                                                                                        |
| `matchingAttribute`                                                                                                                | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | 41252299-f8c7-4b5e-99c9-4ff8321d2f96                                                                                               |
| `body`                                                                                                                             | [operations.PutV2ActivitiesActivityRecordsRequestBody](../../models/operations/put-v2-activities-activity-records-request-body.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |