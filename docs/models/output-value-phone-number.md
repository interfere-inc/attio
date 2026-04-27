# OutputValuePhoneNumber

## Example Usage

```typescript
import { OutputValuePhoneNumber } from "@interfere/attio/models";

let value: OutputValuePhoneNumber = {
  originalPhoneNumber: "5558675309",
  phoneCountryCode: "US",
  phoneNumber: "+15558675309",
  attributeType: "phone-number",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `originalPhoneNumber`                                                                           | *string*                                                                                        | :heavy_check_mark:                                                                              | The raw, original phone number, as inputted.                                                    | 5558675309                                                                                      |
| `phoneCountryCode`                                                                              | [models.OutputValuePhoneCountryCode](../models/output-value-phone-country-code.md)              | :heavy_check_mark:                                                                              | The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. | US                                                                                              |
| `phoneNumber`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | +15558675309                                                                                    |
| `attributeType`                                                                                 | *"phone-number"*                                                                                | :heavy_check_mark:                                                                              | The attribute type of the value.                                                                | phone-number                                                                                    |