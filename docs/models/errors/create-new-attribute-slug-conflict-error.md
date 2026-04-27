# CreateNewAttributeSlugConflictError

Conflict

## Example Usage

```typescript
import { CreateNewAttributeSlugConflictError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *"invalid_request_error"*                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `statusCode`                                                                                         | *409*                                                                                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `code`                                                                                               | *"slug_conflict"*                                                                                    | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | An attribute with the same API slug already exists on this list. Please choose a different API slug. |