import { PublicRoute } from '@/components/auth/PublicRoute';
import { CreateAccount } from '@/components/pages/auth/register/CreateAccount';
import { Metadata } from '@/components/shared/Metadata';

const RegisterPage = () => {
  return (
    <PublicRoute>
      <Metadata
        title="Create Account"
        description="Create your account to start tracking your crypto investments"
      />
      <CreateAccount />
    </PublicRoute>
  );
};

export default RegisterPage;
