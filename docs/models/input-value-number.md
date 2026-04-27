# InputValueNumber

## Example Usage

```typescript
import { InputValueNumber } from "@interfere/attio/models";

let value: InputValueNumber = {
  value: 42,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `value`                                 | *number*                                | :heavy_check_mark:                      | Numbers are persisted as 64 bit floats. | 42                                      |