# PostV2ObjectsObjectRecordsMergeRequest

## Example Usage

```typescript
import { PostV2ObjectsObjectRecordsMergeRequest } from "@interfere/attio/models/operations";

let value: PostV2ObjectsObjectRecordsMergeRequest = {
  object: "people",
  body: {
    data: {
      primaryRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      secondaryRecordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
    },
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                                              | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   | people                                                                                                                                |
| `body`                                                                                                                                | [operations.PostV2ObjectsObjectRecordsMergeRequestBody](../../models/operations/post-v2-objects-object-records-merge-request-body.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |                                                                                                                                       |