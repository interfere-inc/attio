# StatusEnum

The status of the individual meeting participant.

## Example Usage

```typescript
import { StatusEnum } from "@interfere/attio/models";

let value: StatusEnum = "accepted";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"accepted" | "tentative" | "declined" | "pending" | Unrecognized<string>
```