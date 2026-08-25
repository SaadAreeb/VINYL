import {
  FaStepBackward,
  FaStepForward,
  FaPause,
  FaPlay,
} from "react-icons/fa";

import { usePlayer } from "../../context/PlayerContext";

const PlaybackControls = () => {

  const {
    isPlaying,
    togglePlayPause,
    nextSong,
    previousSong,
  } = usePlayer();

  return (

    <div
      className="
        mt-8
        flex
        items-center
        justify-center
        gap-6
      "
    >

      {/* Previous */}

      <button
        onClick={previousSong}
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          text-xl
          text-white
          transition-all
          duration-300
          hover:scale-110
          hover:border-pink-500
        "
      >

        <FaStepBackward />

      </button>

      {/* Play / Pause */}

      <button
        onClick={togglePlayPause}
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-linear-to-r
          from-pink-500
          via-orange-400
          to-yellow-400
          text-3xl
          text-white
          shadow-[0_0_35px_rgba(236,72,153,.35)]
          transition-all
          duration-300
          hover:scale-110
        "
      >

        {isPlaying ? <FaPause /> : <FaPlay />}

      </button>

      {/* Next */}

      <button
        onClick={nextSong}
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          text-xl
          text-white
          transition-all
          duration-300
          hover:scale-110
          hover:border-pink-500
        "
      >

        <FaStepForward />

      </button>

    </div>

  );

};

export default PlaybackControls;