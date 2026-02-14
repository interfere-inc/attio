# StatusEnum

The status of the individual meeting participant.

## Example Usage

```typescript
import { StatusEnum } from "@interfere/attio/models";

let value: StatusEnum = "accepted";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"accepted" | "tentative" | "declined" | "pending" | Unrecognized<string>
```