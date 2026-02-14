# PostV2ObjectsObjectRecordsQueryRequest

## Example Usage

```typescript
import { PostV2ObjectsObjectRecordsQueryRequest } from "@interfere/attio/models/operations";

let value: PostV2ObjectsObjectRecordsQueryRequest = {
  object: "people",
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

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                                              | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   | people                                                                                                                                |
| `body`                                                                                                                                | [operations.PostV2ObjectsObjectRecordsQueryRequestBody](../../models/operations/post-v2-objects-object-records-query-request-body.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |