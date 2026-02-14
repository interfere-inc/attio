# Notes

## Overview

Notes are rich text documents that reference a single parent record.

### Available Operations

* [getV2Notes](#getv2notes) - List notes
* [postV2Notes](#postv2notes) - Create a note
* [getV2NotesNoteId](#getv2notesnoteid) - Get a note
* [deleteV2NotesNoteId](#deletev2notesnoteid) - Delete a note

## getV2Notes

List notes for all records or for a specific record.

Required scopes: `note:read`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/notes" method="get" path="/v2/notes" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.notes.getV2Notes({
    limit: 10,
    offset: 5,
    parentObject: "people",
    parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { notesGetV2Notes } from "@interfere/attio/funcs/notes-get-v2-notes.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await notesGetV2Notes(attio, {
    limit: 10,
    offset: 5,
    parentObject: "people",
    parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("notesGetV2Notes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2NotesRequest](../../models/operations/get-v2-notes-request.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2NotesResponse](../../models/operations/get-v2-notes-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetV2NotesNotFoundError | 404                            | application/json               |
| errors.AttioDefaultError       | 4XX, 5XX                       | \*/\*                          |

## postV2Notes

Creates a new note for a given record.

Required scopes: `note:read-write`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/notes" method="post" path="/v2/notes" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.notes.postV2Notes({
    data: {
      parentObject: "people",
      parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      title: "Initial Prospecting Call Summary",
      format: "plaintext",
      content: "# Meeting Recap: Q4 Planning\n\n**Date:** 2023-10-26\n**Attendees:** Alex, Jamie, Casey\n\n## Key Discussion Points\n\n- Reviewed Q3 performance metrics.\n- Brainstormed key initiatives for Q4.\n- Discussed budget allocation for ==Project Phoenix==.\n\n## Action Items\n\n1. Alex to finalize Q4 roadmap by EOD Friday.\n2. Jamie to schedule follow-up with [Marketing Team](https://app.attio.com/teams/marketing).\n3. Casey to draft initial budget for ~~Project Chimera~~ (now deferred).\n\n*Next steps: Review draft roadmap next week.*",
      createdAt: "2023-01-01T15:00:00.000000000Z",
      meetingId: "14beef7a-99f7-4534-a87e-70b564330a4c",
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
import { notesPostV2Notes } from "@interfere/attio/funcs/notes-post-v2-notes.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await notesPostV2Notes(attio, {
    data: {
      parentObject: "people",
      parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      title: "Initial Prospecting Call Summary",
      format: "plaintext",
      content: "# Meeting Recap: Q4 Planning\n\n**Date:** 2023-10-26\n**Attendees:** Alex, Jamie, Casey\n\n## Key Discussion Points\n\n- Reviewed Q3 performance metrics.\n- Brainstormed key initiatives for Q4.\n- Discussed budget allocation for ==Project Phoenix==.\n\n## Action Items\n\n1. Alex to finalize Q4 roadmap by EOD Friday.\n2. Jamie to schedule follow-up with [Marketing Team](https://app.attio.com/teams/marketing).\n3. Casey to draft initial budget for ~~Project Chimera~~ (now deferred).\n\n*Next steps: Review draft roadmap next week.*",
      createdAt: "2023-01-01T15:00:00.000000000Z",
      meetingId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("notesPostV2Notes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2NotesRequest](../../models/operations/post-v2-notes-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2NotesResponse](../../models/operations/post-v2-notes-response.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.PostV2NotesNotFoundError | 404                             | application/json                |
| errors.AttioDefaultError        | 4XX, 5XX                        | \*/\*                           |

## getV2NotesNoteId

Get a single note by ID.

Required scopes: `note:read`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/notes/{note_id}" method="get" path="/v2/notes/{note_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.notes.getV2NotesNoteId({
    noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { notesGetV2NotesNoteId } from "@interfere/attio/funcs/notes-get-v2-notes-note-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await notesGetV2NotesNoteId(attio, {
    noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("notesGetV2NotesNoteId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2NotesNoteIdRequest](../../models/operations/get-v2-notes-note-id-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2NotesNoteIdResponse](../../models/operations/get-v2-notes-note-id-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetV2NotesNoteIdNotFoundError | 404                                  | application/json                     |
| errors.AttioDefaultError             | 4XX, 5XX                             | \*/\*                                |

## deleteV2NotesNoteId

Delete a single note by ID.

Required scopes: `note:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/notes/{note_id}" method="delete" path="/v2/notes/{note_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.notes.deleteV2NotesNoteId({
    noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { notesDeleteV2NotesNoteId } from "@interfere/attio/funcs/notes-delete-v2-notes-note-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await notesDeleteV2NotesNoteId(attio, {
    noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("notesDeleteV2NotesNoteId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV2NotesNoteIdRequest](../../models/operations/delete-v2-notes-note-id-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2NotesNoteIdResponse](../../models/operations/delete-v2-notes-note-id-response.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.DeleteV2NotesNoteIdNotFoundError | 404                                     | application/json                        |
| errors.AttioDefaultError                | 4XX, 5XX                                | \*/\*                                   |