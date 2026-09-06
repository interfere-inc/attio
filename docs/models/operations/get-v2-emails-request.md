# GetV2EmailsRequest

## Example Usage

```typescript
import { GetV2EmailsRequest } from "@interfere/attio/models/operations";

let value: GetV2EmailsRequest = {
  domain: "fundstack.com",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                | 25                 |
| `cursor`           | *string*           | :heavy_minus_sign: | N/A                |                    |
| `linkedObject`     | *string*           | :heavy_minus_sign: | N/A                |                    |
| `linkedRecordIds`  | *string*           | :heavy_minus_sign: | N/A                |                    |
| `participants`     | *string*           | :heavy_minus_sign: | N/A                |                    |
| `domain`           | *string*           | :heavy_minus_sign: | N/A                | fundstack.com      |
| `sentAfter`        | *string*           | :heavy_minus_sign: | N/A                |                    |
| `sentBefore`       | *string*           | :heavy_minus_sign: | N/A                |                    |