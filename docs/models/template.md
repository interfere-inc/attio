# Template

For actor reference attributes, you may pass a dynamic value of `"current-user"`. When creating new records or entries, this will cause the actor reference value to be populated with either the workspace member or API token that created the record/entry.

## Example Usage

```typescript
import { Template } from "@interfere/attio/models";

let value: Template = "current-user";
```

## Values

```typescript
"current-user"
```