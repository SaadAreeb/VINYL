import api from "../../services/api";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const LoginForm = () => {
  // Stores either the user's email or username
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleSubmit = async (event) => {
  // Prevent the browser from refreshing
  event.preventDefault();

  try {

    // Send login request to the backend
    const response = await api.post("/auth/login", {

      // Backend accepts either username or email
      username: identifier,
      email: identifier,

      password: password,

    });

    console.log(response.data);

    // If login succeeds, go to the account selection page
    navigate("/home");

  } catch (error) {

    console.log(error.response?.data);

  }
};


  return (
    <form onSubmit={handleSubmit}>

      {/* ================= Heading ================= */}

      <div className="text-center ">
        <h1 className="    text-5xl
    font-extrabold
    text-white
    drop-shadow-[0_0_15px_rgba(255,255,255,0.35)]
">
          Welcome Back
        </h1>

        <p className="mt-4 text-lg tracking-wide text-gray-300">
          Sign in to continue listening.
        </p>
      </div>

    

      {/* ================= Form Fields ================= */}

<div className="mt-16 flex justify-center">

  <div className="w-90">

    {/* Email */}

    <div className="mb-8">

      <label className="mb-5 block text-sm font-medium text-gray-200">
        Email
      </label>

      <input
        type="email"
        placeholder="Enter your email or Username"
        value={identifier}
        onChange={(event) => setIdentifier(event.target.value)}
        className="
          w-full
          text-center
          rounded-2xl
          border border-white/10
          bg-white/10
          px-5
          py-4
          text-white
          placeholder:text-gray-400
          outline-none
          transition-all
          focus:border-pink-400
          focus:bg-white/15
        "
      />

    </div>

    {/* Password */}

    <div className="mb-8">

      <label className="mb-5 block text-sm font-medium text-gray-200">
        Password
      </label>

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="
          w-full
          text-center
          rounded-2xl
          border border-white/10
          bg-white/10
          px-5
          py-4
          text-white
          placeholder:text-gray-400
          outline-none
          transition-all
          focus:border-pink-400
          focus:bg-white/15
        "
      />

    </div>

    {/* Forgot Password */}

    <div className="mb-8 flex justify-end">

      <button
        type="button"
        className="text-sm text-yellow-400 hover:text-yellow-300"
      >
        Forgot Password?
      </button>

    </div>

  </div>

</div>

      {/* ================= Login Button ================= */}

      <div className="mt-10 text-center">
        <button
          type="submit"
          className="   w-30
    rounded-2xl
    bg-linear-to-r
    from-pink-500
    via-orange-400
    to-yellow-400
    py-4
    text-lg
    font-bold
    text-white
    shadow-[0_0_25px_rgba(236,72,153,0.45)]
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_0_45px_rgba(236,72,153,0.75)]
    active:scale-95"
        >
          Login
        </button>
      </div>

      {/* ================= Footer ================= */}

      <div className="mt-8 text-center">
        <p className="text-gray-300">
          Don't have an account?{" "}
          <Link
             to="/choose-account"
  className="font-semibold text-yellow-400 hover:text-yellow-300"
          >
            Sign Up
          </Link>
        </p>
      </div>

    </form>
  );
  };
export default LoginForm;