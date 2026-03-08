# FolderStorageProvider

The storage provider for this file entry.

## Example Usage

```typescript
import { FolderStorageProvider } from "@interfere/attio/models";

let value: FolderStorageProvider = "attio";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"attio" | "dropbox" | "box" | "google-drive" | "microsoft-onedrive" | Unrecognized<string>
```