# CreateListRequest

## Example Usage

```typescript
import { CreateListRequest } from "@interfere/attio/models/operations";

let value: CreateListRequest = {
  data: {
    name: "Enterprise Sales",
    apiSlug: "enterprise_sales",
    parentObject: "people",
    workspaceAccess: "read-and-write",
    workspaceMemberAccess: [],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.CreateListData](../../models/operations/create-list-data.md) | :heavy_check_mark:                                                       | N/A                                                                      |