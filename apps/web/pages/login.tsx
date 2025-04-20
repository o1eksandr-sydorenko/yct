import { Login } from '../src/components/pages/login/Login';
import { Metadata } from '../src/components/shared/Metadata';

const LoginPage = () => {
  return (
    <>
      <Metadata title="Login" description="Login to the dashboard" />
      <Login />
    </>
  );
};

export default LoginPage;
