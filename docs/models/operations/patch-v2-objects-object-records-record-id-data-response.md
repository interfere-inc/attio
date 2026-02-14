# PatchV2ObjectsObjectRecordsRecordIdDataResponse

## Example Usage

```typescript
import { PatchV2ObjectsObjectRecordsRecordIdDataResponse } from "@interfere/attio/models/operations";

let value: PatchV2ObjectsObjectRecordsRecordIdDataResponse = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  },
  createdAt: "2022-11-21T13:22:49.061281000Z",
  webUrl:
    "https://app.attio.com/salarya/person/bf071e1f-6035-429d-b874-d83ea64ea13b",
  values: {
    "key": [
      {
        activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
        activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
        createdByActor: {
          id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          type: "workspace-member",
        },
        line1: "1 Infinite Loop",
        line2: "Block 1",
        line3: "Hilldrop Estate",
        line4: "Westborough",
        locality: "Cupertino",
        region: "CA",
        postcode: "95014",
        countryCode: "US",
        latitude: "37.331741",
        longitude: "-122.030333",
        attributeType: "location",
      },
    ],
    "key1": [
      {
        activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
        activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
        createdByActor: {
          id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          type: "workspace-member",
        },
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        attributeType: "text",
      },
    ],
    "key2": [],
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | [operations.PatchV2ObjectsObjectRecordsRecordIdId](../../models/operations/patch-v2-objects-object-records-record-id-id.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `createdAt`                                                                                                                 | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | When this record was created.                                                                                               | 2022-11-21T13:22:49.061281000Z                                                                                              |
| `webUrl`                                                                                                                    | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | A URL that links directly to the record page in the Attio web application.                                                  | https://app.attio.com/salarya/person/bf071e1f-6035-429d-b874-d83ea64ea13b                                                   |
| `values`                                                                                                                    | Record<string, *operations.PatchV2ObjectsObjectRecordsRecordIdValueUnion*[]>                                                | :heavy_check_mark:                                                                                                          | A record type with an attribute `api_slug` as the key, and an array of value objects as the values.                         |                                                                                                                             |