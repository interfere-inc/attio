# QueryRecordsRequest

## Example Usage

```typescript
import { QueryRecordsRequest } from "@interfere/attio/models/operations";

let value: QueryRecordsRequest = {
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

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `object`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | people                                                                                      |
| `body`                                                                                      | [operations.QueryRecordsRequestBody](../../models/operations/query-records-request-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |