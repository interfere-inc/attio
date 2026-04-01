# QueryEntriesRequest

## Example Usage

```typescript
import { QueryEntriesRequest } from "@interfere/attio/models/operations";

let value: QueryEntriesRequest = {
  list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
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
| `list`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                        |
| `body`                                                                                      | [operations.QueryEntriesRequestBody](../../models/operations/query-entries-request-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |