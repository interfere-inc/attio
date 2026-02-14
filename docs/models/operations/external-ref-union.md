# ExternalRefUnion

A consistent external reference used to match and de-duplicate meetings. Can be either a plain string (for external system IDs) or an object with `ical_uid` and `provider`. If you are writing data into Attio which is based upon calendar events that you have synced from a Google or Microsoft calendar, you must use the iCal format to avoid creating duplicate meetings inside Attio.


## Supported Types

### `string`

```typescript
const value: string = "external_meeting_12345";
```

### `operations.ExternalRef`

```typescript
const value: operations.ExternalRef = {
  icalUid: "1234567890",
  provider: "google",
  originalStartTime: "2027-11-27T14:00:00.000Z",
  isRecurring: false,
};
```

