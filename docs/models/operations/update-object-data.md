# UpdateObjectData

## Example Usage

```typescript
import { UpdateObjectData } from "@interfere/attio/models/operations";

let value: UpdateObjectData = {
  apiSlug: "people",
  singularNoun: "Person",
  pluralNoun: "People",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `apiSlug`                                                                                                         | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | A unique, human-readable slug to access the object through URLs and API calls. Should be formatted in snake case. | people                                                                                                            |
| `singularNoun`                                                                                                    | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The singular form of the object's name.                                                                           | Person                                                                                                            |
| `pluralNoun`                                                                                                      | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The plural form of the object's name.                                                                             | People                                                                                                            |