# UpdateAttributeStatusRequestBody

## Example Usage

```typescript
import { UpdateAttributeStatusRequestBody } from "@interfere/attio/models/operations";

let value: UpdateAttributeStatusRequestBody = {
  data: {
    title: "In Progress",
    celebrationEnabled: true,
    targetTimeInStatus: "P0Y0M1DT0H0M0S",
    isArchived: false,
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [operations.UpdateAttributeStatusData](../../models/operations/update-attribute-status-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |