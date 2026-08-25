import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Player from "../components/layout/Player";

const MainLayout = ({ children }) => {

  // ================= Sidebar State =================

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (

    <div
      className="
        h-screen
        bg-[#09090B]
        text-white
        flex
        overflow-hidden
      "
    >

      {/* ================= Sidebar ================= */}

      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />


      {/* ================= Right Side ================= */}

      <div
        className="
          flex
          flex-col
          flex-1
          min-w-0
        "
      >

        {/* ================= Navbar ================= */}

        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
        />


        {/* ================= Main Content ================= */}

        <main
          className="
            flex-1
            overflow-y-auto
          "
        >

          <div
            className="
              mx-auto
              w-full
              max-w-7xl
              px-4
              sm:px-6
              lg:px-8
              xl:px-10
              py-8
            "
          >

            {children}

          </div>

        </main>


        {/* ================= Player ================= */}

        <Player />

      </div>

    </div>

  );
};

export default MainLayout;