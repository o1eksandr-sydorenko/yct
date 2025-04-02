# YourCryptoTracker

## Add new application

```bash
npx nx g @nx/nest:application apps/[name]
```

## Generate prisma client

```bash
npx prisma generate
```

## Generate prisma migration + apply to the database

```bash
npx prisma migrate dev --name init
```

## Deploy pending changes

```bash
prisma migrate deploy
```
