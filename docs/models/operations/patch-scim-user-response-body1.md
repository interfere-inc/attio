# PatchScimUserResponseBody1

Success

## Example Usage

```typescript
import { PatchScimUserResponseBody1 } from "@interfere/attio/models/operations";

let value: PatchScimUserResponseBody1 = {
  schemas: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  id: "<id>",
  userName: "Elena_Schuppe12",
  name: {
    givenName: "<value>",
    familyName: "<value>",
  },
  emails: [
    {
      value: "<value>",
      primary: false,
    },
  ],
  roles: [
    {
      value: "<value>",
      primary: false,
    },
  ],
  profileUrl: "https://immediate-peninsula.org",
  active: false,
  meta: {
    resourceType: "<value>",
    created: "<value>",
    lastModified: "<value>",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `schemas`                                                                           | *string*[]                                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `userName`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `name`                                                                              | [operations.PatchScimUserName](../../models/operations/patch-scim-user-name.md)     | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `emails`                                                                            | [operations.PatchScimUserEmail](../../models/operations/patch-scim-user-email.md)[] | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `roles`                                                                             | [operations.PatchScimUserRole](../../models/operations/patch-scim-user-role.md)[]   | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `profileUrl`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `active`                                                                            | *boolean*                                                                           | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `meta`                                                                              | [operations.PatchScimUserMeta](../../models/operations/patch-scim-user-meta.md)     | :heavy_check_mark:                                                                  | N/A                                                                                 |