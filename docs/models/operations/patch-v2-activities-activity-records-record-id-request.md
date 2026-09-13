# PatchV2ActivitiesActivityRecordsRecordIdRequest

## Example Usage

```typescript
import { PatchV2ActivitiesActivityRecordsRecordIdRequest } from "@interfere/attio/models/operations";

let value: PatchV2ActivitiesActivityRecordsRecordIdRequest = {
  activity: "phone_calls",
  recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
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

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              | Example                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `activity`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      | phone_calls                                                                                                                                              |
| `recordId`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      | 5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26                                                                                                                     |
| `body`                                                                                                                                                   | [operations.PatchV2ActivitiesActivityRecordsRecordIdRequestBody](../../models/operations/patch-v2-activities-activity-records-record-id-request-body.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |                                                                                                                                                          |