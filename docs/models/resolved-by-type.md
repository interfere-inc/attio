# ResolvedByType

The type of actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { ResolvedByType } from "@interfere/attio/models";

let value: ResolvedByType = "workspace-member";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```