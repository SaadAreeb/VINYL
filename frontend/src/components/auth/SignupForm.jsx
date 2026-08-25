
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";



const SignupForm = ({ role }) => {
  // ================= State =================

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // ================= Submit =================

  const handleSubmit = async (event) => {
  // Prevent page refresh
  event.preventDefault();

  // Check if both passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    // Send registration request to backend
    const response = await api.post("/auth/register", {
      username,
      email,
      password,
      role,
    });

    console.log(response.data);

    // Registration successful
    alert("Account created successfully!");

    // Redirect to Login page
    navigate("/");

  } catch (error) {

    console.log(error.response?.data);

    alert(
      error.response?.data?.message ||
      "Something went wrong."
    );

  }
};

  return (
    <form onSubmit={handleSubmit}>
      {/* ================= Heading ================= */}

      <div className="text-center">
        <h1
          className="
            text-5xl
            font-extrabold
            text-white
            drop-shadow-[0_0_15px_rgba(255,255,255,0.35)]
          "
        >
          Create Account
        </h1>

        <p className="mt-5 text-lg tracking-wide text-gray-300">
          Start your music journey with Vinyl.
        </p>
      </div>

      {/* ================= Form ================= */}

      <div className="mt-20 flex justify-center">
        <div className="w-105 space-y-6">

          {/* Username */}

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-200">
              Username
            </label>

            <input
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-5
                py-4
                text-center
                text-white
                placeholder:text-gray-400
                outline-none
                transition-all
                focus:border-pink-400
                focus:bg-white/15
              "
            />
          </div>

          {/* Email */}

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-200">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-5
                py-4
                text-center
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

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-200">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-5
                py-4
                text-center
                text-white
                placeholder:text-gray-400
                outline-none
                transition-all
                focus:border-pink-400
                focus:bg-white/15
              "
            />
          </div>

          {/* Confirm Password */}

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-200">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-5
                py-4
                text-center
                text-white
                placeholder:text-gray-400
                outline-none
                transition-all
                focus:border-pink-400
                focus:bg-white/15
              "
            />
          </div>
                    {/* ================= Button ================= */}

          <div className="pt-6">
            <button
              type="submit"
              className="
                w-full
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
                active:scale-95
              "
            >
              Create Account
            </button>
          </div>

          {/* ================= Footer ================= */}

          <div className="pt-2 text-center">
            <p className="text-gray-300 text-base">
              Already have an account?{" "}

              <Link
                to="/"
                className="
                  font-semibold
                  text-yellow-400
                  transition
                  hover:text-yellow-300
                "
              >
                Login
              </Link>
            </p>
          </div>

        </div>
      </div>
    </form>
  );
};

export default SignupForm;