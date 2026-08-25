// AuthLayout is a reusable layout for all authentication pages.
// Example: Login, Signup, Forgot Password.

const AuthLayout = ({ children }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* ================= Background Video ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/login-bg.mp4" type="video/mp4" />
      </video>

      {/* ================= Dark Overlay ================= */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* ================= Content ================= */}
      <div className="relative z-10 flex h-screen items-center justify-center">

        {/* Glass Panel */}
        <div
          className="
            w-125
            h-[88vh]
            rounded-4xl
            bg-white/10
            backdrop-blur-9.7xl
            border border-white/20
            shadow-2xl
            flex
            items-center
            justify-center
            px-12
            pt-12
          "
        >
          {children}
        </div>

      </div>

    </div>
  );
};

export default AuthLayout;