# Transcripts

## Overview

Transcripts contain the speech segments and speaker information for a call recording. They are linked to call recordings.

### Available Operations

* [getV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscript](#getv2meetingsmeetingidcallrecordingscallrecordingidtranscript) - Get call transcript

## getV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscript

Get the transcript for a call recording.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `call_recording:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/meetings/{meeting_id}/call_recordings/{call_recording_id}/transcript" method="get" path="/v2/meetings/{meeting_id}/call_recordings/{call_recording_id}/transcript" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.transcripts.getV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscript({
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
    callRecordingId: "e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
    cursor: "eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { transcriptsGetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscript } from "@interfere/attio/funcs/transcripts-get-v2-meetings-meeting-id-call-recordings-call-recording-id-transcript.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await transcriptsGetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscript(attio, {
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
    callRecordingId: "e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
    cursor: "eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transcriptsGetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscript failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                     | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                     | [operations.GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscriptRequest](../../models/operations/get-v2-meetings-meeting-id-call-recordings-call-recording-id-transcript-request.md) | :heavy_check_mark:                                                                                                                                                                            | The request object to use for the request.                                                                                                                                                    |
| `options`                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                |
| `options.retries`                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                              |

### Response

**Promise\<[operations.GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscriptResponse](../../models/operations/get-v2-meetings-meeting-id-call-recordings-call-recording-id-transcript-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |