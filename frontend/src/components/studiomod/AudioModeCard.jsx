import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const AudioModeCard = ({
  mode,
  isActive,
  onClick,
}) => {

  const Icon = mode.icon;

  return (

    <motion.button
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className={`
        relative
        flex
        items-center
        gap-4
        rounded-2xl
        border
        p-4
        text-left
        transition-all
        duration-300

        ${
          isActive
            ? "border-pink-500 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,.25)]"
            : "border-white/10 bg-white/5 hover:border-pink-500/40 hover:bg-white/10"
        }
      `}
    >

      {/* Icon */}

      <div
        className={`
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-linear-to-br
          ${mode.color}
        `}
      >

        <Icon className="text-lg text-white" />

      </div>

      {/* Content */}

      <div className="flex-1">

        <h3
          className="
            text-lg
            font-semibold
            text-white
          "
        >
          {mode.title}
        </h3>

        <p
          className="
            mt-1
            text-sm
            leading-5
            text-gray-400
          "
        >
          {mode.description}
        </p>

      </div>

      {/* Active */}

      {isActive && (

        <FaCheckCircle
          className="
            text-xl
            text-pink-400
          "
        />

      )}

    </motion.button>

  );

};

export default AudioModeCard;