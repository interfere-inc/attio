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

Lists internal files, externally connected files and folders across the workspace. Optional query parameters may be provided to filter results by object, record, storage provider or parent folder.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `object_configuration:read`, `record_permission:read`, `file:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/files" method="get" path="/v2/files" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.list({
    object: "<value>",
    recordId: "7e76e3c7-d094-4620-b8c3-0ec424086010",
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
    recordId: "7e76e3c7-d094-4620-b8c3-0ec424086010",
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
| `request`                                                                                                                                                                      | [operations.GetV2FilesRequest](../../models/operations/get-v2-files-request.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2FilesResponse](../../models/operations/get-v2-files-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## create

Creates a native folder entry or a connected file/folder entry on an object record.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/files" method="post" path="/v2/files" -->
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
    fileType: "connected-file",
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
    fileType: "connected-file",
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
| `request`                                                                                                                                                                      | [operations.PostV2FilesRequest](../../models/operations/post-v2-files-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2FilesResponse](../../models/operations/post-v2-files-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## upload

Uploads a file to native Attio storage for a record. Send multipart/form-data with a single binary field named `file` together with the body fields `object`, `record_id`, and optional `parent_folder_id`. Maximum file size is 50 MB.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/files/upload" method="post" path="/v2/files/upload" -->
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
| `request`                                                                                                                                                                      | [operations.PostV2FilesUploadRequest](../../models/operations/post-v2-files-upload-request.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2FilesUploadResponse](../../models/operations/post-v2-files-upload-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |

## get

Get a single file entry by ID.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/files/{file_id}" method="get" path="/v2/files/{file_id}" -->
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
| `request`                                                                                                                                                                      | [operations.GetV2FilesFileIdRequest](../../models/operations/get-v2-files-file-id-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2FilesFileIdResponse](../../models/operations/get-v2-files-file-id-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetV2FilesFileIdNotFoundError | 404                                  | application/json                     |
| errors.AttioError                    | 4XX, 5XX                             | \*/\*                                |

## delete

Delete a single file by ID. Deleting a folder will delete all of its descendants.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/files/{file_id}" method="delete" path="/v2/files/{file_id}" -->
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
| `request`                                                                                                                                                                      | [operations.DeleteV2FilesFileIdRequest](../../models/operations/delete-v2-files-file-id-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2FilesFileIdResponse](../../models/operations/delete-v2-files-file-id-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetV2FilesFileIdNotFoundError | 404                                  | application/json                     |
| errors.AttioError                    | 4XX, 5XX                             | \*/\*                                |

## download

Downloads a file by redirecting to a signed URL.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `object_configuration:read`, `record_permission:read`, `file:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/files/{file_id}/download" method="get" path="/v2/files/{file_id}/download" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.download({
    fileId: "97de9380-4280-4233-9bf3-e41cc1bc2101",
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
    fileId: "97de9380-4280-4233-9bf3-e41cc1bc2101",
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
| `request`                                                                                                                                                                      | [operations.GetV2FilesFileIdDownloadRequest](../../models/operations/get-v2-files-file-id-download-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2FilesFileIdDownloadResponse](../../models/operations/get-v2-files-file-id-download-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |