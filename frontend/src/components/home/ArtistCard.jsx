const ArtistCard = ({ name, image, genre, followers }) => {
  return (
    <div
      className="
        group
        bg-[#15151c]
        rounded-2xl
        border
        border-white/10
        p-6
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-pink-500/40
        hover:shadow-[0_0_30px_rgba(236,72,153,.15)]
      "
    >
      {/* Avatar */}

      <img
        src={image}
        alt={name}
        className="
          w-28
          h-28
          rounded-full
          object-cover
          mx-auto
          border-4
          border-pink-500/30
          transition
          duration-300
          group-hover:scale-105
        "
      />

      {/* Name */}

      <h3 className="mt-5 text-xl font-bold">
        {name}
      </h3>

      {/* Genre */}

      <p className="mt-2 text-pink-400 text-sm">
        {genre}
      </p>

      {/* Followers */}

      <p className="mt-2 text-gray-500 text-sm">
        {followers}
      </p>

      {/* Button */}

      <button
        className="
          mt-6
          w-full
          rounded-xl
          bg-pink-500
          py-3
          font-semibold
          transition
          hover:bg-pink-400
        "
      >
        Follow
      </button>

    </div>
  );
};

export default ArtistCard;