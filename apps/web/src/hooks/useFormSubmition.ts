import { formatErrorMessage, formatFieldName } from '@/utils/format-errors';
import {
  isBaseErrorResponse,
  isValidationErrorResponse,
} from '@/utils/type-guards';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, FieldValues, Path } from 'react-hook-form';
import { ZodSchema } from 'zod';

export const useFormSubmition = <T extends FieldValues>(
  validationSchema: ZodSchema,
  callback: (data: T) => Promise<void>
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError: setFieldError,
  } = useForm<T>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (data: T) => {
    try {
      setIsLoading(true);
      setError('');

      await callback(data);
    } catch (err) {
      if (isValidationErrorResponse(err)) {
        err.error.properties.forEach((property) => {
          setFieldError(property.name as Path<T>, {
            type: 'server',
            message: formatErrorMessage(
              property.messages[0].replace(
                property.name,
                formatFieldName(property.name)
              )
            ),
          });
        });
      } else if (isBaseErrorResponse(err)) {
        setError(formatErrorMessage(err.error.message));
      } else {
        setError((err as Error)?.message || 'Failed to create account');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
