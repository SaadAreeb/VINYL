import { FaPlay, FaTrash } from "react-icons/fa";
import heroGif from "../../assets/gif/Hero.gif";
import { usePlayer } from "../../context/PlayerContext";
import { useNavigate, useLocation } from "react-router-dom";

const SongCard = ({ song, songs, index , onDelete}) => {

  const { playQueue } = usePlayer();
  const navigate = useNavigate();
const location = useLocation();

  return (
    <div
      className="
        group
        rounded-2xl
        bg-[#15151c]
        border
        border-white/10
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-pink-500/40
        hover:shadow-[0_0_30px_rgba(236,72,153,.15)]
      "
    >
      {/* Cover */}

      <div className="relative overflow-hidden">

      <img
  src={song.coverImage || heroGif}
  alt={song.title}
  className="
    h-52
    w-full
    object-cover
    transition
    duration-500
    group-hover:scale-110
  "
/>
{/* Delete Button */}

<button
 onClick={(e) => {
    e.stopPropagation();
    console.log("Delete clicked");
    onDelete(song._id);
  }}
  className="
    absolute
    top-4
    right-4

    h-10
    w-10

    rounded-full
    bg-red-500/90

    flex
    items-center
    justify-center

    opacity-0
    group-hover:opacity-100

    transition-all
    duration-300

    hover:bg-red-600
  "
>
  <FaTrash size={14} />
</button>

        {/* Play Button */}

        <button
            
  onClick={async () => {

  await playQueue(songs, index);

  navigate("/studio", {
    state: {
      from:("/home")
    },
  });

}}
          className="
            absolute
            bottom-4
            right-4

            h-12
            w-12

            rounded-full
            bg-pink-500

            flex
            items-center
            justify-center

            opacity-0
            translate-y-4

            group-hover:opacity-100
            group-hover:translate-y-0

            transition-all
            duration-300
          "
        >
          <FaPlay />
        </button>

      </div>

      {/* Content */}

      <div className="p-5">

        <h3 className="font-bold text-lg truncate">
          {song.title}
        </h3>

        <p className="mt-1 text-gray-400">
          {song.artist?.username}
        </p>

      </div>

    </div>
  );
};

export default SongCard;