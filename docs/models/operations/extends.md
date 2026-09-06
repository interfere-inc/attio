# Extends

The schema the new activity extends, which supplies its inherited attributes. One of `activities`, `interactions`, `calls` or `emails`.

## Example Usage

```typescript
import { Extends } from "@interfere/attio/models/operations";

let value: Extends = "interactions";
```

## Values

```typescript
"activities" | "interactions" | "calls" | "emails"
```