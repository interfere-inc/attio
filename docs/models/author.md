# Author

Who wrote this comment. Note that the API provides the ability for API tokens to write comments on behalf of other actors.

## Example Usage

```typescript
import { Author } from "@interfere/attio/models";

let value: Author = {
  type: "workspace-member",
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `type`                                                                        | [models.AuthorType](../models/author-type.md)                                 | :heavy_minus_sign:                                                            | The type of actor. [Read more information on actor types here](/docs/actors). |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | An ID to identify the actor.                                                  |