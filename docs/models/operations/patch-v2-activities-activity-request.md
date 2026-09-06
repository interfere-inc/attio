# PatchV2ActivitiesActivityRequest

## Example Usage

```typescript
import { PatchV2ActivitiesActivityRequest } from "@interfere/attio/models/operations";

let value: PatchV2ActivitiesActivityRequest = {
  activity: "phone_calls",
  body: {
    data: {
      apiSlug: "site_visits",
      singularNoun: "Site visit",
      pluralNoun: "Site visits",
    },
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `activity`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     | phone_calls                                                                                                             |
| `body`                                                                                                                  | [operations.PatchV2ActivitiesActivityRequestBody](../../models/operations/patch-v2-activities-activity-request-body.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |