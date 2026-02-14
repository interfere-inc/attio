# OutputValueText

## Example Usage

```typescript
import { OutputValueText } from "@interfere/attio/models";

let value: OutputValueText = {
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  attributeType: "text",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                     | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | A raw text field. Values are limited to 10MB.                                                                               | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
| `attributeType`                                                                                                             | [models.AttributeTypeText](../models/attribute-type-text.md)                                                                | :heavy_check_mark:                                                                                                          | The attribute type of the value.                                                                                            | text                                                                                                                        |