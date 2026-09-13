# Meetings

## Overview

Meetings are events synced from your calendar, added manually or added from third-party integrations.

### Available Operations

* [list](#list) - List meetings
* [findOrCreate](#findorcreate) - Create a meeting
* [get](#get) - Get a meeting

## list

Lists all meetings in the workspace using a deterministic sort order. When both the `participants` and `linked_record_id` filters are supplied, they are combined with OR: meetings that match either filter are returned.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listMeetings" method="get" path="/v2/meetings" -->
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
| `request`                                                                                                                                                                      | [operations.ListMeetingsRequest](../../models/operations/list-meetings-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMeetingsResponse](../../models/operations/list-meetings-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## findOrCreate

Creates a new meeting. [See here](/rest-api/guides/syncing-meetings) for guidance on avoiding duplicate meetings.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read-write`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="findOrCreateMeeting" method="post" path="/v2/meetings" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.meetings.findOrCreate({
    data: {
      title: "Onboarding Session",
      description: "Getting you up to speed with the platform and answering any questions you have.",
      start: {
        datetime: new Date("2027-11-27T14:00:00Z"),
        timezone: "America/New_York",
      },
      end: {
        date: "2027-11-28",
      },
      isAllDay: false,
      participants: [
        {
          emailAddress: "person@company.com",
          isOrganizer: true,
          status: "accepted",
        },
      ],
      linkedRecords: [
        {
          object: "people",
          recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        },
      ],
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
import { meetingsFindOrCreate } from "@interfere/attio/funcs/meetings-find-or-create.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await meetingsFindOrCreate(attio, {
    data: {
      title: "Onboarding Session",
      description: "Getting you up to speed with the platform and answering any questions you have.",
      start: {
        datetime: new Date("2027-11-27T14:00:00Z"),
        timezone: "America/New_York",
      },
      end: {
        date: "2027-11-28",
      },
      isAllDay: false,
      participants: [
        {
          emailAddress: "person@company.com",
          isOrganizer: true,
          status: "accepted",
        },
      ],
      linkedRecords: [
        {
          object: "people",
          recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("meetingsFindOrCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FindOrCreateMeetingRequest](../../models/operations/find-or-create-meeting-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.FindOrCreateMeetingResponse](../../models/operations/find-or-create-meeting-response.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.FindOrCreateMeetingValidationTypeError | 400                                           | application/json                              |
| errors.AttioError                             | 4XX, 5XX                                      | \*/\*                                         |

## get

Get a single meeting by ID.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMeeting" method="get" path="/v2/meetings/{meeting_id}" -->
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
| `request`                                                                                                                                                                      | [operations.GetMeetingRequest](../../models/operations/get-meeting-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMeetingResponse](../../models/operations/get-meeting-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetMeetingNotFoundError | 404                            | application/json               |
| errors.AttioError              | 4XX, 5XX                       | \*/\*                          |