# MeetingLinkedRecord

## Example Usage

```typescript
import { MeetingLinkedRecord } from "@interfere/attio/models";

let value: MeetingLinkedRecord = {
  objectSlug: "people",
  objectId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `objectSlug`                                                 | *string*                                                     | :heavy_check_mark:                                           | The slug of the object the meeting linked record belongs to. | people                                                       |
| `objectId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The ID of the object the meeting linked record belongs to.   | 891dcbfc-9141-415d-9b2a-2238a6cc012d                         |
| `recordId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The ID of the meeting linked record.                         | 891dcbfc-9141-415d-9b2a-2238a6cc012d                         |