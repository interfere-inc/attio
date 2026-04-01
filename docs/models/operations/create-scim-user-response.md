# CreateScimUserResponse

Created

## Example Usage

```typescript
import { CreateScimUserResponse } from "@interfere/attio/models/operations";

let value: CreateScimUserResponse = {
  schemas: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  id: "<id>",
  userName: "Reta.Kilback92",
  name: {
    givenName: "<value>",
    familyName: "<value>",
  },
  emails: [],
  roles: [],
  active: true,
  meta: {
    resourceType: "<value>",
    created: "<value>",
    lastModified: "<value>",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `schemas`                                                                             | *string*[]                                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `userName`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `name`                                                                                | [operations.CreateScimUserName](../../models/operations/create-scim-user-name.md)     | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `emails`                                                                              | [operations.CreateScimUserEmail](../../models/operations/create-scim-user-email.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `roles`                                                                               | [operations.CreateScimUserRole](../../models/operations/create-scim-user-role.md)[]   | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `profileUrl`                                                                          | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `active`                                                                              | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `meta`                                                                                | [operations.CreateScimUserMeta](../../models/operations/create-scim-user-meta.md)     | :heavy_check_mark:                                                                    | N/A                                                                                   |