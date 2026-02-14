# PostV2ObjectsObjectRecordsDataResponse

## Example Usage

```typescript
import { PostV2ObjectsObjectRecordsDataResponse } from "@interfere/attio/models/operations";

let value: PostV2ObjectsObjectRecordsDataResponse = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  },
  createdAt: "2022-11-21T13:22:49.061281000Z",
  webUrl:
    "https://app.attio.com/salarya/person/bf071e1f-6035-429d-b874-d83ea64ea13b",
  values: {
    "key": [],
    "key1": [],
    "key2": [
      {
        activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
        activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
        createdByActor: {
          id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          type: "workspace-member",
        },
        targetObject: "people",
        targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        attributeType: "record-reference",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | [operations.PostV2ObjectsObjectRecordsId](../../models/operations/post-v2-objects-object-records-id.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `createdAt`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | When this record was created.                                                                           | 2022-11-21T13:22:49.061281000Z                                                                          |
| `webUrl`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | A URL that links directly to the record page in the Attio web application.                              | https://app.attio.com/salarya/person/bf071e1f-6035-429d-b874-d83ea64ea13b                               |
| `values`                                                                                                | Record<string, *operations.PostV2ObjectsObjectRecordsValueUnion*[]>                                     | :heavy_check_mark:                                                                                      | A record type with an attribute `api_slug` as the key, and an array of value objects as the values.     |                                                                                                         |