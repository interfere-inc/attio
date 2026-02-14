# PutV2ObjectsObjectRecordsResponse

Success

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsResponse } from "@interfere/attio/models/operations";

let value: PutV2ObjectsObjectRecordsResponse = {
  data: {
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
          attributeType: "timestamp",
          value: new Date("2023-01-01T15:00:00.000000000Z"),
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
          interactionType: "email",
          interactedAt: new Date("2023-01-01T15:00:00.000000000Z"),
          ownerActor: {
            id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
            type: "workspace-member",
          },
          attributeType: "interaction",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                     | [operations.PutV2ObjectsObjectRecordsDataResponse](../../models/operations/put-v2-objects-object-records-data-response.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |