# UpdateAttributeDefaultValueUnion

The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute. Default values are not currently supported on people or company objects.


## Supported Types

### `operations.UpdateAttributeDefaultValueDynamic`

```typescript
const value: operations.UpdateAttributeDefaultValueDynamic = {
  type: "dynamic",
  template: "current-user",
};
```

### `operations.UpdateAttributeDefaultValueStatic`

```typescript
const value: operations.UpdateAttributeDefaultValueStatic = {
  type: "static",
  template: [
    {
      value: 5,
    },
  ],
};
```

