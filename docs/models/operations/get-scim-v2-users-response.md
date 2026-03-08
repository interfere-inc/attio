# GetScimV2UsersResponse

Success

## Example Usage

```typescript
import { GetScimV2UsersResponse } from "@interfere/attio/models/operations";

let value: GetScimV2UsersResponse = {
  schemas: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  totalResults: 3901.73,
  startIndex: 3747.4,
  itemsPerPage: 2786.68,
  resources: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `schemas`          | *string*[]         | :heavy_check_mark: | N/A                |
| `totalResults`     | *number*           | :heavy_check_mark: | N/A                |
| `startIndex`       | *number*           | :heavy_check_mark: | N/A                |
| `itemsPerPage`     | *number*           | :heavy_check_mark: | N/A                |
| `resources`        | *any*[]            | :heavy_check_mark: | N/A                |