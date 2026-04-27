# MatchingAttributePhoneNumber

## Example Usage

```typescript
import { MatchingAttributePhoneNumber } from "@interfere/attio/models";

let value: MatchingAttributePhoneNumber = {
  originalPhoneNumber: "07234172834",
  countryCode: "GB",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `originalPhoneNumber`                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | The raw, original phone number, as inputted.                                                    | 07234172834                                                                                     |
| `countryCode`                                                                                   | [models.CountryCode](../models/country-code.md)                                                 | :heavy_minus_sign:                                                                              | The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. | GB                                                                                              |