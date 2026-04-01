# GetFileStorageProvider

The storage provider for this file entry.

## Example Usage

```typescript
import { GetFileStorageProvider } from "@interfere/attio/models/operations";

let value: GetFileStorageProvider = "attio";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"attio" | "dropbox" | "box" | "google-drive" | "microsoft-onedrive" | Unrecognized<string>
```