import {
  BaseErrorResponse,
  ValidationErrorResponse,
} from '@your-crypto-tracker/api-client';

export const isValidationErrorResponse = (
  response: unknown
): response is { error: ValidationErrorResponse } => {
  return (
    typeof response === 'object' &&
    response !== null &&
    'error' in response &&
    typeof response['error'] === 'object' &&
    response['error'] !== null &&
    'error' in response['error'] &&
    'message' in response['error'] &&
    'properties' in response['error']
  );
};

export const isBaseErrorResponse = (
  response: unknown
): response is { error: BaseErrorResponse } => {
  return (
    typeof response === 'object' &&
    response !== null &&
    'error' in response &&
    typeof response['error'] === 'object' &&
    response['error'] !== null &&
    'error' in response['error'] &&
    'message' in response['error']
  );
};
