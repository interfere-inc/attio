# @interfere/attio

Developer-friendly & type-safe Typescript SDK specifically catered to leverage the *Attio REST API*.

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
  const result = await attio.objects.list();

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
  const result = await attio.objects.list();

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

* [list](docs/sdks/attributes/README.md#list) - List attributes
* [create](docs/sdks/attributes/README.md#create) - Create an attribute
* [get](docs/sdks/attributes/README.md#get) - Get an attribute
* [update](docs/sdks/attributes/README.md#update) - Update an attribute
* [listOptions](docs/sdks/attributes/README.md#listoptions) - List select options
* [createOption](docs/sdks/attributes/README.md#createoption) - Create a select option
* [updateOption](docs/sdks/attributes/README.md#updateoption) - Update a select option
* [listStatuses](docs/sdks/attributes/README.md#liststatuses) - List statuses
* [createStatus](docs/sdks/attributes/README.md#createstatus) - Create a status
* [updateStatus](docs/sdks/attributes/README.md#updatestatus) - Update a status

### [CallRecordings](docs/sdks/callrecordings/README.md)

* [listByMeeting](docs/sdks/callrecordings/README.md#listbymeeting) - List call recordings
* [create](docs/sdks/callrecordings/README.md#create) - Create call recording
* [get](docs/sdks/callrecordings/README.md#get) - Get call recording
* [delete](docs/sdks/callrecordings/README.md#delete) - Delete call recording

### [Comments](docs/sdks/comments/README.md)

* [create](docs/sdks/comments/README.md#create) - Create a comment
* [get](docs/sdks/comments/README.md#get) - Get a comment
* [delete](docs/sdks/comments/README.md#delete) - Delete a comment

### [Entries](docs/sdks/entries/README.md)

* [query](docs/sdks/entries/README.md#query) - List entries
* [create](docs/sdks/entries/README.md#create) - Create an entry (add record to list)
* [upsertByParent](docs/sdks/entries/README.md#upsertbyparent) - Assert a list entry by parent
* [get](docs/sdks/entries/README.md#get) - Get a list entry
* [appendUpdate](docs/sdks/entries/README.md#appendupdate) - Update a list entry (append multiselect values)
* [update](docs/sdks/entries/README.md#update) - Update a list entry (overwrite multiselect values)
* [delete](docs/sdks/entries/README.md#delete) - Delete a list entry
* [listAttributeValues](docs/sdks/entries/README.md#listattributevalues) - List attribute values for a list entry

### [Lists](docs/sdks/lists/README.md)

* [list](docs/sdks/lists/README.md#list) - List all lists
* [create](docs/sdks/lists/README.md#create) - Create a list
* [get](docs/sdks/lists/README.md#get) - Get a list
* [update](docs/sdks/lists/README.md#update) - Update a list

### [Meetings](docs/sdks/meetings/README.md)

* [list](docs/sdks/meetings/README.md#list) - List meetings
* [createOrFind](docs/sdks/meetings/README.md#createorfind) - Find or create a meeting
* [get](docs/sdks/meetings/README.md#get) - Get a meeting

### [Meta](docs/sdks/meta/README.md)

* [identify](docs/sdks/meta/README.md#identify) - Identify

### [Notes](docs/sdks/notes/README.md)

* [list](docs/sdks/notes/README.md#list) - List notes
* [create](docs/sdks/notes/README.md#create) - Create a note
* [get](docs/sdks/notes/README.md#get) - Get a note
* [delete](docs/sdks/notes/README.md#delete) - Delete a note

### [Objects](docs/sdks/objects/README.md)

* [list](docs/sdks/objects/README.md#list) - List objects
* [create](docs/sdks/objects/README.md#create) - Create an object
* [get](docs/sdks/objects/README.md#get) - Get an object
* [update](docs/sdks/objects/README.md#update) - Update an object

### [Records](docs/sdks/records/README.md)

* [query](docs/sdks/records/README.md#query) - List records
* [create](docs/sdks/records/README.md#create) - Create a record
* [assert](docs/sdks/records/README.md#assert) - Assert a record
* [get](docs/sdks/records/README.md#get) - Get a record
* [update](docs/sdks/records/README.md#update) - Update a record (append multiselect values)
* [overwriteUpdate](docs/sdks/records/README.md#overwriteupdate) - Update a record (overwrite multiselect values)
* [delete](docs/sdks/records/README.md#delete) - Delete a record
* [getAttributeValues](docs/sdks/records/README.md#getattributevalues) - List record attribute values
* [listEntries](docs/sdks/records/README.md#listentries) - List record entries
* [search](docs/sdks/records/README.md#search) - Search records

### [ScimSchemas](docs/sdks/scimschemas/README.md)

* [list](docs/sdks/scimschemas/README.md#list) - List SCIM schemas

### [Tasks](docs/sdks/tasks/README.md)

* [list](docs/sdks/tasks/README.md#list) - List tasks
* [create](docs/sdks/tasks/README.md#create) - Create a task
* [get](docs/sdks/tasks/README.md#get) - Get a task
* [update](docs/sdks/tasks/README.md#update) - Update a task
* [delete](docs/sdks/tasks/README.md#delete) - Delete a task

### [Threads](docs/sdks/threads/README.md)

* [list](docs/sdks/threads/README.md#list) - List threads
* [get](docs/sdks/threads/README.md#get) - Get a thread

### [Transcripts](docs/sdks/transcripts/README.md)

* [get](docs/sdks/transcripts/README.md#get) - Get call transcript

### [Webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List webhooks
* [create](docs/sdks/webhooks/README.md#create) - Create a webhook
* [get](docs/sdks/webhooks/README.md#get) - Get a webhook
* [update](docs/sdks/webhooks/README.md#update) - Update a webhook
* [delete](docs/sdks/webhooks/README.md#delete) - Delete a webhook

### [WorkspaceMembers](docs/sdks/workspacemembers/README.md)

* [list](docs/sdks/workspacemembers/README.md#list) - List workspace members
* [get](docs/sdks/workspacemembers/README.md#get) - Get a workspace member

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

- [`attributesCreate`](docs/sdks/attributes/README.md#create) - Create an attribute
- [`attributesCreateOption`](docs/sdks/attributes/README.md#createoption) - Create a select option
- [`attributesCreateStatus`](docs/sdks/attributes/README.md#createstatus) - Create a status
- [`attributesGet`](docs/sdks/attributes/README.md#get) - Get an attribute
- [`attributesList`](docs/sdks/attributes/README.md#list) - List attributes
- [`attributesListOptions`](docs/sdks/attributes/README.md#listoptions) - List select options
- [`attributesListStatuses`](docs/sdks/attributes/README.md#liststatuses) - List statuses
- [`attributesUpdate`](docs/sdks/attributes/README.md#update) - Update an attribute
- [`attributesUpdateOption`](docs/sdks/attributes/README.md#updateoption) - Update a select option
- [`attributesUpdateStatus`](docs/sdks/attributes/README.md#updatestatus) - Update a status
- [`callRecordingsCreate`](docs/sdks/callrecordings/README.md#create) - Create call recording
- [`callRecordingsDelete`](docs/sdks/callrecordings/README.md#delete) - Delete call recording
- [`callRecordingsGet`](docs/sdks/callrecordings/README.md#get) - Get call recording
- [`callRecordingsListByMeeting`](docs/sdks/callrecordings/README.md#listbymeeting) - List call recordings
- [`commentsCreate`](docs/sdks/comments/README.md#create) - Create a comment
- [`commentsDelete`](docs/sdks/comments/README.md#delete) - Delete a comment
- [`commentsGet`](docs/sdks/comments/README.md#get) - Get a comment
- [`entriesAppendUpdate`](docs/sdks/entries/README.md#appendupdate) - Update a list entry (append multiselect values)
- [`entriesCreate`](docs/sdks/entries/README.md#create) - Create an entry (add record to list)
- [`entriesDelete`](docs/sdks/entries/README.md#delete) - Delete a list entry
- [`entriesGet`](docs/sdks/entries/README.md#get) - Get a list entry
- [`entriesListAttributeValues`](docs/sdks/entries/README.md#listattributevalues) - List attribute values for a list entry
- [`entriesQuery`](docs/sdks/entries/README.md#query) - List entries
- [`entriesUpdate`](docs/sdks/entries/README.md#update) - Update a list entry (overwrite multiselect values)
- [`entriesUpsertByParent`](docs/sdks/entries/README.md#upsertbyparent) - Assert a list entry by parent
- [`listsCreate`](docs/sdks/lists/README.md#create) - Create a list
- [`listsGet`](docs/sdks/lists/README.md#get) - Get a list
- [`listsList`](docs/sdks/lists/README.md#list) - List all lists
- [`listsUpdate`](docs/sdks/lists/README.md#update) - Update a list
- [`meetingsCreateOrFind`](docs/sdks/meetings/README.md#createorfind) - Find or create a meeting
- [`meetingsGet`](docs/sdks/meetings/README.md#get) - Get a meeting
- [`meetingsList`](docs/sdks/meetings/README.md#list) - List meetings
- [`metaIdentify`](docs/sdks/meta/README.md#identify) - Identify
- [`notesCreate`](docs/sdks/notes/README.md#create) - Create a note
- [`notesDelete`](docs/sdks/notes/README.md#delete) - Delete a note
- [`notesGet`](docs/sdks/notes/README.md#get) - Get a note
- [`notesList`](docs/sdks/notes/README.md#list) - List notes
- [`objectsCreate`](docs/sdks/objects/README.md#create) - Create an object
- [`objectsGet`](docs/sdks/objects/README.md#get) - Get an object
- [`objectsList`](docs/sdks/objects/README.md#list) - List objects
- [`objectsUpdate`](docs/sdks/objects/README.md#update) - Update an object
- [`recordsAssert`](docs/sdks/records/README.md#assert) - Assert a record
- [`recordsCreate`](docs/sdks/records/README.md#create) - Create a record
- [`recordsDelete`](docs/sdks/records/README.md#delete) - Delete a record
- [`recordsGet`](docs/sdks/records/README.md#get) - Get a record
- [`recordsGetAttributeValues`](docs/sdks/records/README.md#getattributevalues) - List record attribute values
- [`recordsListEntries`](docs/sdks/records/README.md#listentries) - List record entries
- [`recordsOverwriteUpdate`](docs/sdks/records/README.md#overwriteupdate) - Update a record (overwrite multiselect values)
- [`recordsQuery`](docs/sdks/records/README.md#query) - List records
- [`recordsSearch`](docs/sdks/records/README.md#search) - Search records
- [`recordsUpdate`](docs/sdks/records/README.md#update) - Update a record (append multiselect values)
- [`scimSchemasList`](docs/sdks/scimschemas/README.md#list) - List SCIM schemas
- [`tasksCreate`](docs/sdks/tasks/README.md#create) - Create a task
- [`tasksDelete`](docs/sdks/tasks/README.md#delete) - Delete a task
- [`tasksGet`](docs/sdks/tasks/README.md#get) - Get a task
- [`tasksList`](docs/sdks/tasks/README.md#list) - List tasks
- [`tasksUpdate`](docs/sdks/tasks/README.md#update) - Update a task
- [`threadsGet`](docs/sdks/threads/README.md#get) - Get a thread
- [`threadsList`](docs/sdks/threads/README.md#list) - List threads
- [`transcriptsGet`](docs/sdks/transcripts/README.md#get) - Get call transcript
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create a webhook
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete a webhook
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get a webhook
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List webhooks
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update a webhook
- [`workspaceMembersGet`](docs/sdks/workspacemembers/README.md#get) - Get a workspace member
- [`workspaceMembersList`](docs/sdks/workspacemembers/README.md#list) - List workspace members

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
  const result = await attio.objects.list({
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
  const result = await attio.objects.list();

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
    const result = await attio.objects.create({
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

<details><summary>Less common errors (58)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`AttioBaseError`](./src/models/errors/attio-base-error.ts)**:
* [`GetV2ObjectsObjectNotFoundError`](./src/models/errors/get-v2-objects-object-not-found-error.ts): Not Found. Status code `404`. Applicable to 9 of 67 methods.*
* [`GetV2TargetIdentifierAttributesAttributeNotFoundError`](./src/models/errors/get-v2-target-identifier-attributes-attribute-not-found-error.ts): Not Found. Status code `404`. Applicable to 9 of 67 methods.*
* [`GetV2ListsListNotFoundError`](./src/models/errors/get-v2-lists-list-not-found-error.ts): Not Found. Status code `404`. Applicable to 8 of 67 methods.*
* [`MissingValueError`](./src/models/errors/missing-value-error.ts): Bad Request. Status code `400`. Applicable to 2 of 67 methods.*
* [`PostV2ListsValueNotFoundError`](./src/models/errors/post-v2-lists-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 2 of 67 methods.*
* [`ImmutableValueError`](./src/models/errors/immutable-value-error.ts): Bad Request. Status code `400`. Applicable to 2 of 67 methods.*
* [`PostV2TasksValidationTypeError`](./src/models/errors/post-v2-tasks-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 2 of 67 methods.*
* [`GetV2ObjectsObjectRecordsRecordIdNotFoundError`](./src/models/errors/get-v2-objects-object-records-record-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 2 of 67 methods.*
* [`GetV2NotesNoteIdNotFoundError`](./src/models/errors/get-v2-notes-note-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 2 of 67 methods.*
* [`GetV2TasksTaskIdNotFoundError`](./src/models/errors/get-v2-tasks-task-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 2 of 67 methods.*
* [`GetV2WebhooksWebhookIdNotFoundError`](./src/models/errors/get-v2-webhooks-webhook-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 2 of 67 methods.*
* [`PostV2TargetIdentifierAttributesAttributeOptionsSlugConflictError`](./src/models/errors/post-v2-target-identifier-attributes-attribute-options-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 2 of 67 methods.*
* [`PostV2TargetIdentifierAttributesAttributeStatusesSlugConflictError`](./src/models/errors/post-v2-target-identifier-attributes-attribute-statuses-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 2 of 67 methods.*
* [`PatchV2ObjectsObjectValidationTypeError`](./src/models/errors/patch-v2-objects-object-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesValidationTypeError`](./src/models/errors/post-v2-target-identifier-attributes-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`SystemEditUnauthorizedError`](./src/models/errors/system-edit-unauthorized-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesAttributeOptionsValidationTypeError`](./src/models/errors/post-v2-target-identifier-attributes-attribute-options-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PatchV2TargetIdentifierAttributesAttributeOptionsOptionValueNotFoundError`](./src/models/errors/patch-v2-target-identifier-attributes-attribute-options-option-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesAttributeStatusesValidationTypeError`](./src/models/errors/post-v2-target-identifier-attributes-attribute-statuses-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PatchV2TargetIdentifierAttributesAttributeStatusesStatusValueNotFoundError`](./src/models/errors/patch-v2-target-identifier-attributes-attribute-statuses-status-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`FilterError`](./src/models/errors/filter-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2ObjectsObjectRecordsValueNotFoundError`](./src/models/errors/post-v2-objects-object-records-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PutV2ObjectsObjectRecordsValueNotFoundError`](./src/models/errors/put-v2-objects-object-records-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesValidationTypeError`](./src/models/errors/get-v2-objects-object-records-record-id-attributes-attribute-values-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2ObjectsRecordsSearchValueNotFoundError`](./src/models/errors/post-v2-objects-records-search-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2ListsListEntriesValueNotFoundError`](./src/models/errors/post-v2-lists-list-entries-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`MultipleMatchResultsError`](./src/models/errors/multiple-match-results-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2CommentsValueNotFoundError`](./src/models/errors/post-v2-comments-value-not-found-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2MeetingsValidationTypeError`](./src/models/errors/post-v2-meetings-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2MeetingsMeetingIdCallRecordingsValidationTypeError`](./src/models/errors/post-v2-meetings-meeting-id-call-recordings-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV2WebhooksValidationTypeError`](./src/models/errors/post-v2-webhooks-validation-type-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`BillingError`](./src/models/errors/billing-error.ts): Forbidden. Status code `403`. Applicable to 1 of 67 methods.*
* [`AuthError`](./src/models/errors/auth-error.ts): Forbidden. Status code `403`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesNotFoundError`](./src/models/errors/post-v2-target-identifier-attributes-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2ObjectsObjectRecordsQueryNotFoundError`](./src/models/errors/post-v2-objects-object-records-query-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2ListsNotFoundError`](./src/models/errors/post-v2-lists-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2ListsListEntriesNotFoundError`](./src/models/errors/post-v2-lists-list-entries-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PutV2ListsListEntriesNotFoundError`](./src/models/errors/put-v2-lists-list-entries-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2WorkspaceMembersWorkspaceMemberIdNotFoundError`](./src/models/errors/get-v2-workspace-members-workspace-member-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PatchV2TasksTaskIdNotFoundError`](./src/models/errors/patch-v2-tasks-task-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2ThreadsThreadIdNotFoundError`](./src/models/errors/get-v2-threads-thread-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2CommentsCommentIdNotFoundError`](./src/models/errors/get-v2-comments-comment-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteV2CommentsCommentIdNotFoundError`](./src/models/errors/delete-v2-comments-comment-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2MeetingsMeetingIdNotFoundError`](./src/models/errors/get-v2-meetings-meeting-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2MeetingsMeetingIdCallRecordingsNotFoundError`](./src/models/errors/post-v2-meetings-meeting-id-call-recordings-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetV2MeetingsMeetingIdCallRecordingsCallRecordingIdNotFoundError`](./src/models/errors/get-v2-meetings-meeting-id-call-recordings-call-recording-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteV2MeetingsMeetingIdCallRecordingsCallRecordingIdNotFoundError`](./src/models/errors/delete-v2-meetings-meeting-id-call-recordings-call-recording-id-not-found-error.ts): Call recording not found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteV2WebhooksWebhookIdNotFoundError`](./src/models/errors/delete-v2-webhooks-webhook-id-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV2ObjectsSlugConflictError`](./src/models/errors/post-v2-objects-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 1 of 67 methods.*
* [`PatchV2ObjectsObjectSlugConflictError`](./src/models/errors/patch-v2-objects-object-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 1 of 67 methods.*
* [`PostV2TargetIdentifierAttributesSlugConflictError`](./src/models/errors/post-v2-target-identifier-attributes-slug-conflict-error.ts): Conflict. Status code `409`. Applicable to 1 of 67 methods.*
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
  const result = await attio.objects.list();

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
