# DefaultValueStatic

## Example Usage

```typescript
import { DefaultValueStatic } from "@interfere/attio/models";

let value: DefaultValueStatic = {
  type: "static",
  template: [
    {
      value: "Some default text",
      attributeType: "text",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | *"static"*                                                     | :heavy_check_mark:                                             | N/A                                                            | static                                                         |
| `template`                                                     | *models.OutputValue*[]                                         | :heavy_check_mark:                                             | N/A                                                            | [<br/>{<br/>"value": "Some default text",<br/>"attribute_type": "text"<br/>}<br/>] |