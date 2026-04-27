# InputValueWorkspaceMemberByEmail

## Example Usage

```typescript
import { InputValueWorkspaceMemberByEmail } from "@interfere/attio/models";

let value: InputValueWorkspaceMemberByEmail = {
  workspaceMemberEmailAddress: "alice@attio.com",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `workspaceMemberEmailAddress`                                                   | *string*                                                                        | :heavy_check_mark:                                                              | Workspace member actors can be referenced by email address as well as actor ID. | alice@attio.com                                                                 |