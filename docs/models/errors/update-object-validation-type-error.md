# UpdateObjectValidationTypeError

Bad Request

## Example Usage

```typescript
import { UpdateObjectValidationTypeError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *"invalid_request_error"*                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `statusCode`                                                                                       | *400*                                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `code`                                                                                             | *"validation_type"*                                                                                | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `message`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | You passed an empty payload. Please ensure you are updating at least one property in your request. |