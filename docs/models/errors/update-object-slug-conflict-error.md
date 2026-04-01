# UpdateObjectSlugConflictError

Conflict

## Example Usage

```typescript
import { UpdateObjectSlugConflictError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                               | [operations.UpdateObjectConflictStatusCode](../../models/operations/update-object-conflict-status-code.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `type`                                                                                                     | [operations.UpdateObjectConflictType](../../models/operations/update-object-conflict-type.md)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `code`                                                                                                     | [operations.UpdateObjectConflictCode](../../models/operations/update-object-conflict-code.md)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | Failed to update object. Please ensure api_slug is unique.                                                 |