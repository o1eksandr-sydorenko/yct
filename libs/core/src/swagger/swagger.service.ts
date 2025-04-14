import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { IApiTag, ISwaggerConfig } from './swagger.interface';

@Injectable()
export class SwaggerService {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService
  ) {}

  async setup(
    app: NestFastifyApplication,
    swaggerConfig: ISwaggerConfig
  ): Promise<void> {
    const config = new DocumentBuilder()
      .addServer(
        this.configService.get<string>(
          'SWAGGER_SERVER',
          'http://localhost:3000'
        ),
        'Server'
      )
      .setTitle(swaggerConfig.title)
      .setDescription(swaggerConfig.description)
      .setVersion(swaggerConfig.description)
      .addSecurity('bearer', { type: 'http', scheme: 'bearer' });

    swaggerConfig.tags?.forEach(({ name, description }: IApiTag): void => {
      config.addTag(name, description);
    });

    const document = SwaggerModule.createDocument(app, config.build());
    SwaggerModule.setup(swaggerConfig.path, app, document, {
      swaggerOptions: { persistAuthorization: true },
    });
  }
}
