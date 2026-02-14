# DataPeople

## Example Usage

```typescript
import { DataPeople } from "@interfere/attio/models/operations";

let value: DataPeople = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  },
  recordText: "Alan Mathison Turing",
  recordImage:
    "https://cdn.image-service.com/images/profiles/e67b8980-7dbb-46bf-95e3-266d7bceb096",
  objectSlug: "people",
  emailAddresses: [
    "alan@bletchley.gov.uk",
  ],
  phoneNumbers: [
    "+15558675309",
  ],
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | [operations.PostV2ObjectsRecordsSearchId2](../../models/operations/post-v2-objects-records-search-id2.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `recordText`                                                                                              | *string*                                                                                                  | :heavy_check_mark:                                                                                        | A human-readable label for the record. Present on records from all objects.                               | Alan Mathison Turing                                                                                      |
| `recordImage`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The image for the record.                                                                                 | https://cdn.image-service.com/images/profiles/e67b8980-7dbb-46bf-95e3-266d7bceb096                        |
| `objectSlug`                                                                                              | [operations.ObjectSlugPeople](../../models/operations/object-slug-people.md)                              | :heavy_check_mark:                                                                                        | The slug of the object this record belongs to.                                                            | people                                                                                                    |
| `emailAddresses`                                                                                          | *string*[]                                                                                                | :heavy_check_mark:                                                                                        | The person's email addresses.                                                                             |                                                                                                           |
| `phoneNumbers`                                                                                            | *string*[]                                                                                                | :heavy_check_mark:                                                                                        | The person's phone numbers.                                                                               |                                                                                                           |