# AccessLevel

Whether the workspace member is suspended or not and what level of privileges they have inside the workspace. We do not delete workspace members so that you can successfully attribute past actions to suspended workspace members.

## Example Usage

```typescript
import { AccessLevel } from "@interfere/attio/models";

let value: AccessLevel = "member";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"admin" | "member" | "suspended" | Unrecognized<string>
```