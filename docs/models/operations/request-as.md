# RequestAs

Specifies the context in which to perform the search. Use 'workspace' to return all search results or specify a workspace member to limit results to what one specific person in your workspace can see.


## Supported Types

### `operations.RequestAsWorkspace`

```typescript
const value: operations.RequestAsWorkspace = {
  type: "workspace",
};
```

### `operations.RequestAsWorkspaceMember1`

```typescript
const value: operations.RequestAsWorkspaceMember1 = {
  type: "workspace-member",
  workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

### `operations.RequestAsWorkspaceMember2`

```typescript
const value: operations.RequestAsWorkspaceMember2 = {
  type: "workspace-member",
  emailAddress: "alice@attio.com",
};
```

