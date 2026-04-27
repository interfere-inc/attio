# OutputValueSelectReference

## Example Usage

```typescript
import { OutputValueSelectReference } from "@interfere/attio/models";

let value: OutputValueSelectReference = {
  option: "08c2c59a-c18e-40c6-8dc4-95415313b2ea",
  attributeType: "select",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `option`                                         | *string*                                         | :heavy_check_mark:                               | The UUID identifying the selected select option. | 08c2c59a-c18e-40c6-8dc4-95415313b2ea             |
| `attributeType`                                  | *"select"*                                       | :heavy_check_mark:                               | The attribute type of the value.                 | select                                           |