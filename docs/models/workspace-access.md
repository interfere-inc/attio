# WorkspaceAccess

The level of access granted to all members of the workspace for this list. `null` values represent a private list that only grants access to specific workspace members via the `workspace_member_access` property.

## Example Usage

```typescript
import { WorkspaceAccess } from "@interfere/attio/models";

let value: WorkspaceAccess = "read-and-write";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"full-access" | "read-and-write" | "read-only" | Unrecognized<string>
```