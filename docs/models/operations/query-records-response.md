# QueryRecordsResponse

Success

## Example Usage

```typescript
import { QueryRecordsResponse } from "@interfere/attio/models/operations";

let value: QueryRecordsResponse = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
        recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
      },
      createdAt: "2022-11-21T13:22:49.061281000Z",
      webUrl:
        "https://app.attio.com/salarya/person/bf071e1f-6035-429d-b874-d83ea64ea13b",
      values: {
        "key": [],
        "key1": [],
        "key2": [],
      },
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.QueryRecordsData](../../models/operations/query-records-data.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |