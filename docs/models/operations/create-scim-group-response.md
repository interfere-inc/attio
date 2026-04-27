# CreateScimGroupResponse

Created

## Example Usage

```typescript
import { CreateScimGroupResponse } from "@interfere/attio/models/operations";

let value: CreateScimGroupResponse = {
  schemas: [],
  id: "<id>",
  displayName: "Kody_Kutch60",
  members: [
    {
      dollarRef: "<value>",
      value: "<value>",
    },
  ],
  meta: {
    resourceType: "<value>",
    created: "<value>",
    lastModified: "<value>",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `schemas`                                                                                 | *string*[]                                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `displayName`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `members`                                                                                 | [operations.CreateScimGroupMember](../../models/operations/create-scim-group-member.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `meta`                                                                                    | [operations.CreateScimGroupMeta](../../models/operations/create-scim-group-meta.md)       | :heavy_check_mark:                                                                        | N/A                                                                                       |