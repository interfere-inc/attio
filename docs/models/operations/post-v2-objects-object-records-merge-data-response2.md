# PostV2ObjectsObjectRecordsMergeDataResponse2

## Example Usage

```typescript
import { PostV2ObjectsObjectRecordsMergeDataResponse2 } from "@interfere/attio/models/operations";

let value: PostV2ObjectsObjectRecordsMergeDataResponse2 = {
  newRecordId: "f528bd86-8142-4359-9a8c-b651d50a27b1",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `newRecordId`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the merged record. This is a new ID, which will usually match neither of the records supplied in the request. | f528bd86-8142-4359-9a8c-b651d50a27b1                                                                                    |