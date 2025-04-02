import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { BaseExceptionFilter, SwaggerService } from '@your-crypto-tracker/core';
import { swaggerConfig } from './config';
import { useContainer } from 'class-validator';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const configService = app.get(ConfigService);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalFilters(new BaseExceptionFilter());

  const swaggerService = app.get(SwaggerService);
  await swaggerService.setup(app, swaggerConfig);

  const port = configService.get<number>('APP_PORT', 3000);
  await app.listen(port, configService.get<string>('APP_HOST', '0.0.0.0'));
}

void bootstrap();
