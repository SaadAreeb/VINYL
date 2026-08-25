import { useRef } from "react";
import * as SoundTouch from "soundtouchjs";


import * as AudioEngine from "../utils/audio/audioEngine";

const SONG_URL =
  "https://ik.imagekit.io/v2jfvmqsu/Backend/music/music_1782999029488_gZI6tGqK-";

  console.log(SoundTouch);

const TestAudioEngine = () => {

  const audioRef = useRef(null);

  const start = async () => {

  AudioEngine.initializeAudioEngine(audioRef.current);

  await AudioEngine.resumeAudioEngine();

};

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "40px",
      }}
    >

      <h1>Listening Studio Test</h1>

     
<audio
  ref={audioRef}
  controls
  crossOrigin="anonymous"
  src={SONG_URL}
  style={{
    width: "600px",
  }}
/>

<button onClick={start}>
  ▶ Initialize & Play
</button>

<button onClick={() => AudioEngine.applyAudioMode("burnt")}>
  Burnt
</button>

<button onClick={() => AudioEngine.applyAudioMode("bassBoost")}>
  Bass Boost
</button>

<button onClick={() => AudioEngine.applyAudioMode("vinyl")}>
  Vinyl
</button>

<button onClick={() => AudioEngine.applyAudioMode("vocal")}>
  Vocal
</button>

<button onClick={() => AudioEngine.applyAudioMode("nightcore")}>
  Nightcore
</button>

<button onClick={() => AudioEngine.applyAudioMode("slowedReverb")}>
  Slowed + Reverb
</button>

<button onClick={() => AudioEngine.applyAudioMode("muffled")}>
  Muffled
</button>

<button onClick={() => AudioEngine.applyAudioMode("eightD")}>
  8D Audio
</button>
    </div>

  );

};

export default TestAudioEngine;