# OutputValueDomain

## Example Usage

```typescript
import { OutputValueDomain } from "@interfere/attio/models";

let value: OutputValueDomain = {
  domain: "app.attio.com",
  rootDomain: "attio.com",
  attributeType: "domain",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `domain`                                                         | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | app.attio.com                                                    |
| `rootDomain`                                                     | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | attio.com                                                        |
| `attributeType`                                                  | [models.AttributeTypeDomain](../models/attribute-type-domain.md) | :heavy_check_mark:                                               | The attribute type of the value.                                 | domain                                                           |