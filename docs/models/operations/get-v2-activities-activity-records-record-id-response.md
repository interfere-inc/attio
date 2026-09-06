# GetV2ActivitiesActivityRecordsRecordIdResponse

Success

## Example Usage

```typescript
import { GetV2ActivitiesActivityRecordsRecordIdResponse } from "@interfere/attio/models/operations";

let value: GetV2ActivitiesActivityRecordsRecordIdResponse = {
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
          status: {
            title: "In Progress",
            id: {
              workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
              objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
              attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
              statusId: "11f07f01-c10f-4e05-a522-33e050bc52ee",
            },
            isArchived: false,
            celebrationEnabled: false,
            targetTimeInStatus: "P0Y0M1DT0H0M0S",
          },
          attributeType: "status",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                | [operations.GetV2ActivitiesActivityRecordsRecordIdData](../../models/operations/get-v2-activities-activity-records-record-id-data.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |