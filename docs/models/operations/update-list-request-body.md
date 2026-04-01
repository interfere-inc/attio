# UpdateListRequestBody

## Example Usage

```typescript
import { UpdateListRequestBody } from "@interfere/attio/models/operations";

let value: UpdateListRequestBody = {
  data: {
    name: "Enterprise Sales",
    apiSlug: "enterprise_sales",
    workspaceAccess: "read-and-write",
    workspaceMemberAccess: [
      {
        workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        level: "read-and-write",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.UpdateListData](../../models/operations/update-list-data.md) | :heavy_check_mark:                                                       | N/A                                                                      |