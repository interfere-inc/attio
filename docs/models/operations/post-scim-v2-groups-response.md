# PostScimV2GroupsResponse

Created

## Example Usage

```typescript
import { PostScimV2GroupsResponse } from "@interfere/attio/models/operations";

let value: PostScimV2GroupsResponse = {
  schemas: [
    "<value 1>",
    "<value 2>",
  ],
  id: "<id>",
  displayName: "Zelda_Schmitt88",
  members: [
    {
      value: "<value>",
      dollarRef: "<value>",
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `schemas`                                                                              | *string*[]                                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `displayName`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `members`                                                                              | [operations.Member](../../models/operations/member.md)[]                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `meta`                                                                                 | [operations.PostScimV2GroupsMeta](../../models/operations/post-scim-v2-groups-meta.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |