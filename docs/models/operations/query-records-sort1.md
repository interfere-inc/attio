# QueryRecordsSort1

Sort by attribute

## Example Usage

```typescript
import { QueryRecordsSort1 } from "@interfere/attio/models/operations";

let value: QueryRecordsSort1 = {
  direction: "desc",
  attribute: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `direction`                                                                              | [operations.QueryRecordsDirection1](../../models/operations/query-records-direction1.md) | :heavy_check_mark:                                                                       | The direction to sort the results by.                                                    |
| `attribute`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | A slug or ID to identify the attribute to sort by.                                       |
| `field`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | Which field on the value to sort by e.g. "last_name" on a name value.                    |