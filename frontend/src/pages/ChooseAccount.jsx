// Reuse the same authentication layout
import AuthLayout from "../layouts/AuthLayout";

import { FaHeadphones, FaMicrophone } from "react-icons/fa";

// Reusable card component (we'll build it next)
import AccountCard from "../components/auth/AccountCard";

const ChooseAccount = () => {
  return (
    <AuthLayout>

      {/* Main Content */}
      <div className="w-90">

        {/* Heading */}
        <div className=" mb-24 text-center">

          <h1 className="mt-4 gap-10 text-5xl font-bold text-white">
            Vinyl
          </h1>

          <p className="mt-4 gap-10 text-lg text-gray-300">
            Choose how you want to experience music.
          </p>

        </div>

        {/* Cards */}
       <div className="flex flex-col gap-6">

  <AccountCard
  icon={<FaHeadphones />}
  title="Listener"
  description="Listen to millions of songs, create playlists and discover new artists."
  buttonText="Continue as Listener"
  navigateTo="/signup/listener"
/>

<AccountCard
  icon={<FaMicrophone />}
  title="Artist"
  description="Upload songs, create albums and build your audience."
  buttonText="Continue as Artist"
  navigateTo="/signup/artist"
/>

</div>

      </div>

    </AuthLayout>
  );
};

export default ChooseAccount;