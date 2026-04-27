# GetScimV2UsersUserIdResponse

Success

## Example Usage

```typescript
import { GetScimV2UsersUserIdResponse } from "@interfere/attio/models/operations";

let value: GetScimV2UsersUserIdResponse = {
  schemas: [
    "<value 1>",
    "<value 2>",
  ],
  id: "<id>",
  userName: "Malachi3",
  displayName: "Ashton.Ferry46",
  name: {
    formatted: "<value>",
    familyName: "<value>",
    givenName: "<value>",
  },
  emails: [],
  active: true,
  roles: [],
  meta: {
    resourceType: "<value>",
    created: "<value>",
    lastModified: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `schemas`                                                                                            | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `userName`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `displayName`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | [operations.GetScimV2UsersUserIdName](../../models/operations/get-scim-v2-users-user-id-name.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `emails`                                                                                             | [operations.GetScimV2UsersUserIdEmail](../../models/operations/get-scim-v2-users-user-id-email.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `active`                                                                                             | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `roles`                                                                                              | [operations.GetScimV2UsersUserIdRole](../../models/operations/get-scim-v2-users-user-id-role.md)[]   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `meta`                                                                                               | [operations.GetScimV2UsersUserIdMeta](../../models/operations/get-scim-v2-users-user-id-meta.md)     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |