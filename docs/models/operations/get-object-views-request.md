# GetObjectViewsRequest

## Example Usage

```typescript
import { GetObjectViewsRequest } from "@interfere/attio/models/operations";

let value: GetObjectViewsRequest = {
  object: "people",
  cursor:
    "eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | people                                                                       |
| `showArchived`                                                               | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          | false                                                                        |
| `limit`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 500                                                                          |
| `cursor`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr |