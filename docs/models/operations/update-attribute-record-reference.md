# UpdateAttributeRecordReference

Configuration available for attributes of type "record-reference".

## Example Usage

```typescript
import { UpdateAttributeRecordReference } from "@interfere/attio/models/operations";

let value: UpdateAttributeRecordReference = {
  allowedObjects: [
    "people",
  ],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `allowedObjects`                                                                                                                                                         | *string*[]                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                       | A list of slugs or UUIDs to indicate which objects records are allowed to belong to. If `relationship` is also provided, this must contain only the relationship object. |