# CreateTaskSlugOrIdOfMatchingAttribute4

## Example Usage

```typescript
import { CreateTaskSlugOrIdOfMatchingAttribute4 } from "@interfere/attio/models/operations";

let value: CreateTaskSlugOrIdOfMatchingAttribute4 = {
  originalPhoneNumber: "07234172834",
  countryCode: "GB",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `originalPhoneNumber`                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | The raw, original phone number, as inputted.                                                    | 07234172834                                                                                     |
| `countryCode`                                                                                   | [operations.CreateTaskCountryCode](../../models/operations/create-task-country-code.md)         | :heavy_minus_sign:                                                                              | The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. | GB                                                                                              |