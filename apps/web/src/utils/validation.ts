export const validateName = (value: string): string =>
  value.length < 2 ? 'Must be at least 2 characters' : '';

export const validateEmail = (value: string): string =>
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';

export const validatePassword = (value: string): string => {
  if (value.length < 8) return 'Password must be at least 8 characters';
  if (!/[A-Z]/.test(value)) return 'Password must contain an uppercase letter';
  if (!/[a-z]/.test(value)) return 'Password must contain a lowercase letter';
  if (!/[0-9]/.test(value)) return 'Password must contain a number';
  return '';
};

export const validatePasswordMatch = (
  value: string,
  passwordToMatch: string
): string => (value !== passwordToMatch ? 'Passwords do not match' : '');

export interface ValidationRule {
  validate: (value: string, formData?: Record<string, string>) => string;
  fieldName: string;
}

export const createFormValidator = (rules: Record<string, ValidationRule>) => {
  return {
    validateField: (
      name: string,
      value: string,
      formData?: Record<string, string>
    ): string => {
      const rule = rules[name];
      return rule ? rule.validate(value, formData) : '';
    },

    validateForm: (
      formData: Record<string, string>
    ): Record<string, string> => {
      const errors: Record<string, string> = {};
      Object.keys(rules).forEach((fieldName) => {
        const error = rules[fieldName].validate(
          formData[fieldName] || '',
          formData
        );
        if (error) {
          errors[fieldName] = error;
        }
      });
      return errors;
    },
  };
};
