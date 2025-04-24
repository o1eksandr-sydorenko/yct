import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
  BaseExceptionFilter,
  SwaggerService,
  ValidationException,
} from '@your-crypto-tracker/core';
import { corsConfig, swaggerConfig } from './config';
import { useContainer, ValidationError } from 'class-validator';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const configService = app.get(ConfigService);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]): ValidationException =>
        new ValidationException(errors),
    })
  );
  app.useGlobalFilters(new BaseExceptionFilter());
  app.enableCors(corsConfig);

  const swaggerService = app.get(SwaggerService);
  await swaggerService.setup(app, swaggerConfig);

  const port = configService.get<number>('APP_PORT', 3000);
  await app.listen(port, configService.get<string>('APP_HOST', '0.0.0.0'));
}

void bootstrap();
