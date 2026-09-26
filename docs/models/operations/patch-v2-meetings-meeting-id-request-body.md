# PatchV2MeetingsMeetingIdRequestBody

## Example Usage

```typescript
import { PatchV2MeetingsMeetingIdRequestBody } from "@interfere/attio/models/operations";

let value: PatchV2MeetingsMeetingIdRequestBody = {
  data: {
    linkedRecords: [
      {
        object: "people",
        recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [operations.PatchV2MeetingsMeetingIdData](../../models/operations/patch-v2-meetings-meeting-id-data.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |