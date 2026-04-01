# GetListViewsResponse

Success

## Example Usage

```typescript
import { GetListViewsResponse } from "@interfere/attio/models/operations";

let value: GetListViewsResponse = {
  data: [],
  pagination: {
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [models.ListView](../../models/list-view.md)[]                                            | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `pagination`                                                                              | [operations.GetListViewsPagination](../../models/operations/get-list-views-pagination.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |