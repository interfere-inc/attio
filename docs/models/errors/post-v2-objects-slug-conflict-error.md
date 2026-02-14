# PostV2ObjectsSlugConflictError

Conflict

## Example Usage

```typescript
import { PostV2ObjectsSlugConflictError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `type`                                                                          | [operations.PostV2ObjectsType](../../models/operations/post-v2-objects-type.md) | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `code`                                                                          | [operations.PostV2ObjectsCode](../../models/operations/post-v2-objects-code.md) | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `message`                                                                       | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | Failed to create object. Please ensure your api_slug and names are unique.      |