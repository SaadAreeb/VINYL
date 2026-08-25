// Import the reusable layout
import AuthLayout from "../layouts/AuthLayout";

// Import the reusable glass card
import GlassCard from "../components/auth/GlassCard";

// Import the login form
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout>

      <GlassCard>

        <LoginForm />

      </GlassCard>

    </AuthLayout>
  );
};

export default Login;