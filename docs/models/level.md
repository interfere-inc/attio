# Level

The level of access to the list.

## Example Usage

```typescript
import { Level } from "@interfere/attio/models";

let value: Level = "read-and-write";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"full-access" | "read-and-write" | "read-only" | Unrecognized<string>
```