import {
  formatErrorMessage,
  formatFieldName,
} from '@your-crypto-tracker/api-client';
import {
  isBaseErrorResponse,
  isValidationErrorResponse,
} from '@your-crypto-tracker/api-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, FieldValues, Path } from 'react-hook-form';
import { ZodSchema } from 'zod';
import { isAxiosError } from 'axios';

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
      if (isAxiosError(err)) {
        if (isValidationErrorResponse(err.response)) {
          err.response.data.properties.forEach((property) => {
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
        } else if (isBaseErrorResponse(err.response)) {
          setError(formatErrorMessage(err.response.data.message));
        } else {
          setError((err as Error)?.message || 'Something went wrong');
        }
      } else {
        setError((err as Error)?.message || 'Something went wrong');
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
