# CreateAttributeStatusRequestBody

## Example Usage

```typescript
import { CreateAttributeStatusRequestBody } from "@interfere/attio/models/operations";

let value: CreateAttributeStatusRequestBody = {
  data: {
    title: "In Progress",
    celebrationEnabled: true,
    targetTimeInStatus: "P0Y0M1DT0H0M0S",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [operations.CreateAttributeStatusData](../../models/operations/create-attribute-status-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |