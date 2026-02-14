# @interfere/attio

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@interfere/attio* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=@interfere/attio&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/interfere/api). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@interfere/attio](#interfereattio)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.objects.getV2Objects();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme       | Environment Variable |
| -------- | ------ | ------------ | -------------------- |
| `oauth2` | oauth2 | OAuth2 token | `ATTIO_OAUTH2`       |

To authenticate with the API the `oauth2` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.objects.getV2Objects();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Attributes](docs/sdks/attributes/README.md)

* [getV2TargetIdentifierAttributes](docs/sdks/attributes/README.md#getv2targetidentifierattributes) - List attributes
* [postV2TargetIdentifierAttributes](docs/sdks/attributes/README.md#postv2targetidentifierattributes) - Create an attribute
* [getV2TargetIdentifierAttributesAttribute](docs/sdks/attributes/README.md#getv2targetidentifierattributesattribute) - Get an attribute
* [patchV2TargetIdentifierAttributesAttribute](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattribute) - Update an attribute
* [getV2TargetIdentifierAttributesAttributeOptions](docs/sdks/attributes/README.md#getv2targetidentifierattributesattributeoptions) - List select options
* [postV2TargetIdentifierAttributesAttributeOptions](docs/sdks/attributes/README.md#postv2targetidentifierattributesattributeoptions) - Create a select option
* [patchV2TargetIdentifierAttributesAttributeOptionsOption](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattributeoptionsoption) - Update a select option
* [getV2TargetIdentifierAttributesAttributeStatuses](docs/sdks/attributes/README.md#getv2targetidentifierattributesattributestatuses) - List statuses
* [postV2TargetIdentifierAttributesAttributeStatuses](docs/sdks/attributes/README.md#postv2targetidentifierattributesattributestatuses) - Create a status
* [patchV2TargetIdentifierAttributesAttributeStatusesStatus](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattributestatusesstatus) - Update a status

### [CallRecordings](docs/sdks/callrecordings/README.md)

* [getV2MeetingsMeetingIdCallRecordings](docs/sdks/callrecordings/README.md#getv2meetingsmeetingidcallrecordings) - List call recordings
* [postV2MeetingsMeetingIdCallRecordings](docs/sdks/callrecordings/README.md#postv2meetingsmeetingidcallrecordings) - Create call recording
* [getV2MeetingsMeetingIdCallRecordingsCallRecordingId](docs/sdks/callrecordings/README.md#getv2meetingsmeetingidcallrecordingscallrecordingid) - Get call recording
* [deleteV2MeetingsMeetingIdCallRecordingsCallRecordingId](docs/sdks/callrecordings/README.md#deletev2meetingsmeetingidcallrecordingscallrecordingid) - Delete call recording

### [Comments](docs/sdks/comments/README.md)

* [postV2Comments](docs/sdks/comments/README.md#postv2comments) - Create a comment
* [getV2CommentsCommentId](docs/sdks/comments/README.md#getv2commentscommentid) - Get a comment
* [deleteV2CommentsCommentId](docs/sdks/comments/README.md#deletev2commentscommentid) - Delete a comment

### [Entries](docs/sdks/entries/README.md)

* [postV2ListsListEntriesQuery](docs/sdks/entries/README.md#postv2listslistentriesquery) - List entries
* [putV2ListsListEntries](docs/sdks/entries/README.md#putv2listslistentries) - Assert a list entry by parent
* [postV2ListsListEntries](docs/sdks/entries/README.md#postv2listslistentries) - Create an entry (add record to list)
* [getV2ListsListEntriesEntryId](docs/sdks/entries/README.md#getv2listslistentriesentryid) - Get a list entry
* [putV2ListsListEntriesEntryId](docs/sdks/entries/README.md#putv2listslistentriesentryid) - Update a list entry (overwrite multiselect values)
* [deleteV2ListsListEntriesEntryId](docs/sdks/entries/README.md#deletev2listslistentriesentryid) - Delete a list entry
* [patchV2ListsListEntriesEntryId](docs/sdks/entries/README.md#patchv2listslistentriesentryid) - Update a list entry (append multiselect values)
* [getV2ListsListEntriesEntryIdAttributesAttributeValues](docs/sdks/entries/README.md#getv2listslistentriesentryidattributesattributevalues) - List attribute values for a list entry

### [Lists](docs/sdks/lists/README.md)

* [getV2Lists](docs/sdks/lists/README.md#getv2lists) - List all lists
* [postV2Lists](docs/sdks/lists/README.md#postv2lists) - Create a list
* [getV2ListsList](docs/sdks/lists/README.md#getv2listslist) - Get a list
* [patchV2ListsList](docs/sdks/lists/README.md#patchv2listslist) - Update a list

### [Meetings](docs/sdks/meetings/README.md)

* [getV2Meetings](docs/sdks/meetings/README.md#getv2meetings) - List meetings
* [postV2Meetings](docs/sdks/meetings/README.md#postv2meetings) - Find or create a meeting
* [getV2MeetingsMeetingId](docs/sdks/meetings/README.md#getv2meetingsmeetingid) - Get a meeting

### [Meta](docs/sdks/meta/README.md)

* [getV2Self](docs/sdks/meta/README.md#getv2self) - Identify

### [Notes](docs/sdks/notes/README.md)

* [getV2Notes](docs/sdks/notes/README.md#getv2notes) - List notes
* [postV2Notes](docs/sdks/notes/README.md#postv2notes) - Create a note
* [getV2NotesNoteId](docs/sdks/notes/README.md#getv2notesnoteid) - Get a note
* [deleteV2NotesNoteId](docs/sdks/notes/README.md#deletev2notesnoteid) - Delete a note

### [Objects](docs/sdks/objects/README.md)

* [getV2Objects](docs/sdks/objects/README.md#getv2objects) - List objects
* [postV2Objects](docs/sdks/objects/README.md#postv2objects) - Create an object
* [getV2ObjectsObject](docs/sdks/objects/README.md#getv2objectsobject) - Get an object
* [patchV2ObjectsObject](docs/sdks/objects/README.md#patchv2objectsobject) - Update an object

### [Records](docs/sdks/records/README.md)

* [postV2ObjectsObjectRecordsQuery](docs/sdks/records/README.md#postv2objectsobjectrecordsquery) - List records
* [putV2ObjectsObjectRecords](docs/sdks/records/README.md#putv2objectsobjectrecords) - Assert a record
* [postV2ObjectsObjectRecords](docs/sdks/records/README.md#postv2objectsobjectrecords) - Create a record
* [getV2ObjectsObjectRecordsRecordId](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordid) - Get a record
* [putV2ObjectsObjectRecordsRecordId](docs/sdks/records/README.md#putv2objectsobjectrecordsrecordid) - Update a record (overwrite multiselect values)
* [deleteV2ObjectsObjectRecordsRecordId](docs/sdks/records/README.md#deletev2objectsobjectrecordsrecordid) - Delete a record
* [patchV2ObjectsObjectRecordsRecordId](docs/sdks/records/README.md#patchv2objectsobjectrecordsrecordid) - Update a record (append multiselect values)
* [getV2ObjectsObjectRecordsRecordIdAttributesAttributeValues](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordidattributesattributevalues) - List record attribute values
* [getV2ObjectsObjectRecordsRecordIdEntries](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordidentries) - List record entries
* [postV2ObjectsRecordsSearch](docs/sdks/records/README.md#postv2objectsrecordssearch) - Search records

### [SCIMSchemas](docs/sdks/scimschemas/README.md)

* [getScimV2Schemas](docs/sdks/scimschemas/README.md#getscimv2schemas) - List SCIM schemas

### [Tasks](docs/sdks/tasks/README.md)

* [getV2Tasks](docs/sdks/tasks/README.md#getv2tasks) - List tasks
* [postV2Tasks](docs/sdks/tasks/README.md#postv2tasks) - Create a task
* [getV2TasksTaskId](docs/sdks/tasks/README.md#getv2taskstaskid) - Get a task
* [deleteV2TasksTaskId](docs/sdks/tasks/README.md#deletev2taskstaskid) - Delete a task
* [patchV2TasksTaskId](docs/sdks/tasks/README.md#patchv2taskstaskid) - Update a task

### [Threads](docs/sdks/threads/README.md)

* [getV2Threads](docs/sdks/threads/README.md#getv2threads) - List threads
* [getV2ThreadsThreadId](docs/sdks/threads/README.md#getv2threadsthreadid) - Get a thread

### [Transcripts](docs/sdks/transcripts/README.md)

* [getV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscript](docs/sdks/transcripts/README.md#getv2meetingsmeetingidcallrecordingscallrecordingidtranscript) - Get call transcript

### [Webhooks](docs/sdks/webhooks/README.md)

* [getV2Webhooks](docs/sdks/webhooks/README.md#getv2webhooks) - List webhooks
* [postV2Webhooks](docs/sdks/webhooks/README.md#postv2webhooks) - Create a webhook
* [getV2WebhooksWebhookId](docs/sdks/webhooks/README.md#getv2webhookswebhookid) - Get a webhook
* [deleteV2WebhooksWebhookId](docs/sdks/webhooks/README.md#deletev2webhookswebhookid) - Delete a webhook
* [patchV2WebhooksWebhookId](docs/sdks/webhooks/README.md#patchv2webhookswebhookid) - Update a webhook

### [WorkspaceMembers](docs/sdks/workspacemembers/README.md)

* [getV2WorkspaceMembers](docs/sdks/workspacemembers/README.md#getv2workspacemembers) - List workspace members
* [getV2WorkspaceMembersWorkspaceMemberId](docs/sdks/workspacemembers/README.md#getv2workspacemembersworkspacememberid) - Get a workspace member

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`attributesGetV2TargetIdentifierAttributes`](docs/sdks/attributes/README.md#getv2targetidentifierattributes) - List attributes
- [`attributesGetV2TargetIdentifierAttributesAttribute`](docs/sdks/attributes/README.md#getv2targetidentifierattributesattribute) - Get an attribute
- [`attributesGetV2TargetIdentifierAttributesAttributeOptions`](docs/sdks/attributes/README.md#getv2targetidentifierattributesattributeoptions) - List select options
- [`attributesGetV2TargetIdentifierAttributesAttributeStatuses`](docs/sdks/attributes/README.md#getv2targetidentifierattributesattributestatuses) - List statuses
- [`attributesPatchV2TargetIdentifierAttributesAttribute`](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattribute) - Update an attribute
- [`attributesPatchV2TargetIdentifierAttributesAttributeOptionsOption`](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattributeoptionsoption) - Update a select option
- [`attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus`](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattributestatusesstatus) - Update a status
- [`attributesPostV2TargetIdentifierAttributes`](docs/sdks/attributes/README.md#postv2targetidentifierattributes) - Create an attribute
- [`attributesPostV2TargetIdentifierAttributesAttributeOptions`](docs/sdks/attributes/README.md#postv2targetidentifierattributesattributeoptions) - Create a select option
- [`attributesPostV2TargetIdentifierAttributesAttributeStatuses`](docs/sdks/attributes/README.md#postv2targetidentifierattributesattributestatuses) - Create a status
- [`callRecordingsDeleteV2MeetingsMeetingIdCallRecordingsCallRecordingId`](docs/sdks/callrecordings/README.md#deletev2meetingsmeetingidcallrecordingscallrecordingid) - Delete call recording
- [`callRecordingsGetV2MeetingsMeetingIdCallRecordings`](docs/sdks/callrecordings/README.md#getv2meetingsmeetingidcallrecordings) - List call recordings
- [`callRecordingsGetV2MeetingsMeetingIdCallRecordingsCallRecordingId`](docs/sdks/callrecordings/README.md#getv2meetingsmeetingidcallrecordingscallrecordingid) - Get call recording
- [`callRecordingsPostV2MeetingsMeetingIdCallRecordings`](docs/sdks/callrecordings/README.md#postv2meetingsmeetingidcallrecordings) - Create call recording
- [`commentsDeleteV2CommentsCommentId`](docs/sdks/comments/README.md#deletev2commentscommentid) - Delete a comment
- [`commentsGetV2CommentsCommentId`](docs/sdks/comments/README.md#getv2commentscommentid) - Get a comment
- [`commentsPostV2Comments`](docs/sdks/comments/README.md#postv2comments) - Create a comment
- [`entriesDeleteV2ListsListEntriesEntryId`](docs/sdks/entries/README.md#deletev2listslistentriesentryid) - Delete a list entry
- [`entriesGetV2ListsListEntriesEntryId`](docs/sdks/entries/README.md#getv2listslistentriesentryid) - Get a list entry
- [`entriesGetV2ListsListEntriesEntryIdAttributesAttributeValues`](docs/sdks/entries/README.md#getv2listslistentriesentryidattributesattributevalues) - List attribute values for a list entry
- [`entriesPatchV2ListsListEntriesEntryId`](docs/sdks/entries/README.md#patchv2listslistentriesentryid) - Update a list entry (append multiselect values)
- [`entriesPostV2ListsListEntries`](docs/sdks/entries/README.md#postv2listslistentries) - Create an entry (add record to list)
- [`entriesPostV2ListsListEntriesQuery`](docs/sdks/entries/README.md#postv2listslistentriesquery) - List entries
- [`entriesPutV2ListsListEntries`](docs/sdks/entries/README.md#putv2listslistentries) - Assert a list entry by parent
- [`entriesPutV2ListsListEntriesEntryId`](docs/sdks/entries/README.md#putv2listslistentriesentryid) - Update a list entry (overwrite multiselect values)
- [`listsGetV2Lists`](docs/sdks/lists/README.md#getv2lists) - List all lists
- [`listsGetV2ListsList`](docs/sdks/lists/README.md#getv2listslist) - Get a list
- [`listsPatchV2ListsList`](docs/sdks/lists/README.md#patchv2listslist) - Update a list
- [`listsPostV2Lists`](docs/sdks/lists/README.md#postv2lists) - Create a list
- [`meetingsGetV2Meetings`](docs/sdks/meetings/README.md#getv2meetings) - List meetings
- [`meetingsGetV2MeetingsMeetingId`](docs/sdks/meetings/README.md#getv2meetingsmeetingid) - Get a meeting
- [`meetingsPostV2Meetings`](docs/sdks/meetings/README.md#postv2meetings) - Find or create a meeting
- [`metaGetV2Self`](docs/sdks/meta/README.md#getv2self) - Identify
- [`notesDeleteV2NotesNoteId`](docs/sdks/notes/README.md#deletev2notesnoteid) - Delete a note
- [`notesGetV2Notes`](docs/sdks/notes/README.md#getv2notes) - List notes
- [`notesGetV2NotesNoteId`](docs/sdks/notes/README.md#getv2notesnoteid) - Get a note
- [`notesPostV2Notes`](docs/sdks/notes/README.md#postv2notes) - Create a note
- [`objectsGetV2Objects`](docs/sdks/objects/README.md#getv2objects) - List objects
- [`objectsGetV2ObjectsObject`](docs/sdks/objects/README.md#getv2objectsobject) - Get an object
- [`objectsPatchV2ObjectsObject`](docs/sdks/objects/README.md#patchv2objectsobject) - Update an object
- [`objectsPostV2Objects`](docs/sdks/objects/README.md#postv2objects) - Create an object
- [`recordsDeleteV2ObjectsObjectRecordsRecordId`](docs/sdks/records/README.md#deletev2objectsobjectrecordsrecordid) - Delete a record
- [`recordsGetV2ObjectsObjectRecordsRecordId`](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordid) - Get a record
- [`recordsGetV2ObjectsObjectRecordsRecordIdAttributesAttributeValues`](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordidattributesattributevalues) - List record attribute values
- [`recordsGetV2ObjectsObjectRecordsRecordIdEntries`](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordidentries) - List record entries
- [`recordsPatchV2ObjectsObjectRecordsRecordId`](docs/sdks/records/README.md#patchv2objectsobjectrecordsrecordid) - Update a record (append multiselect values)
- [`recordsPostV2ObjectsObjectRecords`](docs/sdks/records/README.md#postv2objectsobjectrecords) - Create a record
- [`recordsPostV2ObjectsObjectRecordsQuery`](docs/sdks/records/README.md#postv2objectsobjectrecordsquery) - List records
- [`recordsPostV2ObjectsRecordsSearch`](docs/sdks/records/README.md#postv2objectsrecordssearch) - Search records
- [`recordsPutV2ObjectsObjectRecords`](docs/sdks/records/README.md#putv2objectsobjectrecords) - Assert a record
- [`recordsPutV2ObjectsObjectRecordsRecordId`](docs/sdks/records/README.md#putv2objectsobjectrecordsrecordid) - Update a record (overwrite multiselect values)
- [`scimSchemasGetSCIMV2Schemas`](docs/sdks/scimschemas/README.md#getscimv2schemas) - List SCIM schemas
- [`tasksDeleteV2TasksTaskId`](docs/sdks/tasks/README.md#deletev2taskstaskid) - Delete a task
- [`tasksGetV2Tasks`](docs/sdks/tasks/README.md#getv2tasks) - List tasks
- [`tasksGetV2TasksTaskId`](docs/sdks/tasks/README.md#getv2taskstaskid) - Get a task
- [`tasksPatchV2TasksTaskId`](docs/sdks/tasks/README.md#patchv2taskstaskid) - Update a task
- [`tasksPostV2Tasks`](docs/sdks/tasks/README.md#postv2tasks) - Create a task
- [`threadsGetV2Threads`](docs/sdks/threads/README.md#getv2threads) - List threads
- [`threadsGetV2ThreadsThreadId`](docs/sdks/threads/README.md#getv2threadsthreadid) - Get a thread
- [`transcriptsGetV2MeetingsMeetingIdCallRecordingsCallRecordingIdTranscript`](docs/sdks/transcripts/README.md#getv2meetingsmeetingidcallrecordingscallrecordingidtranscript) - Get call transcript
- [`webhooksDeleteV2WebhooksWebhookId`](docs/sdks/webhooks/README.md#deletev2webhookswebhookid) - Delete a webhook
- [`webhooksGetV2Webhooks`](docs/sdks/webhooks/README.md#getv2webhooks) - List webhooks
- [`webhooksGetV2WebhooksWebhookId`](docs/sdks/webhooks/README.md#getv2webhookswebhookid) - Get a webhook
- [`webhooksPatchV2WebhooksWebhookId`](docs/sdks/webhooks/README.md#patchv2webhookswebhookid) - Update a webhook
- [`webhooksPostV2Webhooks`](docs/sdks/webhooks/README.md#postv2webhooks) - Create a webhook
- [`workspaceMembersGetV2WorkspaceMembers`](docs/sdks/workspacemembers/README.md#getv2workspacemembers) - List workspace members
- [`workspaceMembersGetV2WorkspaceMembersWorkspaceMemberId`](docs/sdks/workspacemembers/README.md#getv2workspacemembersworkspacememberid) - Get a workspace member

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.objects.getV2Objects({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.objects.getV2Objects();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`AttioBaseError`](./src/models/errors/attio-base-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Attio } from "@interfere/attio";
import * as errors from "@interfere/attio/models/errors";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  try {
    const result = await attio.objects.postV2Objects({
      data: {
        apiSlug: "people",
        singularNoun: "Person",
        pluralNoun: "People",
      },
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.AttioBaseError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.PostV2ObjectsSlugConflictError) {
        console.log(error.data$.statusCode); // number
        console.log(error.data$.type); // operations.PostV2ObjectsType
        console.log(error.data$.code); // operations.PostV2ObjectsCode
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`AttioBaseError`](./src/models/errors/attio-base-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (91)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`AttioBaseError`](./src/models/errors/attio-base-error.ts)**:
* [`PatchV2ObjectsObjectValidationTypeError`](./src/models/errors/patch-v2-objects-object-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesValidationTypeError`](./src/models/errors/post-v2-target-identifier-attributes-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`SystemEditUnauthorizedError`](./src/models/errors/system-edit-unauthorized-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesAttributeOptionsValidationTypeError`](./src/models/errors/post-v2-target-identifier-attributes-attribute-options-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PatchV2TargetIdentifierAttributesAttributeOptionsOptionValueNotFoundError`](./src/models/errors/patch-v2-target-identifier-attributes-attribute-options-option-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesAttributeStatusesValidationTypeError`](./src/models/errors/post-v2-target-identifier-attributes-attribute-statuses-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PatchV2TargetIdentifierAttributesAttributeStatusesStatusValueNotFoundError`](./src/models/errors/patch-v2-target-identifier-attributes-attribute-statuses-status-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`FilterError`](./src/models/errors/filter-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PutV2ObjectsObjectRecordsValueNotFoundError`](./src/models/errors/put-v2-objects-object-records-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2ObjectsObjectRecordsValueNotFoundError`](./src/models/errors/post-v2-objects-object-records-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PutV2ObjectsObjectRecordsRecordIdMissingValueError`](./src/models/errors/put-v2-objects-object-records-record-id-missing-value-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PatchV2ObjectsObjectRecordsRecordIdMissingValueError`](./src/models/errors/patch-v2-objects-object-records-record-id-missing-value-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesValidationTypeError`](./src/models/errors/get-v2-objects-object-records-record-id-attributes-attribute-values-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2ObjectsRecordsSearchValueNotFoundError`](./src/models/errors/post-v2-objects-records-search-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2ListsValueNotFoundError`](./src/models/errors/post-v2-lists-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PatchV2ListsListValueNotFoundError`](./src/models/errors/patch-v2-lists-list-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`MultipleMatchResultsError`](./src/models/errors/multiple-match-results-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2ListsListEntriesValueNotFoundError`](./src/models/errors/post-v2-lists-list-entries-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PutV2ListsListEntriesEntryIdImmutableValueError`](./src/models/errors/put-v2-lists-list-entries-entry-id-immutable-value-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PatchV2ListsListEntriesEntryIdImmutableValueError`](./src/models/errors/patch-v2-lists-list-entries-entry-id-immutable-value-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2TasksValidationTypeError`](./src/models/errors/post-v2-tasks-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PatchV2TasksTaskIdValidationTypeError`](./src/models/errors/patch-v2-tasks-task-id-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2CommentsValueNotFoundError`](./src/models/errors/post-v2-comments-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2MeetingsValidationTypeError`](./src/models/errors/post-v2-meetings-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2MeetingsMeetingIdCallRecordingsValidationTypeError`](./src/models/errors/post-v2-meetings-meeting-id-call-recordings-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2WebhooksValidationTypeError`](./src/models/errors/post-v2-webhooks-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`BillingError`](./src/models/errors/billing-error.ts): Forbidden. Status code `403`. Applicable to 1 of 67 methods.*
* [`AuthError`](./src/models/errors/auth-error.ts): Forbidden. Status code `403`. Applicable to 1 of 67 methods.*
* [`GetV2ObjectsObjectNotFoundError`](./src/models/errors/get-v2-objects-object-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PatchV2ObjectsObjectNotFoundError`](./src/models/errors/patch-v2-objects-object-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesNotFoundError`](./src/models/errors/post-v2-target-identifier-attributes-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2TargetIdentifierAttributesAttributeNotFoundError`](./src/models/errors/get-v2-target-identifier-attributes-attribute-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PatchV2TargetIdentifierAttributesAttributeNotFoundError`](./src/models/errors/patch-v2-target-identifier-attributes-attribute-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2TargetIdentifierAttributesAttributeOptionsNotFoundError`](./src/models/errors/get-v2-target-identifier-attributes-attribute-options-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesAttributeOptionsNotFoundError`](./src/models/errors/post-v2-target-identifier-attributes-attribute-options-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PatchV2TargetIdentifierAttributesAttributeOptionsOptionNotFoundError`](./src/models/errors/patch-v2-target-identifier-attributes-attribute-options-option-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2TargetIdentifierAttributesAttributeStatusesNotFoundError`](./src/models/errors/get-v2-target-identifier-attributes-attribute-statuses-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesAttributeStatusesNotFoundError`](./src/models/errors/post-v2-target-identifier-attributes-attribute-statuses-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PatchV2TargetIdentifierAttributesAttributeStatusesStatusNotFoundError`](./src/models/errors/patch-v2-target-identifier-attributes-attribute-statuses-status-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2ObjectsObjectRecordsQueryNotFoundError`](./src/models/errors/post-v2-objects-object-records-query-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PutV2ObjectsObjectRecordsNotFoundError`](./src/models/errors/put-v2-objects-object-records-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2ObjectsObjectRecordsNotFoundError`](./src/models/errors/post-v2-objects-object-records-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2ObjectsObjectRecordsRecordIdNotFoundError`](./src/models/errors/get-v2-objects-object-records-record-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PutV2ObjectsObjectRecordsRecordIdNotFoundError`](./src/models/errors/put-v2-objects-object-records-record-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteV2ObjectsObjectRecordsRecordIdNotFoundError`](./src/models/errors/delete-v2-objects-object-records-record-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PatchV2ObjectsObjectRecordsRecordIdNotFoundError`](./src/models/errors/patch-v2-objects-object-records-record-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesNotFoundError`](./src/models/errors/get-v2-objects-object-records-record-id-attributes-attribute-values-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2ListsNotFoundError`](./src/models/errors/post-v2-lists-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2ListsListNotFoundError`](./src/models/errors/get-v2-lists-list-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PatchV2ListsListNotFoundError`](./src/models/errors/patch-v2-lists-list-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2ListsListEntriesQueryNotFoundError`](./src/models/errors/post-v2-lists-list-entries-query-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PutV2ListsListEntriesNotFoundError`](./src/models/errors/put-v2-lists-list-entries-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2ListsListEntriesNotFoundError`](./src/models/errors/post-v2-lists-list-entries-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2ListsListEntriesEntryIdNotFoundError`](./src/models/errors/get-v2-lists-list-entries-entry-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PutV2ListsListEntriesEntryIdNotFoundError`](./src/models/errors/put-v2-lists-list-entries-entry-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteV2ListsListEntriesEntryIdNotFoundError`](./src/models/errors/delete-v2-lists-list-entries-entry-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PatchV2ListsListEntriesEntryIdNotFoundError`](./src/models/errors/patch-v2-lists-list-entries-entry-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2ListsListEntriesEntryIdAttributesAttributeValuesNotFoundError`](./src/models/errors/get-v2-lists-list-entries-entry-id-attributes-attribute-values-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2WorkspaceMembersWorkspaceMemberIdNotFoundError`](./src/models/errors/get-v2-workspace-members-workspace-member-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2NotesNotFoundError`](./src/models/errors/get-v2-notes-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2NotesNotFoundError`](./src/models/errors/post-v2-notes-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2NotesNoteIdNotFoundError`](./src/models/errors/get-v2-notes-note-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteV2NotesNoteIdNotFoundError`](./src/models/errors/delete-v2-notes-note-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2TasksNotFoundError`](./src/models/errors/post-v2-tasks-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2TasksTaskIdNotFoundError`](./src/models/errors/get-v2-tasks-task-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteV2TasksTaskIdNotFoundError`](./src/models/errors/delete-v2-tasks-task-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PatchV2TasksTaskIdNotFoundError`](./src/models/errors/patch-v2-tasks-task-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2ThreadsThreadIdNotFoundError`](./src/models/errors/get-v2-threads-thread-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2CommentsCommentIdNotFoundError`](./src/models/errors/get-v2-comments-comment-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteV2CommentsCommentIdNotFoundError`](./src/models/errors/delete-v2-comments-comment-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2MeetingsMeetingIdNotFoundError`](./src/models/errors/get-v2-meetings-meeting-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2MeetingsMeetingIdCallRecordingsNotFoundError`](./src/models/errors/post-v2-meetings-meeting-id-call-recordings-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdNotFoundError`](./src/models/errors/get-v2-meetings-meeting-id-call-recordings-call-recording-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteV2MeetingsMeetingIdCallRecordingsCallRecordingIdNotFoundError`](./src/models/errors/delete-v2-meetings-meeting-id-call-recordings-call-recording-id-not-found-error.ts): Call recording not found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2WebhooksWebhookIdNotFoundError`](./src/models/errors/get-v2-webhooks-webhook-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteV2WebhooksWebhookIdNotFoundError`](./src/models/errors/delete-v2-webhooks-webhook-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PatchV2WebhooksWebhookIdNotFoundError`](./src/models/errors/patch-v2-webhooks-webhook-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2ObjectsSlugConflictError`](./src/models/errors/post-v2-objects-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 1 of 67 methods.*
* [`PatchV2ObjectsObjectSlugConflictError`](./src/models/errors/patch-v2-objects-object-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesSlugConflictError`](./src/models/errors/post-v2-target-identifier-attributes-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesAttributeOptionsSlugConflictError`](./src/models/errors/post-v2-target-identifier-attributes-attribute-options-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 1 of 67 methods.*
* [`PatchV2TargetIdentifierAttributesAttributeOptionsOptionSlugConflictError`](./src/models/errors/patch-v2-target-identifier-attributes-attribute-options-option-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesAttributeStatusesSlugConflictError`](./src/models/errors/post-v2-target-identifier-attributes-attribute-statuses-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 1 of 67 methods.*
* [`PatchV2TargetIdentifierAttributesAttributeStatusesStatusSlugConflictError`](./src/models/errors/patch-v2-target-identifier-attributes-attribute-statuses-status-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 1 of 67 methods.*
* [`PostV2ListsSlugConflictError`](./src/models/errors/post-v2-lists-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 1 of 67 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  serverURL: "https://api.attio.com",
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.objects.getV2Objects();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Attio } from "@interfere/attio";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@interfere/attio/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Attio({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Attio } from "@interfere/attio";

const sdk = new Attio({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `ATTIO_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@interfere/attio&utm_campaign=typescript)
