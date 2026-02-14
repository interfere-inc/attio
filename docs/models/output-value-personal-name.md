# OutputValuePersonalName

## Example Usage

```typescript
import { OutputValuePersonalName } from "@interfere/attio/models";

let value: OutputValuePersonalName = {
  firstName: "Ada",
  lastName: "Lovelace",
  fullName: "Ada Lovelace",
  attributeType: "personal-name",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `firstName`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | The first name.                                                               | Ada                                                                           |
| `lastName`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | The last name.                                                                | Lovelace                                                                      |
| `fullName`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | The full name.                                                                | Ada Lovelace                                                                  |
| `attributeType`                                                               | [models.AttributeTypePersonalName](../models/attribute-type-personal-name.md) | :heavy_check_mark:                                                            | The attribute type of the value.                                              | personal-name                                                                 |