# PostV2ListsListEntriesQueryResponse

Success

## Example Usage

```typescript
import { PostV2ListsListEntriesQueryResponse } from "@interfere/attio/models/operations";

let value: PostV2ListsListEntriesQueryResponse = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
        entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
      },
      parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      parentObject: "people",
      createdAt: "2022-11-21T13:22:49.061281000Z",
      entryValues: {
        "status": [
          {
            activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
            activeUntil: null,
            createdByActor: {
              id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
              type: "workspace-member",
            },
            status: {
              id: {
                workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
                objectId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
                attributeId: "e350362f-4b55-4c0f-93f4-379ae8ff2e5b",
                statusId: "527def35-7994-4ef7-9584-80ef8de352a8",
              },
              title: "In Progress",
              isArchived: false,
              celebrationEnabled: false,
              targetTimeInStatus: null,
            },
            attributeType: "status",
          },
        ],
        "created_at": [
          {
            activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
            activeUntil: null,
            createdByActor: {
              id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
              type: "workspace-member",
            },
            attributeType: "timestamp",
            value: new Date("2023-01-01T15:00:00.000000000Z"),
          },
        ],
        "created_by": [
          {
            activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
            activeUntil: null,
            createdByActor: {
              id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
              type: "workspace-member",
            },
            referencedActorType: "workspace-member",
            referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
            attributeType: "actor-reference",
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                           | [operations.PostV2ListsListEntriesQueryData](../../models/operations/post-v2-lists-list-entries-query-data.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |