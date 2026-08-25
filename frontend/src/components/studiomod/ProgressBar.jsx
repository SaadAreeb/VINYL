import { usePlayer } from "../../context/PlayerContext";

const ProgressBar = () => {

  const {
    currentTime,
    duration,
    seekTo,
  } = usePlayer();

  const formatTime = (time) => {

    if (!time || Number.isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;

  };

  return (

    <div className="w-full">

      <div className="mb-3 flex justify-between text-sm text-gray-400">

        <span>{formatTime(currentTime)}</span>

        <span>{formatTime(duration)}</span>

      </div>

      <input
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={(e) => seekTo(Number(e.target.value))}
        className="
          h-2
          w-full
          cursor-pointer
          appearance-none
          rounded-full
          bg-white/10
          accent-pink-500
        "
      />

    </div>

  );

};

export default ProgressBar;