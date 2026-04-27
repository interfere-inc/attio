# QueryRecordsValueInteraction

## Example Usage

```typescript
import { QueryRecordsValueInteraction } from "@interfere/attio/models/operations";

let value: QueryRecordsValueInteraction = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  interactionType: "email",
  interactedAt: new Date("2023-01-01T15:00:00.000000000Z"),
  ownerActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  attributeType: "interaction",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `activeFrom`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`. | 2023-01-01T15:00:00.000000000Z                                                                                              |
| `activeUntil`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | The point in time at which this value was deactivated. If `null`, the value is active.                                      | 2023-01-01T15:00:00.000000000Z                                                                                              |
| `createdByActor`                                                                                                            | [operations.QueryRecordsCreatedByActor8](../../models/operations/query-records-created-by-actor8.md)                        | :heavy_check_mark:                                                                                                          | The actor that created this value.                                                                                          | {<br/>"type": "workspace-member",<br/>"id": "50cf242c-7fa3-4cad-87d0-75b1af71c57b"<br/>}                                    |
| `interactionType`                                                                                                           | [operations.QueryRecordsInteractionType](../../models/operations/query-records-interaction-type.md)                         | :heavy_check_mark:                                                                                                          | The type of interaction e.g. calendar or email.                                                                             | email                                                                                                                       |
| `interactedAt`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | When the interaction occurred.                                                                                              | 2023-01-01T15:00:00.000000000Z                                                                                              |
| `ownerActor`                                                                                                                | [operations.QueryRecordsOwnerActor](../../models/operations/query-records-owner-actor.md)                                   | :heavy_check_mark:                                                                                                          | The actor that created this value.                                                                                          | {<br/>"type": "workspace-member",<br/>"id": "50cf242c-7fa3-4cad-87d0-75b1af71c57b"<br/>}                                    |
| `attributeType`                                                                                                             | *"interaction"*                                                                                                             | :heavy_check_mark:                                                                                                          | The attribute type of the value.                                                                                            | interaction                                                                                                                 |