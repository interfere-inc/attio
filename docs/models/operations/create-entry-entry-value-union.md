# CreateEntryEntryValueUnion


## Supported Types

### `operations.CreateEntryEntryValueActorReference`

```typescript
const value: operations.CreateEntryEntryValueActorReference = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  referencedActorType: "workspace-member",
  referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  attributeType: "actor-reference",
};
```

### `operations.CreateEntryEntryValueCheckbox`

```typescript
const value: operations.CreateEntryEntryValueCheckbox = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  value: true,
  attributeType: "checkbox",
};
```

### `operations.CreateEntryEntryValueCurrency`

```typescript
const value: operations.CreateEntryEntryValueCurrency = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  currencyValue: 99,
  currencyCode: "USD",
  attributeType: "currency",
};
```

### `operations.CreateEntryEntryValueDate`

```typescript
const value: operations.CreateEntryEntryValueDate = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  attributeType: "date",
  value: "2023-01-01",
};
```

### `operations.CreateEntryEntryValueDomain`

```typescript
const value: operations.CreateEntryEntryValueDomain = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  domain: "app.attio.com",
  rootDomain: "attio.com",
  attributeType: "domain",
};
```

### `operations.CreateEntryEntryValueEmailAddress`

```typescript
const value: operations.CreateEntryEntryValueEmailAddress = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  originalEmailAddress: "alice@app.attio.com",
  emailAddress: "alice@app.attio.com",
  emailDomain: "app.attio.com",
  emailRootDomain: "attio.com",
  emailLocalSpecifier: "alice",
  attributeType: "email-address",
};
```

### `operations.CreateEntryEntryValueRecordReference`

```typescript
const value: operations.CreateEntryEntryValueRecordReference = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  targetObject: "people",
  targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  attributeType: "record-reference",
};
```

### `operations.CreateEntryEntryValueInteraction`

```typescript
const value: operations.CreateEntryEntryValueInteraction = {
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

### `operations.CreateEntryEntryValueLocation`

```typescript
const value: operations.CreateEntryEntryValueLocation = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
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
  attributeType: "location",
};
```

### `operations.CreateEntryEntryValueNumber`

```typescript
const value: operations.CreateEntryEntryValueNumber = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  value: 42,
  attributeType: "number",
};
```

### `operations.CreateEntryEntryValuePersonalName`

```typescript
const value: operations.CreateEntryEntryValuePersonalName = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  firstName: "Ada",
  lastName: "Lovelace",
  fullName: "Ada Lovelace",
  attributeType: "personal-name",
};
```

### `operations.CreateEntryEntryValuePhoneNumber`

```typescript
const value: operations.CreateEntryEntryValuePhoneNumber = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  originalPhoneNumber: "5558675309",
  countryCode: "US",
  phoneNumber: "+15558675309",
  attributeType: "phone-number",
};
```

### `operations.CreateEntryEntryValueStatus`

```typescript
const value: operations.CreateEntryEntryValueStatus = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  status: {
    title: "In Progress",
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
      attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
      statusId: "11f07f01-c10f-4e05-a522-33e050bc52ee",
    },
    isArchived: false,
    celebrationEnabled: false,
    targetTimeInStatus: "P0Y0M1DT0H0M0S",
  },
  attributeType: "status",
};
```

### `operations.CreateEntryEntryValueRating`

```typescript
const value: operations.CreateEntryEntryValueRating = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  value: 3,
  attributeType: "rating",
};
```

### `operations.CreateEntryEntryValueSelect`

```typescript
const value: operations.CreateEntryEntryValueSelect = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  option: {
    title: "Medium",
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
      attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
      optionId: "08c2c59a-c18e-40c6-8dc4-95415313b2ea",
    },
    isArchived: false,
  },
  attributeType: "select",
};
```

### `operations.CreateEntryEntryValueText`

```typescript
const value: operations.CreateEntryEntryValueText = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  attributeType: "text",
};
```

### `operations.CreateEntryEntryValueTimestamp`

```typescript
const value: operations.CreateEntryEntryValueTimestamp = {
  activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
  activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
  createdByActor: {
    type: "workspace-member",
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  },
  attributeType: "timestamp",
  value: new Date("2023-01-01T15:00:00.000000000Z"),
};
```

