# PatchV2ListsListRequest

## Example Usage

```typescript
import { PatchV2ListsListRequest } from "@interfere/attio/models/operations";

let value: PatchV2ListsListRequest = {
  list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  body: {
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
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `list`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                                  |
| `body`                                                                                                | [operations.PatchV2ListsListRequestBody](../../models/operations/patch-v2-lists-list-request-body.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |