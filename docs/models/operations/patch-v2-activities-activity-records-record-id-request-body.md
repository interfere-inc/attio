# PatchV2ActivitiesActivityRecordsRecordIdRequestBody

## Example Usage

```typescript
import { PatchV2ActivitiesActivityRecordsRecordIdRequestBody } from "@interfere/attio/models/operations";

let value: PatchV2ActivitiesActivityRecordsRecordIdRequestBody = {
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

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                   | [operations.PatchV2ActivitiesActivityRecordsRecordIdDataRequest](../../models/operations/patch-v2-activities-activity-records-record-id-data-request.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |