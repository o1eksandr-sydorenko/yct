import { PrismaClient } from '@prisma/client';
import { paginate } from 'prisma-extension-pagination';
import { createSoftDeleteExtension } from 'prisma-extension-soft-delete';

export const prismaClient = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})
  .$extends(
    createSoftDeleteExtension({
      models: {
        User: true,
      },
      defaultConfig: {
        field: 'deleted_at',
        createValue: (deleted) => {
          if (deleted) {
            return new Date();
          }

          return null;
        },
      },
    })
  )
  .$extends({
    model: {
      User: {
        paginate,
      },
    },
  });

export type ExtendedPrismaClient = typeof prismaClient;
