import { CreateAccount } from '../src/components/pages/create-account/CreateAccount';
import { Metadata } from '../src/components/shared/Metadata';

const CreateAccountPage = () => {
  return (
    <>
      <Metadata
        title="Create Account"
        description="Create your account to start tracking your crypto investments"
      />
      <CreateAccount />
    </>
  );
};

export default CreateAccountPage;
