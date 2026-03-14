# ConnectedFolderStorageProvider

The storage provider for this file entry.

## Example Usage

```typescript
import { ConnectedFolderStorageProvider } from "@interfere/attio/models";

let value: ConnectedFolderStorageProvider = "attio";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"attio" | "dropbox" | "box" | "google-drive" | "microsoft-onedrive" | Unrecognized<string>
```