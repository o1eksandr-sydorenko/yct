import {
  validateEmail,
  validatePassword,
  ValidationRule,
} from '../../../utils/validation';

export interface LoginForm extends Record<string, string> {
  email: string;
  password: string;
}

export const initialValues: LoginForm = {
  email: '',
  password: '',
};

export const validationRules: Record<keyof LoginForm, ValidationRule> = {
  email: { validate: validateEmail, fieldName: 'email' },
  password: { validate: validatePassword, fieldName: 'password' },
};
