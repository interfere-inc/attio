# OutputValue

A union of possible value types, as returned in response bodies.


## Supported Types

### `models.OutputValueActorReference`

```typescript
const value: models.OutputValueActorReference = {
  referencedActorType: "workspace-member",
  referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  attributeType: "actor-reference",
};
```

### `models.OutputValueCheckbox`

```typescript
const value: models.OutputValueCheckbox = {
  value: true,
  attributeType: "checkbox",
};
```

### `models.OutputValueCurrency`

```typescript
const value: models.OutputValueCurrency = {
  currencyValue: 99,
  currencyCode: "USD",
  attributeType: "currency",
};
```

### `models.OutputValueDate`

```typescript
const value: models.OutputValueDate = {
  attributeType: "date",
  value: "2023-01-01",
};
```

### `models.OutputValueDomain`

```typescript
const value: models.OutputValueDomain = {
  domain: "app.attio.com",
  rootDomain: "attio.com",
  attributeType: "domain",
};
```

### `models.OutputValueEmailAddress`

```typescript
const value: models.OutputValueEmailAddress = {
  originalEmailAddress: "alice@app.attio.com",
  emailAddress: "alice@app.attio.com",
  emailDomain: "app.attio.com",
  emailRootDomain: "attio.com",
  emailLocalSpecifier: "alice",
  attributeType: "email-address",
};
```

### `models.OutputValueRecordReference`

```typescript
const value: models.OutputValueRecordReference = {
  targetObject: "people",
  targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  attributeType: "record-reference",
};
```

### `models.OutputValueInteraction`

```typescript
const value: models.OutputValueInteraction = {
  interactionType: "email",
  interactedAt: new Date("2023-01-01T15:00:00.000000000Z"),
  ownerActor: {
    id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    type: "workspace-member",
  },
  attributeType: "interaction",
};
```

### `models.OutputValueLocation`

```typescript
const value: models.OutputValueLocation = {
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

### `models.OutputValueNumber`

```typescript
const value: models.OutputValueNumber = {
  value: 42,
  attributeType: "number",
};
```

### `models.OutputValuePersonalName`

```typescript
const value: models.OutputValuePersonalName = {
  firstName: "Ada",
  lastName: "Lovelace",
  fullName: "Ada Lovelace",
  attributeType: "personal-name",
};
```

### `models.OutputValuePhoneNumber`

```typescript
const value: models.OutputValuePhoneNumber = {
  originalPhoneNumber: "5558675309",
  countryCode: "US",
  phoneNumber: "+15558675309",
  attributeType: "phone-number",
};
```

### `models.OutputValueStatus1`

```typescript
const value: models.OutputValueStatus1 = {
  status: "11f07f01-c10f-4e05-a522-33e050bc52ee",
  attributeType: "status",
};
```

### `models.OutputValueStatus2`

```typescript
const value: models.OutputValueStatus2 = {
  status: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
      attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
      statusId: "11f07f01-c10f-4e05-a522-33e050bc52ee",
    },
    title: "In Progress",
    isArchived: false,
    celebrationEnabled: false,
    targetTimeInStatus: "P0Y0M1DT0H0M0S",
  },
  attributeType: "status",
};
```

### `models.OutputValueRating`

```typescript
const value: models.OutputValueRating = {
  value: 3,
  attributeType: "rating",
};
```

### `models.OutputValueSelect1`

```typescript
const value: models.OutputValueSelect1 = {
  option: "08c2c59a-c18e-40c6-8dc4-95415313b2ea",
  attributeType: "select",
};
```

### `models.OutputValueSelect2`

```typescript
const value: models.OutputValueSelect2 = {
  option: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
      attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
      optionId: "08c2c59a-c18e-40c6-8dc4-95415313b2ea",
    },
    title: "Medium",
    isArchived: false,
  },
  attributeType: "select",
};
```

### `models.OutputValueText`

```typescript
const value: models.OutputValueText = {
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  attributeType: "text",
};
```

### `models.OutputValueTimestamp`

```typescript
const value: models.OutputValueTimestamp = {
  attributeType: "timestamp",
  value: new Date("2023-01-01T15:00:00.000000000Z"),
};
```

