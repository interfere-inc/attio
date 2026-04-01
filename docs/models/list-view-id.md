# ListViewId

## Example Usage

```typescript
import { ListViewId } from "@interfere/attio/models";

let value: ListViewId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  viewId: "cf7aaeb5-7507-4a84-9c26-9d36e34d7b70",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `workspaceId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | A UUID identifying the workspace this view belongs to.                                 | 14beef7a-99f7-4534-a87e-70b564330a4c                                                   |
| `listId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | A UUID identifying the list this view belongs to.                                      | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                   |
| `viewId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | A UUID identifying this view. Use this value as `filter_view_id` when listing entries. | cf7aaeb5-7507-4a84-9c26-9d36e34d7b70                                                   |