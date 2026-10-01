# EmailParticipant

## Example Usage

```typescript
import { EmailParticipant } from "@interfere/attio/models";

let value: EmailParticipant = {
  name: "Simon Mitchell",
  role: "from",
  emailAddress: "person@company.com",
  emailDomain: "fundstack.com",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | The participant's name as it appeared on the email, when the email provided one. | Simon Mitchell                                                                   |
| `role`                                                                           | [models.Role](../models/role.md)                                                 | :heavy_check_mark:                                                               | The role this participant had on the email.                                      | from                                                                             |
| `emailAddress`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | The normalized email address of the participant.                                 | person@company.com                                                               |
| `emailDomain`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | The domain of the participant's email address.                                   | fundstack.com                                                                    |