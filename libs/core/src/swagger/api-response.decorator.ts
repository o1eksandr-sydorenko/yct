// libs/core/src/swagger/api-response.decorator.ts
import { applyDecorators, Type } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { BaseErrorResponse, ValidationErrorResponse } from '../responses';

export function ApiResponseWithErrors<T>(options?: {
  status?: number;
  type?: Type<T>;
  description?: string;
}) {
  const decorators = [
    ApiResponse({
      status: 400,
      type: BaseErrorResponse,
      description: 'Bad Request',
    }),
    ApiResponse({
      status: 401,
      type: BaseErrorResponse,
      description: 'Unauthorized',
    }),
    ApiResponse({
      status: 403,
      type: BaseErrorResponse,
      description: 'Forbidden',
    }),
    ApiResponse({
      status: 404,
      type: BaseErrorResponse,
      description: 'Not Found',
    }),
    ApiResponse({
      status: 422,
      type: ValidationErrorResponse,
      description: 'Validation Error',
    }),
    ApiResponse({
      status: 500,
      type: BaseErrorResponse,
      description: 'Internal Server Error',
    }),
  ];

  if (options) {
    decorators.unshift(
      ApiResponse({
        status: options.status,
        type: options.type,
        description: options.description,
      })
    );
  }

  return applyDecorators(...decorators);
}
