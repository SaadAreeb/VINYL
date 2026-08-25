import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const AccountCard = ({
  icon,
  title,
  description,
  buttonText,
  navigateTo,
}) => {

    // Gives us the navigate function
  const navigate = useNavigate();

  return (
    <motion.div

      // Small lift animation when hovering
      whileHover={{
        y: -8,
        scale: 1.02,
      }}

      // Small press animation
      whileTap={{
        scale: 0.98,
      }}

      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:border-black-400/50
        hover:shadow-[0_0_35px_rgba(236,72,153,0.25)]
      "
    >

    {/* Header */}

<div className="flex items-center gap-7">

  <motion.div
    whileHover={{
      rotate: 10,
      scale: 1.15,
    }}
    className=" text-4xl text-black-400"
  >
    {icon}
  </motion.div>

  <h2 className="text-2xl font-bold tracking-wide text-white">
    {title}
  </h2>

</div> 

{/* Description */}

<p className="mt-5 ml-14 leading-7 text-gray-300">
  {description}
</p>

      {/* Button */}

     {/* Button */}



<div className="mt-8 flex justify-center">

  <button
    onClick={() => navigate(navigateTo)}
    className="
      w-50
      rounded-xl
      bg-linear-to-r
      from-pink-500
      to-orange-400
      py-3
      font-semibold
      text-white
      transition
      duration-300
      hover:scale-105
      hover:shadow-[0_0_25px_rgba(236,72,153,0.45)]
    "
  >
    {buttonText}
  </button>

</div>

    </motion.div>
  );
};

export default AccountCard;