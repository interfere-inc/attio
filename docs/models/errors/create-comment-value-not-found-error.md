# CreateCommentValueNotFoundError

Bad Request

## Example Usage

```typescript
import { CreateCommentValueNotFoundError } from "@interfere/attio/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `type`                                                                | *"invalid_request_error"*                                             | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `statusCode`                                                          | *400*                                                                 | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `code`                                                                | *"value_not_found"*                                                   | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `message`                                                             | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | The referenced Thread could not be found, it might have been deleted. |