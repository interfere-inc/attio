# PostV2ActivitiesActivityRecordsResponse

Success

## Example Usage

```typescript
import { PostV2ActivitiesActivityRecordsResponse } from "@interfere/attio/models/operations";

let value: PostV2ActivitiesActivityRecordsResponse = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      activityId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
      recordId: "5f4f2d9c-2b3e-4a83-9c76-1de3a3f14f26",
    },
    createdAt: "2022-11-21T13:22:49.061281000Z",
    values: {
      "key": [
        {
          activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
          activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
          createdByActor: {
            type: "workspace-member",
            id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
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
      "key1": [],
      "key2": [],
    },
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                 | [operations.PostV2ActivitiesActivityRecordsDataResponse](../../models/operations/post-v2-activities-activity-records-data-response.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |