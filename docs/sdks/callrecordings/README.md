# CallRecordings

## Overview

Call recordings store video, audio, transcript and speaker information for calls. They are linked to meetings.

### Available Operations

* [getV2MeetingsMeetingIdCallRecordings](#getv2meetingsmeetingidcallrecordings) - List call recordings
* [postV2MeetingsMeetingIdCallRecordings](#postv2meetingsmeetingidcallrecordings) - Create call recording
* [getV2MeetingsMeetingIdCallRecordingsCallRecordingId](#getv2meetingsmeetingidcallrecordingscallrecordingid) - Get call recording
* [deleteV2MeetingsMeetingIdCallRecordingsCallRecordingId](#deletev2meetingsmeetingidcallrecordingscallrecordingid) - Delete call recording

## getV2MeetingsMeetingIdCallRecordings

List all call recordings for a meeting.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `call_recording:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/meetings/{meeting_id}/call_recordings" method="get" path="/v2/meetings/{meeting_id}/call_recordings" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.callRecordings.getV2MeetingsMeetingIdCallRecordings({
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
    limit: 50,
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
import { callRecordingsGetV2MeetingsMeetingIdCallRecordings } from "@interfere/attio/funcs/call-recordings-get-v2-meetings-meeting-id-call-recordings.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await callRecordingsGetV2MeetingsMeetingIdCallRecordings(attio, {
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
    limit: 50,
    cursor: "eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("callRecordingsGetV2MeetingsMeetingIdCallRecordings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2MeetingsMeetingIdCallRecordingsRequest](../../models/operations/get-v2-meetings-meeting-id-call-recordings-request.md)                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2MeetingsMeetingIdCallRecordingsResponse](../../models/operations/get-v2-meetings-meeting-id-call-recordings-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.AttioDefaultError | 4XX, 5XX                 | \*/\*                    |

## postV2MeetingsMeetingIdCallRecordings

Create a call recording for a meeting. This endpoint is rate limited to 1 request per second.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `meeting:read`, `call_recording:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/meetings/{meeting_id}/call_recordings" method="post" path="/v2/meetings/{meeting_id}/call_recordings" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.callRecordings.postV2MeetingsMeetingIdCallRecordings({
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
    body: {
      data: {
        videoUrl: "https://example.com/recording.mp4",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { callRecordingsPostV2MeetingsMeetingIdCallRecordings } from "@interfere/attio/funcs/call-recordings-post-v2-meetings-meeting-id-call-recordings.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await callRecordingsPostV2MeetingsMeetingIdCallRecordings(attio, {
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
    body: {
      data: {
        videoUrl: "https://example.com/recording.mp4",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("callRecordingsPostV2MeetingsMeetingIdCallRecordings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2MeetingsMeetingIdCallRecordingsRequest](../../models/operations/post-v2-meetings-meeting-id-call-recordings-request.md)                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2MeetingsMeetingIdCallRecordingsResponse](../../models/operations/post-v2-meetings-meeting-id-call-recordings-response.md)\>**

### Errors

| Error Type                                                      | Status Code                                                     | Content Type                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| errors.PostV2MeetingsMeetingIdCallRecordingsValidationTypeError | 400                                                             | application/json                                                |
| errors.AuthError                                                | 403                                                             | application/json                                                |
| errors.PostV2MeetingsMeetingIdCallRecordingsNotFoundError       | 404                                                             | application/json                                                |
| errors.AttioDefaultError                                        | 4XX, 5XX                                                        | \*/\*                                                           |

## getV2MeetingsMeetingIdCallRecordingsCallRecordingId

Get a single call recording by ID.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `call_recording:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/meetings/{meeting_id}/call_recordings/{call_recording_id}" method="get" path="/v2/meetings/{meeting_id}/call_recordings/{call_recording_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.callRecordings.getV2MeetingsMeetingIdCallRecordingsCallRecordingId({
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
    callRecordingId: "e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { callRecordingsGetV2MeetingsMeetingIdCallRecordingsCallRecordingId } from "@interfere/attio/funcs/call-recordings-get-v2-meetings-meeting-id-call-recordings-call-recording-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await callRecordingsGetV2MeetingsMeetingIdCallRecordingsCallRecordingId(attio, {
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
    callRecordingId: "e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("callRecordingsGetV2MeetingsMeetingIdCallRecordingsCallRecordingId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdRequest](../../models/operations/get-v2-meetings-meeting-id-call-recordings-call-recording-id-request.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdResponse](../../models/operations/get-v2-meetings-meeting-id-call-recordings-call-recording-id-response.md)\>**

### Errors

| Error Type                                                              | Status Code                                                             | Content Type                                                            |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| errors.GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdNotFoundError | 404                                                                     | application/json                                                        |
| errors.AttioDefaultError                                                | 4XX, 5XX                                                                | \*/\*                                                                   |

## deleteV2MeetingsMeetingIdCallRecordingsCallRecordingId

Deletes the specified call recording. This will remove the call recording and all associated data.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `meeting:read`, `call_recording:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/meetings/{meeting_id}/call_recordings/{call_recording_id}" method="delete" path="/v2/meetings/{meeting_id}/call_recordings/{call_recording_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.callRecordings.deleteV2MeetingsMeetingIdCallRecordingsCallRecordingId({
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
    callRecordingId: "e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { callRecordingsDeleteV2MeetingsMeetingIdCallRecordingsCallRecordingId } from "@interfere/attio/funcs/call-recordings-delete-v2-meetings-meeting-id-call-recordings-call-recording-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await callRecordingsDeleteV2MeetingsMeetingIdCallRecordingsCallRecordingId(attio, {
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
    callRecordingId: "e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("callRecordingsDeleteV2MeetingsMeetingIdCallRecordingsCallRecordingId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV2MeetingsMeetingIdCallRecordingsCallRecordingIdRequest](../../models/operations/delete-v2-meetings-meeting-id-call-recordings-call-recording-id-request.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2MeetingsMeetingIdCallRecordingsCallRecordingIdResponse](../../models/operations/delete-v2-meetings-meeting-id-call-recordings-call-recording-id-response.md)\>**

### Errors

| Error Type                                                                 | Status Code                                                                | Content Type                                                               |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| errors.DeleteV2MeetingsMeetingIdCallRecordingsCallRecordingIdNotFoundError | 404                                                                        | application/json                                                           |
| errors.AttioDefaultError                                                   | 4XX, 5XX                                                                   | \*/\*                                                                      |