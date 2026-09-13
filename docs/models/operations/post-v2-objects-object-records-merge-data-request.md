# PostV2ObjectsObjectRecordsMergeDataRequest

## Example Usage

```typescript
import { PostV2ObjectsObjectRecordsMergeDataRequest } from "@interfere/attio/models/operations";

let value: PostV2ObjectsObjectRecordsMergeDataRequest = {
  primaryRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  secondaryRecordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `primaryRecordId`                                                                                                                              | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The ID of the record to keep values from. Where both records have a value for the same attribute, the primary record's value takes precedence. | 891dcbfc-9141-415d-9b2a-2238a6cc012d                                                                                                           |
| `secondaryRecordId`                                                                                                                            | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The ID of the record to merge into the primary record. Its values are only kept where the primary record has no value for that attribute.      | bf071e1f-6035-429d-b874-d83ea64ea13b                                                                                                           |