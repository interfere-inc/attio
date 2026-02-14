# OutputValueNumber

## Example Usage

```typescript
import { OutputValueNumber } from "@interfere/attio/models";

let value: OutputValueNumber = {
  value: 42,
  attributeType: "number",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `value`                                                          | *number*                                                         | :heavy_check_mark:                                               | Numbers are persisted as 64 bit floats.                          | 42                                                               |
| `attributeType`                                                  | [models.AttributeTypeNumber](../models/attribute-type-number.md) | :heavy_check_mark:                                               | The attribute type of the value.                                 | number                                                           |