# Files

## Overview

Files are documents and folders linked to records, stored either in Attio or connected via external storage providers.

### Available Operations

* [list](#list) - List files
* [create](#create) - Create a folder
* [upload](#upload) - Upload a file
* [get](#get) - Get a file
* [delete](#delete) - Delete a file
* [download](#download) - Download a file

## list

Lists internal files, externally connected files and folders for a specific record. Use the `object` and `record_id` query parameters to specify the record. Optional query parameters may be provided to filter results by storage provider or parent folder.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `object_configuration:read`, `record_permission:read`, `file:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listFiles" method="get" path="/v2/files" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.list({
    object: "<value>",
    recordId: "d1133bf2-4853-4436-9a03-23739895ab98",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { filesList } from "@interfere/attio/funcs/files-list.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesList(attio, {
    object: "<value>",
    recordId: "d1133bf2-4853-4436-9a03-23739895ab98",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListFilesRequest](../../models/operations/list-files-request.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListFilesResponse](../../models/operations/list-files-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## create

Creates a native folder entry or a connected file/folder entry on an object record.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createFile" method="post" path="/v2/files" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.create({
    object: "people",
    recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
    storageProvider: "google-drive",
    externalProviderFileId: "01ISGXZ5BRAMVD7SEPXNCYS4XGKT3YTOKQ",
    fileType: "connected-folder",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { filesCreate } from "@interfere/attio/funcs/files-create.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesCreate(attio, {
    object: "people",
    recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
    storageProvider: "google-drive",
    externalProviderFileId: "01ISGXZ5BRAMVD7SEPXNCYS4XGKT3YTOKQ",
    fileType: "connected-folder",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateFileRequest](../../models/operations/create-file-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateFileResponse](../../models/operations/create-file-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## upload

Uploads a file to native Attio storage for a record. Send multipart/form-data with a single binary field named `file` together with the body fields `object`, `record_id`, and optional `parent_folder_id`. Maximum file size is 50 MB.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadFile" method="post" path="/v2/files/upload" -->
```typescript
import { Attio } from "@interfere/attio";
import { openAsBlob } from "node:fs";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.upload({
    file: await openAsBlob("example.file"),
    object: "people",
    recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
    parentFolderId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { filesUpload } from "@interfere/attio/funcs/files-upload.js";
import { openAsBlob } from "node:fs";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesUpload(attio, {
    file: await openAsBlob("example.file"),
    object: "people",
    recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
    parentFolderId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesUpload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadFileRequest](../../models/operations/upload-file-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UploadFileResponse](../../models/operations/upload-file-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.UploadFileAuthError | 403                        | application/json           |
| errors.AttioError          | 4XX, 5XX                   | \*/\*                      |

## get

Get a single file entry by ID.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFile" method="get" path="/v2/files/{file_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.get({
    fileId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { filesGet } from "@interfere/attio/funcs/files-get.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesGet(attio, {
    fileId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFileRequest](../../models/operations/get-file-request.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetFileResponse](../../models/operations/get-file-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.GetFileNotFoundError | 404                         | application/json            |
| errors.AttioError           | 4XX, 5XX                    | \*/\*                       |

## delete

Delete a single file by ID. Deleting a folder will delete all of its descendants.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteFile" method="delete" path="/v2/files/{file_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.delete({
    fileId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { filesDelete } from "@interfere/attio/funcs/files-delete.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesDelete(attio, {
    fileId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteFileRequest](../../models/operations/delete-file-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteFileResponse](../../models/operations/delete-file-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.DeleteFileNotFoundError | 404                            | application/json               |
| errors.AttioError              | 4XX, 5XX                       | \*/\*                          |

## download

Downloads a file by redirecting to a signed URL.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `object_configuration:read`, `record_permission:read`, `file:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="downloadFile" method="get" path="/v2/files/{file_id}/download" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.download({
    fileId: "341216b9-3af1-46ca-ac0d-3fac7f3f07aa",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { filesDownload } from "@interfere/attio/funcs/files-download.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesDownload(attio, {
    fileId: "341216b9-3af1-46ca-ac0d-3fac7f3f07aa",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesDownload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DownloadFileRequest](../../models/operations/download-file-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DownloadFileResponse](../../models/operations/download-file-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |