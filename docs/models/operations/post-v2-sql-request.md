# PostV2SqlRequest

## Example Usage

```typescript
import { PostV2SqlRequest } from "@interfere/attio/models/operations";

let value: PostV2SqlRequest = {
  sql: "SELECT * FROM companies WHERE companies.name = 'Fundstack'",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `sql`                                                      | *string*                                                   | :heavy_check_mark:                                         | The SQL query to be executed.                              | SELECT * FROM companies WHERE companies.name = 'Fundstack' |