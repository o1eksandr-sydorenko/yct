import { BaseErrorResponse, ValidationErrorResponse } from '../api.client';

export const isValidationErrorResponse = (
  response: unknown
): response is { data: ValidationErrorResponse } => {
  return (
    typeof response === 'object' &&
    response !== null &&
    'data' in response &&
    typeof response['data'] === 'object' &&
    response['data'] !== null &&
    'error' in response['data'] &&
    'message' in response['data'] &&
    'properties' in response['data']
  );
};

export const isBaseErrorResponse = (
  response: unknown
): response is { data: BaseErrorResponse } => {
  return (
    typeof response === 'object' &&
    response !== null &&
    'data' in response &&
    typeof response['data'] === 'object' &&
    response['data'] !== null &&
    'error' in response['data'] &&
    'message' in response['data']
  );
};
