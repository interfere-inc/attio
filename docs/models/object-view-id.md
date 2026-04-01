# ObjectViewId

## Example Usage

```typescript
import { ObjectViewId } from "@interfere/attio/models";

let value: ObjectViewId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  viewId: "cf7aaeb5-7507-4a84-9c26-9d36e34d7b70",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `workspaceId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | A UUID identifying the workspace this view belongs to.                                 | 14beef7a-99f7-4534-a87e-70b564330a4c                                                   |
| `objectId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | A UUID identifying the object this view belongs to.                                    | 97052eb9-e65e-443f-a297-f2d9a4a7f795                                                   |
| `viewId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | A UUID identifying this view. Use this value as `filter_view_id` when listing records. | cf7aaeb5-7507-4a84-9c26-9d36e34d7b70                                                   |