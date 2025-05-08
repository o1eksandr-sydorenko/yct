import { PublicRoute } from '@/components/auth/PublicRoute';
import { Register } from '@/components/pages/auth/register/Register';
import { Metadata } from '@/components/shared/Metadata';

const RegisterPage = () => {
  return (
    <PublicRoute>
      <Metadata
        title="Create Account"
        description="Create your account to start tracking your crypto investments"
      />
      <Register />
    </PublicRoute>
  );
};

export default RegisterPage;
