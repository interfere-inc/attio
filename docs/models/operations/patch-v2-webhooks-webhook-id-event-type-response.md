# PatchV2WebhooksWebhookIdEventTypeResponse

Type of event the webhook is subscribed to.

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdEventTypeResponse } from "@interfere/attio/models/operations";

let value: PatchV2WebhooksWebhookIdEventTypeResponse = "note.created";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"call-recording.created" | "comment.created" | "comment.resolved" | "comment.unresolved" | "comment.deleted" | "list.created" | "list.updated" | "list.deleted" | "list-attribute.created" | "list-attribute.updated" | "list-entry.created" | "list-entry.updated" | "list-entry.deleted" | "object-attribute.created" | "object-attribute.updated" | "note.created" | "note-content.updated" | "note.updated" | "note.deleted" | "record.created" | "record.merged" | "record.updated" | "record.deleted" | "task.created" | "task.updated" | "task.deleted" | "workspace-member.created" | Unrecognized<string>
```