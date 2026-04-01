# CreateObjectRequest

## Example Usage

```typescript
import { CreateObjectRequest } from "@interfere/attio/models/operations";

let value: CreateObjectRequest = {
  data: {
    apiSlug: "people",
    singularNoun: "Person",
    pluralNoun: "People",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.CreateObjectData](../../models/operations/create-object-data.md) | :heavy_check_mark:                                                           | N/A                                                                          |