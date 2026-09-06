# Extend

## Example Usage

```typescript
import { Extend } from "@interfere/attio/models";

let value: Extend = {
  schemaId: "b1d6a29e-6f6f-4a0a-9b0e-59f0a3e3f7a1",
  schemaSlug: "calls",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `schemaId`                             | *string*                               | :heavy_check_mark:                     | A UUID to identify the schema.         | b1d6a29e-6f6f-4a0a-9b0e-59f0a3e3f7a1   |
| `schemaSlug`                           | *string*                               | :heavy_check_mark:                     | The human-readable slug of the schema. | calls                                  |