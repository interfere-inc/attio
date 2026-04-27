# ObjectView

## Example Usage

```typescript
import { ObjectView } from "@interfere/attio/models";

let value: ObjectView = {
  title: "All people",
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    viewId: "cf7aaeb5-7507-4a84-9c26-9d36e34d7b70",
  },
  createdAt: "2022-11-21T13:22:49.061281000Z",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `title`                                            | *string*                                           | :heavy_check_mark:                                 | The title of the view shown in the Attio app.      | All people                                         |
| `id`                                               | [models.ObjectViewId](../models/object-view-id.md) | :heavy_check_mark:                                 | N/A                                                |                                                    |
| `createdAt`                                        | *string*                                           | :heavy_check_mark:                                 | When the view was created.                         | 2022-11-21T13:22:49.061281000Z                     |