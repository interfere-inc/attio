# ListView

## Example Usage

```typescript
import { ListView } from "@interfere/attio/models";

let value: ListView = {
  title: "All people",
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    viewId: "cf7aaeb5-7507-4a84-9c26-9d36e34d7b70",
  },
  createdAt: "2022-11-21T13:22:49.061281000Z",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `title`                                        | *string*                                       | :heavy_check_mark:                             | The title of the view shown in the Attio app.  | All people                                     |
| `id`                                           | [models.ListViewId](../models/list-view-id.md) | :heavy_check_mark:                             | N/A                                            |                                                |
| `createdAt`                                    | *string*                                       | :heavy_check_mark:                             | When the view was created.                     | 2022-11-21T13:22:49.061281000Z                 |