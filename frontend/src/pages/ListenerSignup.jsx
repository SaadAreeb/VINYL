import AuthLayout from "../layouts/AuthLayout";
import SignupForm from "../components/auth/SignupForm";

const ListenerSignup = () => {
  return (
    <AuthLayout>
      <SignupForm role="user" />
    </AuthLayout>
  );
};

export default ListenerSignup;