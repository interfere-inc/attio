# PostV2ActivitiesActivityRecordsRequest

## Example Usage

```typescript
import { PostV2ActivitiesActivityRecordsRequest } from "@interfere/attio/models/operations";

let value: PostV2ActivitiesActivityRecordsRequest = {
  activity: "phone_calls",
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `activity`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  | phone_calls                                                                                                                          |
| `body`                                                                                                                               | [operations.PostV2ActivitiesActivityRecordsRequestBody](../../models/operations/post-v2-activities-activity-records-request-body.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |