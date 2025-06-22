# @your-crypto-tracker/api-client

A TypeScript API client for the Your Crypto Tracker application.

## Installation

```bash
npm install @your-crypto-tracker/api-client
```

## Usage

```typescript
import { ApiClient } from '@your-crypto-tracker/api-client';

const client = new ApiClient({
  baseURL: 'https://api.your-crypto-tracker.com',
});

// Use the client methods
const users = await client.users.getUsers();
```

## Development

This library is built using Nx. To build it locally:

```bash
pnpm nx build api-client
```

## Publishing

This library is automatically published to GitHub Packages when a new release is created on GitHub.
