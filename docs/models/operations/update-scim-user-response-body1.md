# UpdateScimUserResponseBody1

Success

## Example Usage

```typescript
import { UpdateScimUserResponseBody1 } from "@interfere/attio/models/operations";

let value: UpdateScimUserResponseBody1 = {
  schemas: [
    "<value 1>",
  ],
  id: "<id>",
  userName: "Pascale_Hermiston",
  name: {
    givenName: "<value>",
    familyName: "<value>",
  },
  emails: [
    {
      value: "<value>",
      primary: true,
    },
  ],
  roles: [],
  profileUrl: "https://shimmering-agreement.info",
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
| `name`                                                                                | [operations.UpdateScimUserName](../../models/operations/update-scim-user-name.md)     | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `emails`                                                                              | [operations.UpdateScimUserEmail](../../models/operations/update-scim-user-email.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `roles`                                                                               | [operations.UpdateScimUserRole](../../models/operations/update-scim-user-role.md)[]   | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `profileUrl`                                                                          | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `active`                                                                              | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `meta`                                                                                | [operations.UpdateScimUserMeta](../../models/operations/update-scim-user-meta.md)     | :heavy_check_mark:                                                                    | N/A                                                                                   |