# ConnectedFileType

The type of actor. [Read more information on actor types here](/docs/actors).

## Example Usage

```typescript
import { ConnectedFileType } from "@interfere/attio/models";

let value: ConnectedFileType = "app";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"api-token" | "workspace-member" | "system" | "app" | Unrecognized<string>
```