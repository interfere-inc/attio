# CreateListWorkspaceAccess

The level of access granted to all members of the workspace for this list. Pass `null` to keep the list private and only grant access to specific workspace members.

## Example Usage

```typescript
import { CreateListWorkspaceAccess } from "@interfere/attio/models/operations";

let value: CreateListWorkspaceAccess = "read-and-write";
```

## Values

```typescript
"full-access" | "read-and-write" | "read-only"
```