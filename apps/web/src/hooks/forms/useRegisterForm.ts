import { useRouter } from 'next/router';
import { useRegister } from '../useAuth';
import { useFormSubmition } from '../useFormSubmition';
import { RegisterDto } from '@your-crypto-tracker/api-client';
import { registerSchema } from '@/lib/validations/auth';
import { ROUTES } from '@/constants';

export const useRegisterform = () => {
  const router = useRouter();
  const register = useRegister();

  const handleRegister = async (data: RegisterDto) => {
    await register(data);
    router.push(ROUTES.DASHBOARD.HOME);
  };

  return useFormSubmition<RegisterDto>(registerSchema, handleRegister);
};
