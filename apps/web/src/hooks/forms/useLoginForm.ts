import { LoginDto } from '@your-crypto-tracker/api-client';
import { useFormSubmition } from '../useFormSubmition';
import { loginSchema } from '@/lib/validations/auth';
import { ROUTES } from '@/constants';
import { useLogin } from '../useAuth';
import { useRouter } from 'next/router';

export const useLoginForm = () => {
  const login = useLogin();
  const router = useRouter();

  const handleLogin = async (data: LoginDto) => {
    await login(data);
    router.push(ROUTES.DASHBOARD.HOME);
  };

  return useFormSubmition<LoginDto>(loginSchema, handleLogin);
};
