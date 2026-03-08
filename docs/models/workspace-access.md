# WorkspaceAccess

The level of access granted to all members of the workspace for this list. `null` values represent a private list that only grants access to specific workspace members via the `workspace_member_access` property.

## Example Usage

```typescript
import { WorkspaceAccess } from "@interfere/attio/models";

let value: WorkspaceAccess = "read-and-write";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"full-access" | "read-and-write" | "read-only" | Unrecognized<string>
```