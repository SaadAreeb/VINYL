import {
  FaBackward,
  FaForward,
  FaPlay,
  FaPause,
  FaVolumeUp,
} from "react-icons/fa";

import heroGif from "../../assets/gif/Hero.gif";
import { usePlayer } from "../../context/PlayerContext";

const Player = () => { 
const {
  currentSong,
  isPlaying,
  togglePlayPause,
  seekTo,
  currentTime,
  duration,
  volume,
  setVolume,
   nextSong,
  previousSong,
} = usePlayer();
//timer
const progress =
  duration > 0 ? (currentTime / duration) * 100 : 0;

  console.log({
  currentTime,
  duration,
  progress,
});

  return (
    <footer className="h-20 bg-[#101014] border-t border-white/10">

      <div className="h-full px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="h-full flex items-center gap-6">

          {/* ================= Left ================= */}

         <img
  src={heroGif}
  alt="Cover"
  className="w-12 h-12 rounded-lg object-cover shrink-0"
/>

<div className="min-w-0">

  <h3 className="text-sm font-semibold truncate">
    {currentSong?.title || "No Song Playing"}
  </h3>

  <p className="text-xs text-gray-400 truncate">
    {currentSong?.artist?.username || "Select a song"}
  </p>

</div>

          {/* ================= Center ================= */}

          <div className="flex flex-2 flex-col items-center justify-center gap-1">

            <div className="flex items-center gap-4">

             <FaBackward
  onClick={previousSong}
  className="cursor-pointer text-gray-400 hover:text-white transition"
/>

            <button
  onClick={togglePlayPause}
  className="
  className="
    mt-1
    h-8
    w-8
    rounded-full
    bg-green-500
    flex
    items-center
    justify-center
    hover:scale-105
    transition
  
>
  {isPlaying ? (
    <FaPause className="text-sm text-white" />
  ) : (
    <FaPlay className="ml-0.5 text-sm text-white" />
  )}
</button>

              <FaForward
  onClick={nextSong}
  className="cursor-pointer text-gray-400 hover:text-white transition"
/>

            </div>

           <div className="w-full max-w-md -mt-1">

  {/* Time */}

  <div className="flex justify-between text-xs text-gray-400 mb-2">

    <span>
      {Math.floor(currentTime / 60)}:
      {String(Math.floor(currentTime % 60)).padStart(2, "0")}
    </span>

    <span>
      {Math.floor(duration / 60)}:
      {String(Math.floor(duration % 60)).padStart(2, "0")}
    </span>

  </div>

  {/* Seek Bar */}

  <input
    type="range"
    min={0}
    max={duration || 0}
    value={currentTime}
    onChange={(e) => seekTo(Number(e.target.value))}
    className="
      w-full
      accent-green-500
      cursor-pointer
      
    "
  />

</div>

          </div>

          {/* ================= Right ================= */}

          <div className="flex flex-1 items-center justify-end gap-3 mr-4">

            <FaVolumeUp className="text-gray-400" />

           <input
  type="range"
  min="0"
  max="1"
  step="0.01"
  value={volume}
  onChange={(e) => setVolume(Number(e.target.value))}
  className="
    w-24
    sm:w-28
    md:w-32
    accent-green-500
    cursor-pointer
  "
/>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Player;