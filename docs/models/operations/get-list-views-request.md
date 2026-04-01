# GetListViewsRequest

## Example Usage

```typescript
import { GetListViewsRequest } from "@interfere/attio/models/operations";

let value: GetListViewsRequest = {
  list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  cursor:
    "eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `list`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                         |
| `showArchived`                                                               | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          | false                                                                        |
| `limit`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 500                                                                          |
| `cursor`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr |