# PostV2ActivitiesActivityRecordsQueryValueUnion


## Supported Types

### `operations.PostV2ActivitiesActivityRecordsQueryValueActorReference`

```typescript
const value:
  operations.PostV2ActivitiesActivityRecordsQueryValueActorReference = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueCheckbox`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueCheckbox = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueCurrency`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueCurrency = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueDate`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueDate = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueDomain`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueDomain = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueEmailAddress`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueEmailAddress =
  {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueRecordReference`

```typescript
const value:
  operations.PostV2ActivitiesActivityRecordsQueryValueRecordReference = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueInteraction`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueInteraction = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueLocation`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueLocation = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueNumber`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueNumber = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValuePersonalName`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValuePersonalName =
  {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValuePhoneNumber`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValuePhoneNumber = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueStatus`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueStatus = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueRating`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueRating = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueSelect`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueSelect = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueText`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueText = {
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

### `operations.PostV2ActivitiesActivityRecordsQueryValueTimestamp`

```typescript
const value: operations.PostV2ActivitiesActivityRecordsQueryValueTimestamp = {
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

