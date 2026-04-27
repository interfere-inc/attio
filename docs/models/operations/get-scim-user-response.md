# GetScimUserResponse

Success

## Example Usage

```typescript
import { GetScimUserResponse } from "@interfere/attio/models/operations";

let value: GetScimUserResponse = {
  schemas: [
    "<value 1>",
  ],
  id: "<id>",
  userName: "Berta6",
  displayName: "Lilla61",
  name: {
    formatted: "<value>",
    familyName: "<value>",
    givenName: "<value>",
  },
  emails: [
    {
      value: "<value>",
      primary: false,
    },
  ],
  active: false,
  roles: [
    {
      value: "<value>",
      primary: true,
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

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `schemas`                                                                       | *string*[]                                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `userName`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `displayName`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `name`                                                                          | [operations.GetScimUserName](../../models/operations/get-scim-user-name.md)     | :heavy_check_mark:                                                              | N/A                                                                             |
| `emails`                                                                        | [operations.GetScimUserEmail](../../models/operations/get-scim-user-email.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |
| `active`                                                                        | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `roles`                                                                         | [operations.GetScimUserRole](../../models/operations/get-scim-user-role.md)[]   | :heavy_check_mark:                                                              | N/A                                                                             |
| `meta`                                                                          | [operations.GetScimUserMeta](../../models/operations/get-scim-user-meta.md)     | :heavy_check_mark:                                                              | N/A                                                                             |