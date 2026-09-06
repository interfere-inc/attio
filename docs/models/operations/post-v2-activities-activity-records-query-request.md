# PostV2ActivitiesActivityRecordsQueryRequest

## Example Usage

```typescript
import { PostV2ActivitiesActivityRecordsQueryRequest } from "@interfere/attio/models/operations";

let value: PostV2ActivitiesActivityRecordsQueryRequest = {
  activity: "phone_calls",
  body: {
    filter: {
      "name": "Ada Lovelace",
    },
    sorts: [
      {
        direction: "asc",
        attribute: "name",
        field: "last_name",
      },
    ],
    limit: 500,
    offset: 0,
  },
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     | Example                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `activity`                                                                                                                                      | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             | phone_calls                                                                                                                                     |
| `body`                                                                                                                                          | [operations.PostV2ActivitiesActivityRecordsQueryRequestBody](../../models/operations/post-v2-activities-activity-records-query-request-body.md) | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |                                                                                                                                                 |