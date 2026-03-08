# AuthorType

The type of actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { AuthorType } from "@interfere/attio/models";

let value: AuthorType = "app";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```