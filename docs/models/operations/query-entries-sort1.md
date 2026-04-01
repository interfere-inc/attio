# QueryEntriesSort1

Sort by attribute

## Example Usage

```typescript
import { QueryEntriesSort1 } from "@interfere/attio/models/operations";

let value: QueryEntriesSort1 = {
  direction: "asc",
  attribute: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `direction`                                                                              | [operations.QueryEntriesDirection1](../../models/operations/query-entries-direction1.md) | :heavy_check_mark:                                                                       | The direction to sort the results by.                                                    |
| `attribute`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | A slug or ID to identify the attribute to sort by.                                       |
| `field`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | Which field on the value to sort by e.g. "last_name" on a name value.                    |