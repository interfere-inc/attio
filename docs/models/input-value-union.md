# InputValueUnion

A union of possible value types, as required in request bodies.


## Supported Types

### `models.InputValueWorkspaceMember`

```typescript
const value: models.InputValueWorkspaceMember = {
  referencedActorType: "workspace-member",
  referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

### `models.InputValue1`

```typescript
const value: models.InputValue1 = {
  workspaceMemberEmailAddress: "alice@attio.com",
};
```

### `models.InputValue2`

```typescript
const value: models.InputValue2 = {
  value: true,
};
```

### `models.InputValue3`

```typescript
const value: models.InputValue3 = {
  currencyValue: 99,
};
```

### `models.InputValue4`

```typescript
const value: models.InputValue4 = {
  value: "2023-01-01",
};
```

### `models.InputValue5`

```typescript
const value: models.InputValue5 = {
  domain: "app.attio.com",
};
```

### `models.InputValue6`

```typescript
const value: models.InputValue6 = {
  emailAddress: "alice@app.attio.com",
};
```

### `models.InputValue7`

```typescript
const value: models.InputValue7 = {
  targetObject: "people",
  targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

### `models.InputValue8`

```typescript
const value: models.InputValue8 = {
  targetObject: "people",
  slugOrIdOfMatchingAttribute: [],
};
```

### `models.InputValue9`

```typescript
const value: models.InputValue9 = {
  interactionType: "email",
  interactedAt: new Date("2023-01-01T15:00:00.000000000Z"),
  ownerActor: {
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    type: "workspace-member",
  },
};
```

### `models.InputValue10`

```typescript
const value: models.InputValue10 = {
  line1: "1 Infinite Loop",
  line2: "Block 1",
  line3: "Hilldrop Estate",
  line4: "Westborough",
  locality: "Cupertino",
  region: "CA",
  postcode: "95014",
  countryCode: "US",
  latitude: "37.331741",
  longitude: "-122.030333",
};
```

### `models.InputValue11`

```typescript
const value: models.InputValue11 = {
  value: 42,
};
```

### `models.InputValue12`

```typescript
const value: models.InputValue12 = {
  firstName: "Ada",
  lastName: "Lovelace",
  fullName: "Ada Lovelace",
};
```

### `models.InputValue13`

```typescript
const value: models.InputValue13 = {
  originalPhoneNumber: "+15558675309",
  countryCode: "GB",
};
```

### `models.InputValue14`

```typescript
const value: models.InputValue14 = {
  status: "In Progress",
};
```

### `models.InputValue15`

```typescript
const value: models.InputValue15 = {
  value: 3,
};
```

### `models.InputValue16`

```typescript
const value: models.InputValue16 = {
  option: "Medium",
};
```

### `models.InputValue17`

```typescript
const value: models.InputValue17 = {
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
```

### `models.InputValue18`

```typescript
const value: models.InputValue18 = {
  value: new Date("2023-01-01T15:00:00.000000000Z"),
};
```

