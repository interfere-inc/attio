# Level

The level of access to the list.

## Example Usage

```typescript
import { Level } from "@interfere/attio/models";

let value: Level = "read-and-write";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"full-access" | "read-and-write" | "read-only" | Unrecognized<string>
```