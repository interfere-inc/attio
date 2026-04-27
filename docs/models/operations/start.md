# Start

When the meeting starts. Use a datetime and optional timezone for non-all day meetings, or a date for all day meetings.


## Supported Types

### `operations.MeetingStartDateTime`

```typescript
const value: operations.MeetingStartDateTime = {
  datetime: new Date("2027-11-27T14:00:00Z"),
  timezone: "America/New_York",
};
```

### `operations.MeetingStartDate`

```typescript
const value: operations.MeetingStartDate = {
  date: "2027-11-27",
};
```

