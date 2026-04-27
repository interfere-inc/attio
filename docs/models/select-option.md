# SelectOption

## Example Usage

```typescript
import { SelectOption } from "@interfere/attio/models";

let value: SelectOption = {
  title: "Medium",
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    optionId: "08c2c59a-c18e-40c6-8dc4-95415313b2ea",
  },
  isArchived: false,
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The title of the select option                                                                                                         | Medium                                                                                                                                 |
| `id`                                                                                                                                   | [models.SelectOptionId](../models/select-option-id.md)                                                                                 | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `isArchived`                                                                                                                           | *boolean*                                                                                                                              | :heavy_check_mark:                                                                                                                     | Whether or not to archive the select option. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving. | false                                                                                                                                  |