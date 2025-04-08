# YourCryptoTracker

## Add new app/lib

```bash
npx nx g @nx/nest:application apps/[name]
npx nx generate @nx/nest:library libs/[name]
```

## Generate prisma client

```bash
npx prisma generate
```

## Reset database to start point

```bash
npx prisma migrate reset
```

## Generate prisma migration + apply to the database

```bash
npx prisma migrate dev --name init
```

## Deploy pending changes

```bash
prisma migrate deploy
```
