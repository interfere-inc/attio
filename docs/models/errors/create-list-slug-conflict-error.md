# CreateListSlugConflictError

Conflict

## Example Usage

```typescript
import { CreateListSlugConflictError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `statusCode`                                                                                           | [operations.CreateListConflictStatusCode](../../models/operations/create-list-conflict-status-code.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `type`                                                                                                 | [operations.CreateListConflictType](../../models/operations/create-list-conflict-type.md)              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `code`                                                                                                 | [operations.CreateListConflictCode](../../models/operations/create-list-conflict-code.md)              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `message`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | A list with api_slug "my_list" already exists.                                                         |