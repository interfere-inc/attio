# PatchV2ObjectsObjectRequest

## Example Usage

```typescript
import { PatchV2ObjectsObjectRequest } from "@interfere/attio/models/operations";

let value: PatchV2ObjectsObjectRequest = {
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

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                      | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           | people                                                                                                        |
| `body`                                                                                                        | [operations.PatchV2ObjectsObjectRequestBody](../../models/operations/patch-v2-objects-object-request-body.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |