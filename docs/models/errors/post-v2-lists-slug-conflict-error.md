# PostV2ListsSlugConflictError

Conflict

## Example Usage

```typescript
import { PostV2ListsSlugConflictError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `type`                                                                                       | [operations.PostV2ListsConflictType](../../models/operations/post-v2-lists-conflict-type.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `code`                                                                                       | [operations.PostV2ListsConflictCode](../../models/operations/post-v2-lists-conflict-code.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `message`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | A list with api_slug "my_list" already exists.                                               |