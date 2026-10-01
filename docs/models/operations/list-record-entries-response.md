# ListRecordEntriesResponse

Success

## Example Usage

```typescript
import { ListRecordEntriesResponse } from "@interfere/attio/models/operations";

let value: ListRecordEntriesResponse = {
  data: [
    {
      listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
      listApiSlug: "enterprise_sales",
      entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
      createdAt: "2022-11-21T13:22:49.061281000Z",
    },
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [operations.ListRecordEntriesData](../../models/operations/list-record-entries-data.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |