# GetV2MeetingsMeetingIdCallRecordingsStatus

The status of the call recording. When a call recording is first created, it will have a status of `PROCESSING`. Once the recording is ready, it will transition to `COMPLETED`. If the recording fails for any reason, the status will be `FAILED`.

## Example Usage

```typescript
import { GetV2MeetingsMeetingIdCallRecordingsStatus } from "@interfere/attio/models/operations";

let value: GetV2MeetingsMeetingIdCallRecordingsStatus = "completed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"processing" | "completed" | "failed" | Unrecognized<string>
```