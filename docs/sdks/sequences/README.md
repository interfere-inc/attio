# Sequences

## Overview

Sequences are automated email campaigns sent from Attio.

### Available Operations

* [postV2SequencesUnsubscribedEmails](#postv2sequencesunsubscribedemails) - Add emails to the unsubscribe list

## postV2SequencesUnsubscribedEmails

Adds email addresses to the workspace's sequence unsubscribe list. Email addresses on the unsubscribe list cannot be enrolled in any sequence, and any of their active sequence runs are exited. Email addresses that are already on the unsubscribe list are ignored, so this endpoint is safe to retry.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `sequence_unsubscribe:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/sequences/unsubscribed_emails" method="post" path="/v2/sequences/unsubscribed_emails" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.sequences.postV2SequencesUnsubscribedEmails({
    data: {
      emailAddresses: [
        "person@example.com",
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
import { sequencesPostV2SequencesUnsubscribedEmails } from "@interfere/attio/funcs/sequences-post-v2-sequences-unsubscribed-emails.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await sequencesPostV2SequencesUnsubscribedEmails(attio, {
    data: {
      emailAddresses: [
        "person@example.com",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sequencesPostV2SequencesUnsubscribedEmails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2SequencesUnsubscribedEmailsRequest](../../models/operations/post-v2-sequences-unsubscribed-emails-request.md)                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2SequencesUnsubscribedEmailsResponse](../../models/operations/post-v2-sequences-unsubscribed-emails-response.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.PostV2SequencesUnsubscribedEmailsValidationTypeError | 400                                                         | application/json                                            |
| errors.AttioError                                           | 4XX, 5XX                                                    | \*/\*                                                       |