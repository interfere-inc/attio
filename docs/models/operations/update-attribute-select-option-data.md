# UpdateAttributeSelectOptionData

## Example Usage

```typescript
import { UpdateAttributeSelectOptionData } from "@interfere/attio/models/operations";

let value: UpdateAttributeSelectOptionData = {
  title: "Medium",
  isArchived: false,
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                                | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The Title of the select option                                                                                                         | Medium                                                                                                                                 |
| `isArchived`                                                                                                                           | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Whether or not to archive the select option. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving. | false                                                                                                                                  |