# GetThreadRequest

## Example Usage

```typescript
import { GetThreadRequest } from "@interfere/attio/models/operations";

let value: GetThreadRequest = {
  threadId: "a649e4d9-435c-43fb-83ba-847b4876f27a",
  limit: 250,
  cursor:
    "eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr",
  createdAfter: "2023-01-01T15:00:00.000000000Z",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `threadId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | a649e4d9-435c-43fb-83ba-847b4876f27a                                         |
| `limit`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 250                                                                          |
| `cursor`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr |
| `createdAfter`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 2023-01-01T15:00:00.000000000Z                                               |