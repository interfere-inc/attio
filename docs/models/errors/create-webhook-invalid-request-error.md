# CreateWebhookInvalidRequestError

Conflict

## Example Usage

```typescript
import { CreateWebhookInvalidRequestError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *"invalid_request_error"*                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `statusCode`                                                                           | *409*                                                                                  | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `code`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `message`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | Each subscription must have a unique combination of target URL, event type and filter. |