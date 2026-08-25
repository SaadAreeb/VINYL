import AuthLayout from "../layouts/AuthLayout";
import SignupForm from "../components/auth/SignupForm";

const ArtistSignup = () => {
  return (
    <AuthLayout>
      <SignupForm role="artist" />
    </AuthLayout>
  );
};

export default ArtistSignup;