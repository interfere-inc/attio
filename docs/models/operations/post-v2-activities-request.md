# PostV2ActivitiesRequest

## Example Usage

```typescript
import { PostV2ActivitiesRequest } from "@interfere/attio/models/operations";

let value: PostV2ActivitiesRequest = {
  data: {
    apiSlug: "site_visits",
    singularNoun: "Site visit",
    pluralNoun: "Site visits",
    extends: "interactions",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [operations.PostV2ActivitiesData](../../models/operations/post-v2-activities-data.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |