# GetV2ThreadsResponse

Success

## Example Usage

```typescript
import { GetV2ThreadsResponse } from "@interfere/attio/models/operations";

let value: GetV2ThreadsResponse = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        threadId: "a649e4d9-435c-43fb-83ba-847b4876f27a",
      },
      comments: [],
      createdAt: "2023-01-01T15:00:00.000000000Z",
    },
  ],
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `data`                                    | [models.Thread](../../models/thread.md)[] | :heavy_check_mark:                        | N/A                                       |