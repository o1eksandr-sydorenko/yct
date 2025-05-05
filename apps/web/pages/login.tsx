import { PublicRoute } from '@/components/auth/PublicRoute';
import { Login } from '@/components/pages/auth/login/Login';
import { Metadata } from '@/components/shared/Metadata';

const LoginPage = () => {
  return (
    <PublicRoute>
      <Metadata title="Login" description="Login to the dashboard" />
      <Login />
    </PublicRoute>
  );
};

export default LoginPage;
