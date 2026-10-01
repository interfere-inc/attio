# CreateRecordConflictInvalidRequestError

Conflict

## Example Usage

```typescript
import { CreateRecordConflictInvalidRequestError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *"invalid_request_error"*                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `statusCode`                                                                                       | *409*                                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `code`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `message`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | The record was modified by another request while this write was being validated. Please try again. |