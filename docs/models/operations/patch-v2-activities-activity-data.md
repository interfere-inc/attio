# PatchV2ActivitiesActivityData

## Example Usage

```typescript
import { PatchV2ActivitiesActivityData } from "@interfere/attio/models/operations";

let value: PatchV2ActivitiesActivityData = {
  apiSlug: "site_visits",
  singularNoun: "Site visit",
  pluralNoun: "Site visits",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `apiSlug`                                                                                                           | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | A unique, human-readable slug to access the activity through URLs and API calls. Should be formatted in snake case. | site_visits                                                                                                         |
| `singularNoun`                                                                                                      | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The singular form of the activity's name.                                                                           | Site visit                                                                                                          |
| `pluralNoun`                                                                                                        | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The plural form of the activity's name.                                                                             | Site visits                                                                                                         |