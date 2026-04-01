# ListAttributeOptionsRequest

## Example Usage

```typescript
import { ListAttributeOptionsRequest } from "@interfere/attio/models/operations";

let value: ListAttributeOptionsRequest = {
  target: "lists",
  identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  showArchived: true,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `target`                                                                                          | [operations.ListAttributeOptionsTarget](../../models/operations/list-attribute-options-target.md) | :heavy_check_mark:                                                                                | Whether the attribute is on an object or a list.                                                  | lists                                                                                             |
| `identifier`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                              |
| `attribute`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               | 41252299-f8c7-4b5e-99c9-4ff8321d2f96                                                              |
| `showArchived`                                                                                    | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               | true                                                                                              |