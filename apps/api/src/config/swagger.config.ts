import { ISwaggerConfig } from '@your-crypto-tracker/core';

export const swaggerConfig: ISwaggerConfig = {
  title: 'Api Docs',
  description: 'Api Socumentation',
  version: '1.0.0',
  path: 'docs',
  tags: [
    {
      name: 'Authorization',
      description: 'Authorization CRUD endpoinst',
    },
  ],
};
