# UpdateScimGroupResponse

Success

## Example Usage

```typescript
import { UpdateScimGroupResponse } from "@interfere/attio/models/operations";

let value: UpdateScimGroupResponse = {
  schemas: [
    "<value 1>",
  ],
  id: "<id>",
  displayName: "Luisa66",
  members: [],
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
| `members`                                                                                 | [operations.UpdateScimGroupMember](../../models/operations/update-scim-group-member.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `meta`                                                                                    | [operations.UpdateScimGroupMeta](../../models/operations/update-scim-group-meta.md)       | :heavy_check_mark:                                                                        | N/A                                                                                       |