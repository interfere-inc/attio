# Emails

## Overview

Emails are messages synced from connected mailboxes.

### Available Operations

* [getV2Emails](#getv2emails) - List emails

## getV2Emails

Lists email metadata from your workspace's connected mailboxes. Email content is never returned.

At least one of `linked_object` with `linked_record_ids`, `participants`, or `domain` must be supplied; there is no way to list every email. When several are supplied they are combined with OR: emails matching any of the filters are returned.

> **Requesting access:** this endpoint is enabled per workspace and per app while it is in alpha. Contact [support@attio.com](mailto:support@attio.com) to request access.

**Things to know**

- Filters that identify your own workspace are ignored. This covers a member's or invited member's address, one of your mailboxes, and any of their domains. If every filter you supply is ignored, an empty page is returned.
- A filter that names a protected recipient in your workspace is rejected rather than ignored. This covers an address or a domain you supply directly. A record whose address or domain is a protected recipient is ignored instead, in the same way as the filters above.
- Emails from a mailbox shared with your workspace as metadata only are returned without a subject line. An email is left out entirely when it has no participant you may see — that is, when every participant outside your workspace is a protected recipient.
- An email that reached more than one of your mailboxes is returned once, and `id.mailbox_id` identifies whichever copy was readable.
- `linked_records` is derived when you make the request rather than stored, so it reflects your records as they are now.
- Emails are returned newest first, ordered by when they were sent. Each request scans a bounded number of emails, so a page can hold fewer emails than `limit`, or none at all, while more are still available. Keep paginating for as long as a `next_cursor` is returned, rather than stopping on a short page.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `email:read`, `record_permission:read`, `object_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/emails" method="get" path="/v2/emails" -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.emails.getV2Emails({
    domain: "fundstack.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "@interfere/attio/core.js";
import { emailsGetV2Emails } from "@interfere/attio/funcs/emails-get-v2-emails.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await emailsGetV2Emails(attio, {
    domain: "fundstack.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("emailsGetV2Emails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2EmailsRequest](../../models/operations/get-v2-emails-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2EmailsResponse](../../models/operations/get-v2-emails-response.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.AttioError | 4XX, 5XX          | \*/\*             |