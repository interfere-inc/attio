# GetV2ActivitiesResponse

Success

## Example Usage

```typescript
import { GetV2ActivitiesResponse } from "@interfere/attio/models/operations";

let value: GetV2ActivitiesResponse = {
  data: [],
  pagination: {
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [models.Activity](../../models/activity.md)[]                                                   | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `pagination`                                                                                    | [operations.GetV2ActivitiesPagination](../../models/operations/get-v2-activities-pagination.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |