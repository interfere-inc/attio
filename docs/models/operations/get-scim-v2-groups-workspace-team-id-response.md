# GetScimV2GroupsWorkspaceTeamIdResponse

Success

## Example Usage

```typescript
import { GetScimV2GroupsWorkspaceTeamIdResponse } from "@interfere/attio/models/operations";

let value: GetScimV2GroupsWorkspaceTeamIdResponse = {
  schemas: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  id: "<id>",
  displayName: "Eleazar_Batz15",
  members: [],
  meta: {
    resourceType: "<value>",
    created: "<value>",
    lastModified: "<value>",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `schemas`                                                                                                                   | *string*[]                                                                                                                  | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `displayName`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `members`                                                                                                                   | [operations.GetScimV2GroupsWorkspaceTeamIdMember](../../models/operations/get-scim-v2-groups-workspace-team-id-member.md)[] | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `meta`                                                                                                                      | [operations.GetScimV2GroupsWorkspaceTeamIdMeta](../../models/operations/get-scim-v2-groups-workspace-team-id-meta.md)       | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |