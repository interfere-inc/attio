# UpdateListResponse

Success

## Example Usage

```typescript
import { UpdateListResponse } from "@interfere/attio/models/operations";

let value: UpdateListResponse = {
  data: {
    name: "Hiring Engineering",
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    },
    apiSlug: "enterprise_sales",
    parentObject: [
      "people",
    ],
    workspaceAccess: "read-and-write",
    workspaceMemberAccess: [],
    createdByActor: {
      type: "workspace-member",
      id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    },
    createdAt: "2022-11-21T13:22:49.061281000Z",
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `data`                              | [models.List](../../models/list.md) | :heavy_check_mark:                  | N/A                                 |