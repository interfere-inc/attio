# GetScimGroupResponse

Success

## Example Usage

```typescript
import { GetScimGroupResponse } from "@interfere/attio/models/operations";

let value: GetScimGroupResponse = {
  schemas: [
    "<value 1>",
    "<value 2>",
  ],
  id: "<id>",
  displayName: "Selina.Raynor66",
  members: [],
  meta: {
    resourceType: "<value>",
    created: "<value>",
    lastModified: "<value>",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `schemas`                                                                           | *string*[]                                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `displayName`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `members`                                                                           | [operations.GetScimGroupMember](../../models/operations/get-scim-group-member.md)[] | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `meta`                                                                              | [operations.GetScimGroupMeta](../../models/operations/get-scim-group-meta.md)       | :heavy_check_mark:                                                                  | N/A                                                                                 |