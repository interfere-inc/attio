# PatchV2ListsListRequestBody

## Example Usage

```typescript
import { PatchV2ListsListRequestBody } from "@interfere/attio/models/operations";

let value: PatchV2ListsListRequestBody = {
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [operations.PatchV2ListsListData](../../models/operations/patch-v2-lists-list-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |