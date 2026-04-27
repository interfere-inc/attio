# LinkedRecord

## Example Usage

```typescript
import { LinkedRecord } from "@interfere/attio/models/operations";

let value: LinkedRecord = {
  object: "people",
  recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `object`                                                                | *string*                                                                | :heavy_check_mark:                                                      | The slug or UUID of the object that the record being linked belongs to. | people                                                                  |
| `recordId`                                                              | *string*                                                                | :heavy_check_mark:                                                      | The UUID of the record being linked.                                    | 891dcbfc-9141-415d-9b2a-2238a6cc012d                                    |