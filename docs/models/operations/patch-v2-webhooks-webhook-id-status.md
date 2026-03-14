# PatchV2WebhooksWebhookIdStatus

The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdStatus } from "@interfere/attio/models/operations";

let value: PatchV2WebhooksWebhookIdStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "degraded" | "inactive" | Unrecognized<string>
```