import {
  FaHome,
  FaCompactDisc,
  FaMicrophoneAlt,
  FaUpload,
  FaUserCircle,
  FaCog,
  FaPlusCircle,
  FaTimes,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    icon: <FaHome />,
    path: "/home",
  },
  {
    name: "Albums",
    icon: <FaCompactDisc />,
    path: "/albums",
  },
  {
    name: "Create Album",
    icon: <FaPlusCircle />,
    path: "/album",
  },
  {
    name: "Artists",
    icon: <FaMicrophoneAlt />,
    path: "/artists",
  },
  {
    name: "Upload Song",
    icon: <FaUpload />,
    path: "/upload-song",
  },
  {
    name: "Profile",
    icon: <FaUserCircle />,
    path: "/profile",
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* ================= Mobile Overlay ================= */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      {/* ================= Sidebar ================= */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-64
          flex-col
          justify-between
          bg-[#0d0d12]
          border-r
          border-white/10
          shrink-0

          transition-transform
          duration-300
          ease-in-out

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:static
          lg:translate-x-0
        `}
      >

        {/* ================= Mobile Close ================= */}

        <button
          onClick={() => setIsOpen(false)}
          className="
            absolute
            right-4
            top-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/5
            text-gray-400
            hover:bg-white/10
            hover:text-white
            lg:hidden
          "
        >
          <FaTimes />
        </button>


        {/* ================= Top ================= */}

        <div>

          {/* Logo */}

          <div className="flex flex-col items-center pt-10 pb-8">

            <div
              className="
                w-14
                h-14
                rounded-full
                bg-linear-to-br
                from-pink-500
                via-orange-400
                to-yellow-400
                flex
                items-center
                justify-center
                text-2xl
                font-black
                text-white
                shadow-[0_0_30px_rgba(236,72,153,.45)]
              "
            >
              V
            </div>

            <h1
              className="
                mt-5
                text-2xl
                font-black
                tracking-[0.3em]
                text-white
              "
            >
              VINYL
            </h1>

            <p
              className="
                mt-2
                text-xs
                tracking-[0.35em]
                uppercase
                text-gray-500
              "
            >
              Feel the Music
            </p>

          </div>


          {/* Divider */}

          <div className="mx-6 border-t border-white/10" />


          {/* Navigation */}

          <nav className="mt-8 flex flex-col gap-3 px-4">

            {menuItems.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  px-5
                  py-4
                  transition-all
                  duration-300
                  hover:translate-x-2

                  ${
                    isActive
                      ? `
                        bg-linear-to-r
                        from-pink-500/25
                        to-orange-500/20
                        border
                        border-pink-500/30
                        text-white
                        shadow-[0_0_20px_rgba(236,72,153,.25)]
                      `
                      : `
                        text-gray-400
                        hover:bg-white/5
                        hover:text-white
                      `
                  }
                `
                }
              >

                <span className="text-xl">
                  {item.icon}
                </span>

                <span className="font-medium">
                  {item.name}
                </span>

              </NavLink>

            ))}

          </nav>

        </div>


        {/* ================= Bottom ================= */}

        <div>

          <div className="mx-6 border-t border-white/10" />

          <div className="px-4 py-6">

            <button
              className="
                w-full
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4
                text-gray-400
                transition-all
                duration-300
                hover:bg-white/5
                hover:text-white
              "
            >

              <FaCog className="text-lg" />

              <span className="font-medium">
                Settings
              </span>

            </button>

          </div>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;