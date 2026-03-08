# Files

## Overview

Files are documents and folders linked to records, stored either in Attio or connected via external storage providers.

### Available Operations

* [getV2Files](#getv2files) - List files
* [postV2Files](#postv2files) - Create a folder
* [postV2FilesUpload](#postv2filesupload) - Upload a file
* [getV2FilesFileId](#getv2filesfileid) - Get a file
* [deleteV2FilesFileId](#deletev2filesfileid) - Delete a file
* [getV2FilesFileIdDownload](#getv2filesfileiddownload) - Download a file

## getV2Files

Lists internal files, externally connected files and folders across the workspace. Optional query parameters may be provided to filter results by object, record, storage provider or parent folder.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `object_configuration:read`, `record_permission:read`, `file:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/files" method="get" path="/v2/files" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.getV2Files({
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
import { filesGetV2Files } from "@interfere/attio/funcs/files-get-v2-files.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesGetV2Files(attio, {
    object: "<value>",
    recordId: "7e76e3c7-d094-4620-b8c3-0ec424086010",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesGetV2Files failed:", res.error);
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

## postV2Files

Creates a native folder entry or a connected file/folder entry on an object record.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/files" method="post" path="/v2/files" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.postV2Files({
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
import { filesPostV2Files } from "@interfere/attio/funcs/files-post-v2-files.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesPostV2Files(attio, {
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
    console.log("filesPostV2Files failed:", res.error);
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

## postV2FilesUpload

Uploads a file to native Attio storage for a record. Send multipart/form-data with a single binary field named `file` together with the body fields `object`, `record_id`, and optional `parent_folder_id`. Maximum file size is 50 MB.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

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
  const result = await attio.files.postV2FilesUpload({
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
import { filesPostV2FilesUpload } from "@interfere/attio/funcs/files-post-v2-files-upload.js";
import { openAsBlob } from "node:fs";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesPostV2FilesUpload(attio, {
    file: await openAsBlob("example.file"),
    object: "people",
    recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
    parentFolderId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesPostV2FilesUpload failed:", res.error);
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

## getV2FilesFileId

Get a single file entry by ID.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `file:read`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/files/{file_id}" method="get" path="/v2/files/{file_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.getV2FilesFileId({
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
import { filesGetV2FilesFileId } from "@interfere/attio/funcs/files-get-v2-files-file-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesGetV2FilesFileId(attio, {
    fileId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesGetV2FilesFileId failed:", res.error);
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

## deleteV2FilesFileId

Delete a single file by ID. Deleting a folder will delete all of its descendants.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/files/{file_id}" method="delete" path="/v2/files/{file_id}" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.deleteV2FilesFileId({
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
import { filesDeleteV2FilesFileId } from "@interfere/attio/funcs/files-delete-v2-files-file-id.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesDeleteV2FilesFileId(attio, {
    fileId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesDeleteV2FilesFileId failed:", res.error);
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

## getV2FilesFileIdDownload

Downloads a file by redirecting to a signed URL.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `object_configuration:read`, `record_permission:read`, `file:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/files/{file_id}/download" method="get" path="/v2/files/{file_id}/download" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.files.getV2FilesFileIdDownload({
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
import { filesGetV2FilesFileIdDownload } from "@interfere/attio/funcs/files-get-v2-files-file-id-download.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await filesGetV2FilesFileIdDownload(attio, {
    fileId: "97de9380-4280-4233-9bf3-e41cc1bc2101",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesGetV2FilesFileIdDownload failed:", res.error);
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