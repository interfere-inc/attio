# StartUnion

When the meeting starts. Use a datetime and optional timezone for non-all day meetings, or a date for all day meetings.


## Supported Types

### `operations.Start1`

```typescript
const value: operations.Start1 = {
  datetime: new Date("2027-11-27T14:00:00Z"),
  timezone: "America/New_York",
};
```

### `operations.Start2`

```typescript
const value: operations.Start2 = {
  date: "2027-11-27",
};
```

