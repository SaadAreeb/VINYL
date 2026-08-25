
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate,useLocation } from "react-router-dom";
import AudioModeCard from "../components/studiomod/AudioModeCard";
import { AUDIO_MODES } from "../constants/audioModes";
import ProgressBar from "../components/studiomod/ProgressBar";
import PlaybackControls from "../components/studiomod/PlaybackControls";
import studioBg from "../assets/videos/studio.mp4";


import { usePlayer } from "../context/PlayerContext";

const Studio = () => {


  const navigate = useNavigate();
  const location = useLocation();

  const { currentSong,audioMode,
  setAudioMode, } = usePlayer();

  console.log(currentSong);
  
console.log("Studio Rendered");


  if (!currentSong) {

    return (

      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#09090B]
        "
      >

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-[#18181B]
            px-12
            py-10
            text-center
          "
        >

          <h1
            className="
              text-4xl
              font-bold
              text-white
            "
          >
            No Song Selected
          </h1>

          <p
            className="
              mt-4
              text-gray-400
            "
          >
            Play any song to enter the Listening Studio.
          </p>

        </div>

      </div>

    );

  }

  return (

    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
      "
    >

      {/* Background */}

<video
  autoPlay
  muted
  loop
  playsInline
  src={studioBg}
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    opacity-45
    scale-110
  "
/>

      {/* Overlay */}
<div
className="
absolute
inset-0
bg-linear-to-b
from-black/20
via-black/35
to-black/70
"
/>

    

     {/* Back Button */}

<div className="absolute top-8 left-8">

 <button
  onClick={() => {
    const from = location.state?.from;

    console.log("From:", from);

    if (from) {
      navigate(from);
    } else {
      navigate("/home");
    }
  }}
   className="
    fixed
    top-8
    left-8
    z-50
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    border
    border-white/10
    bg-white/10
    backdrop-blur-2xl
    shadow-[0_0_30px_rgba(255,255,255,.08)]
    transition-all
    duration-300
    hover:scale-110
    hover:bg-white/20
    hover:shadow-[0_0_40px_rgba(255,255,255,.18)]
"
>
    <FaArrowLeft className="text-xl text-white" />
</button>

</div>
     
  

      {/* Content */}

      <div
        className="
          relative
          z-20
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          px-8
        "
      >

        {/* Cover */}

        <div
          className="
            rounded-[36px]
            border
            border-white/10
            bg-white/10
            p-4
            backdrop-blur-3xl
           shadow-[0_0_90px_rgba(236,72,153,.22)]
          "
        >
            
<img
  src={currentSong.coverImage}
  alt={currentSong.title}
  className="
    h-56
    w-56
    rounded-3xl
    object-cover
    shadow-[0_20px_60px_rgba(0,0,0,.45)]
    transition-all
    duration-500
    hover:scale-105
  "
/>

        </div>

        {/* Song */}

        <h1
          className="
            mt-10
            text-center
            text-6xl
            font-black
            tracking-tight
            text-white
          "
        >
          {currentSong.title}
        </h1>

        {/* Artist */}
 
      

<p
  className="
    mt-5
    text-2xl
    font-medium
    text-gray-300
  "
>
  {currentSong.artist?.username}
</p>

<div className="mt-10 w-full max-w-xl">

  <ProgressBar />

  <PlaybackControls />

</div>




{/* Audio Modes */}

<section
  className="
    mt-24
    w-full
    max-w-6xl
  "
>

  <div
    className="
      mb-10
    "
  >

    <h2
      className="
        text-4xl
        font-black
        text-white
      "
    >
      Audio Modes
    </h2>

    <p
      className="
        mt-3
        text-lg
        text-gray-400
      "
    >
      Choose how your music should sound.
    </p>

  </div>

  <div
  className="
    grid
    grid-cols-1
    gap-6
    md:grid-cols-2
  "
>

  {AUDIO_MODES.map((mode) => (

    <AudioModeCard
      key={mode.id}
      mode={mode}
      isActive={audioMode === mode.id}
      onClick={() => {

  console.log("Clicked:", mode.title);

  setAudioMode(mode.id);

  setBassGain(15);

}}
    />

  ))}

</div>

</section>

      </div>

    </div>

  );

};

export default Studio;