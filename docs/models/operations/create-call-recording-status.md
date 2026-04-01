# CreateCallRecordingStatus

The status of the call recording. When a call recording is first created, it will have a status of `PROCESSING`. Once the recording is ready, it will transition to `COMPLETED`. If the recording fails for any reason, the status will be `FAILED`.

## Example Usage

```typescript
import { CreateCallRecordingStatus } from "@interfere/attio/models/operations";

let value: CreateCallRecordingStatus = "completed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"processing" | "completed" | "failed" | Unrecognized<string>
```