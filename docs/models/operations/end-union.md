# EndUnion

When the meeting ends. Use a datetime and optional timezone for non-all day meetings, or a date for all day meetings.


## Supported Types

### `operations.End1`

```typescript
const value: operations.End1 = {
  datetime: new Date("2027-11-27T15:00:00Z"),
  timezone: "America/New_York",
};
```

### `operations.End2`

```typescript
const value: operations.End2 = {
  date: "2027-11-28",
};
```

