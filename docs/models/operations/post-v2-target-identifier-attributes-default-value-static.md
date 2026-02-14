# PostV2TargetIdentifierAttributesDefaultValueStatic

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesDefaultValueStatic } from "@interfere/attio/models/operations";

let value: PostV2TargetIdentifierAttributesDefaultValueStatic = {
  type: "static",
  template: [
    {
      value: 5,
    },
  ],
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `type`                     | *"static"*                 | :heavy_check_mark:         | N/A                        | static                     |
| `template`                 | *models.InputValueUnion*[] | :heavy_check_mark:         | N/A                        | [<br/>{<br/>"value": 5<br/>}<br/>] |