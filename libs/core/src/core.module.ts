import { Module } from '@nestjs/common';
import { SwaggerService } from './swagger/swagger.service';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import {
  apiEnvValidationSchema,
  defaultEnvValidationSchema,
} from './validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        process.env['NODE_ENV']
          ? join(process.cwd(), `.env.${process.env['NODE_ENV'] || 'local'}`)
          : '',
        join(process.cwd(), '.env'),
      ],
      validationSchema:
        process.env['APP_TYPE'] === 'api'
          ? apiEnvValidationSchema
          : defaultEnvValidationSchema,
    }),
  ],

  providers: [SwaggerService],
  exports: [SwaggerService],
})
export class CoreModule {}
