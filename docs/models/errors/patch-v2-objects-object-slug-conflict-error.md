# PatchV2ObjectsObjectSlugConflictError

Conflict

## Example Usage

```typescript
import { PatchV2ObjectsObjectSlugConflictError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `type`                                                                                                          | [operations.PatchV2ObjectsObjectConflictType](../../models/operations/patch-v2-objects-object-conflict-type.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `code`                                                                                                          | [operations.PatchV2ObjectsObjectConflictCode](../../models/operations/patch-v2-objects-object-conflict-code.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `message`                                                                                                       | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | Failed to update object. Please ensure api_slug is unique.                                                      |