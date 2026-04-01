# UpdateObjectRequest

## Example Usage

```typescript
import { UpdateObjectRequest } from "@interfere/attio/models/operations";

let value: UpdateObjectRequest = {
  object: "people",
  body: {
    data: {
      apiSlug: "people",
      singularNoun: "Person",
      pluralNoun: "People",
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `object`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | people                                                                                      |
| `body`                                                                                      | [operations.UpdateObjectRequestBody](../../models/operations/update-object-request-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |