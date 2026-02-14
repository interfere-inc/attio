# OutputValueRating

## Example Usage

```typescript
import { OutputValueRating } from "@interfere/attio/models";

let value: OutputValueRating = {
  value: 3,
  attributeType: "rating",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `value`                                                          | *number*                                                         | :heavy_check_mark:                                               | A number between 0 and 5 (inclusive) to represent a star rating. | 3                                                                |
| `attributeType`                                                  | [models.AttributeTypeRating](../models/attribute-type-rating.md) | :heavy_check_mark:                                               | The attribute type of the value.                                 | rating                                                           |