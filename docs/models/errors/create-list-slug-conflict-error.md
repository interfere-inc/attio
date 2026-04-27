# CreateListSlugConflictError

Conflict

## Example Usage

```typescript
import { CreateListSlugConflictError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `type`                                         | *"invalid_request_error"*                      | :heavy_check_mark:                             | N/A                                            |                                                |
| `statusCode`                                   | *409*                                          | :heavy_check_mark:                             | N/A                                            |                                                |
| `code`                                         | *"slug_conflict"*                              | :heavy_check_mark:                             | N/A                                            |                                                |
| `message`                                      | *string*                                       | :heavy_check_mark:                             | N/A                                            | A list with api_slug "my_list" already exists. |