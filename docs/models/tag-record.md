# TagRecord

## Example Usage

```typescript
import { TagRecord } from "@interfere/attio/models";

let value: TagRecord = {
  type: "record",
  object: "people",
  recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `type`                                                                              | *"record"*                                                                          | :heavy_check_mark:                                                                  | The type of entity tagged in the note. Can be either 'workspace-member' or 'record' |                                                                                     |
| `object`                                                                            | *string*                                                                            | :heavy_check_mark:                                                                  | The slug or ID of the object that the tagged record belongs to.                     | people                                                                              |
| `recordId`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | The ID of the record that is tagged in the note.                                    | 891dcbfc-9141-415d-9b2a-2238a6cc012d                                                |