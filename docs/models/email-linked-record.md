# EmailLinkedRecord

## Example Usage

```typescript
import { EmailLinkedRecord } from "@interfere/attio/models";

let value: EmailLinkedRecord = {
  objectSlug: "people",
  objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `objectSlug`                                         | *string*                                             | :heavy_check_mark:                                   | The slug of the object the linked record belongs to. | people                                               |
| `objectId`                                           | *string*                                             | :heavy_check_mark:                                   | The ID of the object the linked record belongs to.   | 97052eb9-e65e-443f-a297-f2d9a4a7f795                 |
| `recordId`                                           | *string*                                             | :heavy_check_mark:                                   | The ID of the linked record.                         | 891dcbfc-9141-415d-9b2a-2238a6cc012d                 |