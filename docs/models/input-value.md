# InputValue

A union of possible value types, as required in request bodies.


## Supported Types

### `models.InputValueWorkspaceMember`

```typescript
const value: models.InputValueWorkspaceMember = {
  referencedActorType: "workspace-member",
  referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

### `models.InputValueWorkspaceMemberByEmail`

```typescript
const value: models.InputValueWorkspaceMemberByEmail = {
  workspaceMemberEmailAddress: "alice@attio.com",
};
```

### `models.InputValueCheckbox`

```typescript
const value: models.InputValueCheckbox = {
  value: true,
};
```

### `models.InputValueCurrency`

```typescript
const value: models.InputValueCurrency = {
  currencyValue: 99,
};
```

### `models.InputValueDate`

```typescript
const value: models.InputValueDate = {
  value: "2023-01-01",
};
```

### `models.InputValueDomain`

```typescript
const value: models.InputValueDomain = {
  domain: "app.attio.com",
};
```

### `models.InputValueEmailAddress`

```typescript
const value: models.InputValueEmailAddress = {
  emailAddress: "alice@app.attio.com",
};
```

### `models.InputValueRecordReferenceById`

```typescript
const value: models.InputValueRecordReferenceById = {
  targetObject: "people",
  targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

### `models.InputValueRecordReferenceByMatching`

```typescript
const value: models.InputValueRecordReferenceByMatching = {
  targetObject: "people",
  slugOrIdOfMatchingAttribute: [
    {},
  ],
};
```

### `models.InputValueInteraction`

```typescript
const value: models.InputValueInteraction = {
  interactionType: "email",
  interactedAt: new Date("2023-01-01T15:00:00.000000000Z"),
  ownerActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
};
```

### `models.InputValueLocation`

```typescript
const value: models.InputValueLocation = {
  line1: "1 Infinite Loop",
  line2: "Block 1",
  line3: "Hilldrop Estate",
  line4: "Westborough",
  locality: "Cupertino",
  region: "CA",
  postcode: "95014",
  locationCountryCode: "US",
  latitude: "37.331741",
  longitude: "-122.030333",
};
```

### `models.InputValueNumber`

```typescript
const value: models.InputValueNumber = {
  value: 42,
};
```

### `models.InputValuePersonalName`

```typescript
const value: models.InputValuePersonalName = {
  firstName: "Ada",
  lastName: "Lovelace",
  fullName: "Ada Lovelace",
};
```

### `models.InputValuePhoneNumber`

```typescript
const value: models.InputValuePhoneNumber = {
  originalPhoneNumber: "+15558675309",
  phoneCountryCode: "GB",
};
```

### `models.InputValueStatus`

```typescript
const value: models.InputValueStatus = {
  status: "In Progress",
};
```

### `models.InputValueRating`

```typescript
const value: models.InputValueRating = {
  value: 3,
};
```

### `models.InputValueSelect`

```typescript
const value: models.InputValueSelect = {
  option: "Medium",
};
```

### `models.InputValueText`

```typescript
const value: models.InputValueText = {
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
```

### `models.InputValueTimestamp`

```typescript
const value: models.InputValueTimestamp = {
  value: new Date("2023-01-01T15:00:00.000000000Z"),
};
```

