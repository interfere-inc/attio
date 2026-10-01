# TokenLevel

Whether the token acts for the whole workspace or for a single workspace member.

## Example Usage

```typescript
import { TokenLevel } from "@interfere/attio/models/operations";

let value: TokenLevel = "workspace";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"workspace" | "user" | Unrecognized<string>
```