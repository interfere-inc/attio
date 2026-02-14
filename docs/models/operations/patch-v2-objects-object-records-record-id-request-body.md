# PatchV2ObjectsObjectRecordsRecordIdRequestBody

## Example Usage

```typescript
import { PatchV2ObjectsObjectRecordsRecordIdRequestBody } from "@interfere/attio/models/operations";

let value: PatchV2ObjectsObjectRecordsRecordIdRequestBody = {
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

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                         | [operations.PatchV2ObjectsObjectRecordsRecordIdDataRequest](../../models/operations/patch-v2-objects-object-records-record-id-data-request.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |