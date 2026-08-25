import { FaCompactDisc, FaMusic, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AlbumCard = ({ album }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        group
        w-full
        max-w-[75
        rounded-3xl
        border
        border-white/10
        bg-[#17171d]
        p-5
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-pink-500/30
        hover:shadow-[0_0_30px_rgba(236,72,153,.18)]
      "
    >
      {/* Vinyl */}

      <div className="flex justify-center">

        <div
          className="
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            bg-linear-to-br
            from-pink-500
            via-orange-400
            to-yellow-400
            transition-transform
            duration-700
            group-hover:rotate-180
          "
        >

          <div
            className="
              flex
              h-18
              w-18
              items-center
              justify-center
              rounded-full
              bg-[#111118]
            "
          >

            <FaCompactDisc className="text-3xl text-white" />

          </div>

        </div>

      </div>

      {/* Album Title */}

      <h2 className="mt-5 text-center text-xl font-bold truncate">
        {album.title}
      </h2>

      {/* Artist */}

      <p className="mt-1 text-center text-gray-400 text-sm truncate">
        {album.artist?.username || "Unknown Artist"}
      </p>

      {/* Song Count */}

      <div className="mt-4 flex justify-center">

        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-[#111118]
            px-4
            py-2
            text-sm
          "
        >

          <FaMusic className="text-pink-500" />

          <span>{album.musics?.length || 0} Songs</span>

        </div>

      </div>

      {/* Button */}

      <button
        onClick={() => navigate(`/albums/${album._id}`)}
        className="
          mt-5
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-linear-to-r
          from-pink-500
          via-orange-400
          to-yellow-400
          py-3
          font-semibold
          transition-all
          duration-300
          hover:scale-[1.02]
        "
      >

        View Album

        <FaArrowRight />

      </button>

    </div>
  );
};

export default AlbumCard;