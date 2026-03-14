# PostScimV2UsersResponse

Created

## Example Usage

```typescript
import { PostScimV2UsersResponse } from "@interfere/attio/models/operations";

let value: PostScimV2UsersResponse = {
  schemas: [
    "<value 1>",
  ],
  id: "<id>",
  userName: "Robyn.Hodkiewicz",
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `schemas`                                                                            | *string*[]                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `userName`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | [operations.Name](../../models/operations/name.md)                                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `emails`                                                                             | [operations.Email](../../models/operations/email.md)[]                               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `roles`                                                                              | [operations.Role](../../models/operations/role.md)[]                                 | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `profileUrl`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `active`                                                                             | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `meta`                                                                               | [operations.PostScimV2UsersMeta](../../models/operations/post-scim-v2-users-meta.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |