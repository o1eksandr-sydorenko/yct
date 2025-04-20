import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordMatch,
  ValidationRule,
} from '../../../utils/validation';

export interface CreateAccountForm extends Record<string, string> {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const initialValues: CreateAccountForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export const validationRules: Record<keyof CreateAccountForm, ValidationRule> =
  {
    firstName: { validate: validateName, fieldName: 'firstName' },
    lastName: { validate: validateName, fieldName: 'lastName' },
    email: { validate: validateEmail, fieldName: 'email' },
    password: { validate: validatePassword, fieldName: 'password' },
    repeatPassword: {
      validate: (value, formData) =>
        validatePasswordMatch(value, formData?.password || ''),
      fieldName: 'repeatPassword',
    },
  };
