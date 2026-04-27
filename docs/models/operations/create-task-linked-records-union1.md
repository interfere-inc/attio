# CreateTaskLinkedRecordsUnion1

Records linked to the task. Records can be linked by domain (for companies), email address (for people), record ID (for all objects) or by a unique matching attribute (for all objects). Creating record links within task content text is not possible via the API at present.


## Supported Types

### `string[]`

```typescript
const value: string[] = [
  "person@company.com",
  "fundstack.com",
];
```

### `operations.CreateTaskLinkedRecordsUnion2[]`

```typescript
const value: operations.CreateTaskLinkedRecordsUnion2[] = [];
```

