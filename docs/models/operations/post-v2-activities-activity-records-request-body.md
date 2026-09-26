# PostV2ActivitiesActivityRecordsRequestBody

## Example Usage

```typescript
import { PostV2ActivitiesActivityRecordsRequestBody } from "@interfere/attio/models/operations";

let value: PostV2ActivitiesActivityRecordsRequestBody = {
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
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                               | [operations.PostV2ActivitiesActivityRecordsDataRequest](../../models/operations/post-v2-activities-activity-records-data-request.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |