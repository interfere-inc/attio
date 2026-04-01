# CreateObjectSlugConflictError

Conflict

## Example Usage

```typescript
import { CreateObjectSlugConflictError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `statusCode`                                                                              | [operations.CreateObjectStatusCode](../../models/operations/create-object-status-code.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `type`                                                                                    | [operations.CreateObjectType](../../models/operations/create-object-type.md)              | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `code`                                                                                    | [operations.CreateObjectCode](../../models/operations/create-object-code.md)              | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `message`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | Failed to create object. Please ensure your api_slug and names are unique.                |