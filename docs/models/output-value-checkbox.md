# OutputValueCheckbox

## Example Usage

```typescript
import { OutputValueCheckbox } from "@interfere/attio/models";

let value: OutputValueCheckbox = {
  value: true,
  attributeType: "checkbox",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. | true                                                                                                                   |
| `attributeType`                                                                                                        | *"checkbox"*                                                                                                           | :heavy_check_mark:                                                                                                     | The attribute type of the value.                                                                                       | checkbox                                                                                                               |