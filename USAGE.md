<!-- Start SDK Example Usage [usage] -->
```typescript
import { Attio } from "@interfere/attio";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.objects.list();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->