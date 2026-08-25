import {
  FaBell,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = ({ onMenuClick }) => {

  return (

    <header
      className="
        h-16
        shrink-0
        border-b
        border-white/10
        bg-[#101014]
      "
    >

      <div className="h-full px-3 sm:px-6 lg:px-8">

        <div
          className="
            h-full
            flex
            items-center
            gap-3
            sm:gap-6
          "
        >

          {/* ================= Mobile V ================= */}

          <button
            onClick={onMenuClick}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-linear-to-br
              from-pink-500
              via-orange-400
              to-yellow-400
              text-lg
              font-black
              text-white
              shadow-[0_0_25px_rgba(236,72,153,.4)]
              transition-all
              duration-300
              hover:scale-105
              lg:hidden
            "
          >
            V
          </button>


          {/* ================= Search ================= */}

          <div
            className="
              relative
              flex-1
              min-w-0
              max-w-xl
            "
          >

            <FaSearch
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-center
                text-gray-500
                pointer-events-none
              "
            />

            <input
              type="text"
              placeholder=" "
              className="
             
              
  w-full
  h-11
  rounded-full
  bg-[#1A1A20]
  pl-120
  pr-5
  text-center
  text-white
  placeholder:text-gray-500
  outline-none
  border
  border-transparent
  transition-all
  focus:border-green-200
              "
            />

          </div>


          {/* ================= Right ================= */}

          <div
            className="
              flex
              items-center
              gap-2
              sm:gap-4
              shrink-0
            "
          >

            {/* Notification */}

            <button
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#1A1A20]
                text-white
                hover:bg-pink-500/20
                transition
              "
            >
              <FaBell />
            </button>


            {/* Profile */}

            <button
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-[#1A1A20]
                px-1.5
                py-1.5
                hover:bg-[#26262F]
                transition
              "
            >

              {/* Avatar */}

              <div
                className="
                  h-9
                  w-9
                  shrink-0
                  rounded-full
                  bg-linear-to-br
                  from-pink-500
                  to-orange-400
                  flex
                  items-center
                  justify-center
                  font-semibold
                  text-white
                "
              >
                S
              </div>


              {/* Name */}

              <div className="hidden sm:block text-left">

                <h3
                  className="
                    text-sm
                    font-semibold
                    leading-none
                    text-white
                  "
                >
                  Saad
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Artist
                </p>

              </div>


              {/* Arrow */}

              <FaChevronDown
                className="
                  hidden
                  sm:block
                  mr-2
                  text-xs
                  text-gray-500
                "
              />

            </button>

          </div>

        </div>

      </div>

    </header>

  );
};

export default Navbar;