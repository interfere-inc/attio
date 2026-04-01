# UpdateAttributeSelectOptionRequest

## Example Usage

```typescript
import { UpdateAttributeSelectOptionRequest } from "@interfere/attio/models/operations";

let value: UpdateAttributeSelectOptionRequest = {
  target: "lists",
  identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  option: "Medium",
  body: {
    data: {
      title: "Medium",
      isArchived: false,
    },
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `target`                                                                                                                    | [operations.UpdateAttributeSelectOptionTarget](../../models/operations/update-attribute-select-option-target.md)            | :heavy_check_mark:                                                                                                          | Whether the attribute is on an object or a list.                                                                            | lists                                                                                                                       |
| `identifier`                                                                                                                | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                                                        |
| `attribute`                                                                                                                 | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         | 41252299-f8c7-4b5e-99c9-4ff8321d2f96                                                                                        |
| `option`                                                                                                                    | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         | Medium                                                                                                                      |
| `body`                                                                                                                      | [operations.UpdateAttributeSelectOptionRequestBody](../../models/operations/update-attribute-select-option-request-body.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |