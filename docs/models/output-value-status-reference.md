# OutputValueStatusReference

## Example Usage

```typescript
import { OutputValueStatusReference } from "@interfere/attio/models";

let value: OutputValueStatusReference = {
  status: "11f07f01-c10f-4e05-a522-33e050bc52ee",
  attributeType: "status",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `status`                                  | *string*                                  | :heavy_check_mark:                        | The UUID identifying the selected status. | 11f07f01-c10f-4e05-a522-33e050bc52ee      |
| `attributeType`                           | *"status"*                                | :heavy_check_mark:                        | The attribute type of the value.          | status                                    |