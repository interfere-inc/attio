# FileStorageProvider

The storage provider for this file entry.

## Example Usage

```typescript
import { FileStorageProvider } from "@interfere/attio/models";

let value: FileStorageProvider = "attio";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"attio" | "dropbox" | "box" | "google-drive" | "microsoft-onedrive" | Unrecognized<string>
```