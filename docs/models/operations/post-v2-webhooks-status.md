# PostV2WebhooksStatus

The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.

## Example Usage

```typescript
import { PostV2WebhooksStatus } from "@interfere/attio/models/operations";

let value: PostV2WebhooksStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "degraded" | "inactive" | Unrecognized<string>
```