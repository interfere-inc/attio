# GetAttributeRequest

## Example Usage

```typescript
import { GetAttributeRequest } from "@interfere/attio/models/operations";

let value: GetAttributeRequest = {
  target: "lists",
  identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `target`                                                                         | [operations.GetAttributeTarget](../../models/operations/get-attribute-target.md) | :heavy_check_mark:                                                               | Whether the attribute is on an object or a list.                                 | lists                                                                            |
| `identifier`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                             |
| `attribute`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | 41252299-f8c7-4b5e-99c9-4ff8321d2f96                                             |