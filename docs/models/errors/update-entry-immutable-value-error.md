# UpdateEntryImmutableValueError

Bad Request

## Example Usage

```typescript
import { UpdateEntryImmutableValueError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *"invalid_request_error"*                                          | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `statusCode`                                                       | *400*                                                              | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `code`                                                             | *"immutable_value"*                                                | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `message`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | The parent record for a list entry cannot be updated once created. |