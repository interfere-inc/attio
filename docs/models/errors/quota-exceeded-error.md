# QuotaExceededError

Bad Request

## Example Usage

```typescript
import { QuotaExceededError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `type`                                                                                  | *"invalid_request_error"*                                                               | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `statusCode`                                                                            | *400*                                                                                   | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `code`                                                                                  | *"quota_exceeded"*                                                                      | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `message`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     | You have met your plan's object limit. Please upgrade your plan to create more objects. |