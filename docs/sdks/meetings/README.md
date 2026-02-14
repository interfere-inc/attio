# Meetings

## Overview

Meetings are events synced from your calendar, added manually or added from third-party integrations.

### Available Operations

* [list](#list) - List meetings
* [createOrFind](#createorfind) - Find or create a meeting
* [get](#get) - Get a meeting

## list

Lists all meetings in the workspace using a deterministic sort order.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/meetings" method="get" path="/v2/meetings" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.meetings.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { meetingsList } from "@interfere/attio/funcs/meetings-list.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await meetingsList(attio, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("meetingsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2MeetingsRequest](../../models/operations/get-v2-meetings-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2MeetingsResponse](../../models/operations/get-v2-meetings-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## createOrFind

Finds an existing meeting or creates a new one if it doesn't yet exist. [Please see here](/rest-api/guides/syncing-meetings) for a full guide on syncing meetings to Attio.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `meeting:read-write`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/meetings" method="post" path="/v2/meetings" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.meetings.createOrFind({
    data: {
      title: "Onboarding Session",
      description: "Getting you up to speed with the platform and answering any questions you have.",
      start: {
        date: "2027-11-27",
      },
      end: {
        datetime: new Date("2027-11-27T15:00:00Z"),
        timezone: "America/New_York",
      },
      isAllDay: false,
      participants: [],
      linkedRecords: [
        {
          object: "people",
          recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        },
      ],
      externalRef: "external_meeting_12345",
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
import { meetingsCreateOrFind } from "@interfere/attio/funcs/meetings-create-or-find.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await meetingsCreateOrFind(attio, {
    data: {
      title: "Onboarding Session",
      description: "Getting you up to speed with the platform and answering any questions you have.",
      start: {
        date: "2027-11-27",
      },
      end: {
        datetime: new Date("2027-11-27T15:00:00Z"),
        timezone: "America/New_York",
      },
      isAllDay: false,
      participants: [],
      linkedRecords: [
        {
          object: "people",
          recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        },
      ],
      externalRef: "external_meeting_12345",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("meetingsCreateOrFind failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2MeetingsRequest](../../models/operations/post-v2-meetings-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2MeetingsResponse](../../models/operations/post-v2-meetings-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.PostV2MeetingsValidationTypeError | 400                                      | application/json                         |
| errors.AttioError                        | 4XX, 5XX                                 | \*/\*                                    |

## get

Get a single meeting by ID.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/meetings/{meeting_id}" method="get" path="/v2/meetings/{meeting_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.meetings.get({
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { meetingsGet } from "@interfere/attio/funcs/meetings-get.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await meetingsGet(attio, {
    meetingId: "cb59ab17-ad15-460c-a126-0715617c0853",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("meetingsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2MeetingsMeetingIdRequest](../../models/operations/get-v2-meetings-meeting-id-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2MeetingsMeetingIdResponse](../../models/operations/get-v2-meetings-meeting-id-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetV2MeetingsMeetingIdNotFoundError | 404                                        | application/json                           |
| errors.AttioError                          | 4XX, 5XX                                   | \*/\*                                      |