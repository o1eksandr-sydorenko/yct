import { ValidationException } from './validation.exception';

export class ValidationPropertyException extends ValidationException {
  constructor(property: string, message: string, parentKey?: string) {
    super([
      {
        property: parentKey || property,
        children: parentKey
          ? [{ property: property, constraints: { text: message } }]
          : [],
        constraints: parentKey ? {} : { text: message },
      },
    ]);
  }
}
