import Joi from 'joi';

export const apiEnvValidationSchema = Joi.object({
  // General
  NODE_ENV: Joi.string().valid('dev', 'prod', 'test', 'stage').default('dev'),

  APP_PORT: Joi.number().default(3000),
  APP_HOST: Joi.string().default('0.0.0.0'),
  APP_TYPE: Joi.string().valid('api', 'worker').default('api'),

  // Database
  DATABASE_URL: Joi.string().uri().required(),

  // Redis
  REDIS_URL: Joi.string().uri().required(),

  // Optional
  SWAGGER_SERVER: Joi.string().uri().optional(),

  // Bcrypt
  BCRYPT_SALT_ROUNDS: Joi.number().default(10),

  // JWT
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRATION_TIME_SECONDS: Joi.number().default(3600),
});

export const defaultEnvValidationSchema = Joi.object({});
