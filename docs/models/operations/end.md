# End

When the meeting ends. Use a datetime and optional timezone for non-all day meetings, or a date for all day meetings.


## Supported Types

### `operations.MeetingEndDateTime`

```typescript
const value: operations.MeetingEndDateTime = {
  datetime: new Date("2027-11-27T15:00:00Z"),
  timezone: "America/New_York",
};
```

### `operations.MeetingEndDate`

```typescript
const value: operations.MeetingEndDate = {
  date: "2027-11-28",
};
```

