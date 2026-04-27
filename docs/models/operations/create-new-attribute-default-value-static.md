# CreateNewAttributeDefaultValueStatic

## Example Usage

```typescript
import { CreateNewAttributeDefaultValueStatic } from "@interfere/attio/models/operations";

let value: CreateNewAttributeDefaultValueStatic = {
  type: "static",
  template: [
    {
      value: 5,
    },
  ],
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `type`                | *"static"*            | :heavy_check_mark:    | N/A                   | static                |
| `template`            | *models.InputValue*[] | :heavy_check_mark:    | N/A                   | [<br/>{<br/>"value": 5<br/>}<br/>] |