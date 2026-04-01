# QueryRecordsData

## Example Usage

```typescript
import { QueryRecordsData } from "@interfere/attio/models/operations";

let value: QueryRecordsData = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  },
  createdAt: "2022-11-21T13:22:49.061281000Z",
  webUrl:
    "https://app.attio.com/salarya/person/bf071e1f-6035-429d-b874-d83ea64ea13b",
  values: {},
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | [operations.QueryRecordsId](../../models/operations/query-records-id.md)                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `createdAt`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | When this record was created.                                                                       | 2022-11-21T13:22:49.061281000Z                                                                      |
| `webUrl`                                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | A URL that links directly to the record page in the Attio web application.                          | https://app.attio.com/salarya/person/bf071e1f-6035-429d-b874-d83ea64ea13b                           |
| `values`                                                                                            | Record<string, *operations.QueryRecordsValueUnion*[]>                                               | :heavy_check_mark:                                                                                  | A record type with an attribute `api_slug` as the key, and an array of value objects as the values. |                                                                                                     |