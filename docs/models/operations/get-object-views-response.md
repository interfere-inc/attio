# GetObjectViewsResponse

Success

## Example Usage

```typescript
import { GetObjectViewsResponse } from "@interfere/attio/models/operations";

let value: GetObjectViewsResponse = {
  data: [
    {
      title: "All people",
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
        viewId: "cf7aaeb5-7507-4a84-9c26-9d36e34d7b70",
      },
      createdAt: "2022-11-21T13:22:49.061281000Z",
    },
  ],
  pagination: {
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [models.ObjectView](../../models/object-view.md)[]                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pagination`                                                                                  | [operations.GetObjectViewsPagination](../../models/operations/get-object-views-pagination.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |