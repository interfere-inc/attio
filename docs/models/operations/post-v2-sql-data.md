# PostV2SqlData

## Example Usage

```typescript
import { PostV2SqlData } from "@interfere/attio/models/operations";

let value: PostV2SqlData = {
  rows: [
    {
      "name": "Fundstack",
      "record_id": "bf071e1f-6035-429d-b874-d83ea64ea13b",
      "created_at": "2023-01-01T15:00:00.000000000Z",
      "created_by": {
        "type": "workspace-member",
        "id": "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      },
      "domains": [
        "fundstack.com",
      ],
    },
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `rows`                  | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |