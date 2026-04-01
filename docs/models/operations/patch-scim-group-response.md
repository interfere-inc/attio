# PatchScimGroupResponse

Success

## Example Usage

```typescript
import { PatchScimGroupResponse } from "@interfere/attio/models/operations";

let value: PatchScimGroupResponse = {
  schemas: [],
  id: "<id>",
  displayName: "Alize_Bogan75",
  members: [],
  meta: {
    resourceType: "<value>",
    created: "<value>",
    lastModified: "<value>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `schemas`                                                                               | *string*[]                                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `displayName`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `members`                                                                               | [operations.PatchScimGroupMember](../../models/operations/patch-scim-group-member.md)[] | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `meta`                                                                                  | [operations.PatchScimGroupMeta](../../models/operations/patch-scim-group-meta.md)       | :heavy_check_mark:                                                                      | N/A                                                                                     |