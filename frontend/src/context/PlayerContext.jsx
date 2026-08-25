import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";

import {
  initializeAudioEngine,
  resumeAudioEngine,
  applyAudioMode,
} from "../utils/audio/audioEngine";


const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {

const audioRef = useRef(new Audio());

useEffect(() => {
  audioRef.current.crossOrigin = "anonymous";
}, []);
  // ================= State =================

  const [currentSong, setCurrentSong] = useState(() => {

  const savedSong = localStorage.getItem("currentSong");

  return savedSong ? JSON.parse(savedSong) : null;

});

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(0.75);

  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

 const [audioMode, setAudioMode] = useState(null);
  

  // ================= Refs =================

  const queueRef = useRef([]);
  const currentIndexRef = useRef(-1);

  // ================= Volume =================

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // ================= Play Song =================

const playSong = useCallback(async (song) => {

  console.log(audioRef.current);
console.log(audioRef.current instanceof HTMLAudioElement);

  if (!song) return;

  try {

    audioRef.current.pause();

    audioRef.current.src = song.uri;

    await initializeAudioEngine(audioRef.current);

    await resumeAudioEngine();

    setCurrentSong(song);

    await audioRef.current.play();

    setAudioMode(null);

applyAudioMode(null);

    applyAudioMode(audioMode);

    setIsPlaying(true);

  } catch (error) {

    console.error(error);

  }

}, [audioMode]);


  // ================= Queue =================

  const playQueue = useCallback((songs, index = 0) => {

    setQueue(songs);
    queueRef.current = songs;

    setCurrentIndex(index);
    currentIndexRef.current = index;

    playSong(songs[index]);

  }, [playSong]);

  // ================= Next =================

  const nextSong = useCallback(() => {

    const nextIndex = currentIndexRef.current + 1;

    if (nextIndex >= queueRef.current.length) return;

    currentIndexRef.current = nextIndex;
    setCurrentIndex(nextIndex);

    playSong(queueRef.current[nextIndex]);

  }, [playSong]);

  // ================= Previous =================

  const previousSong = useCallback(() => {

    const prevIndex = currentIndexRef.current - 1;

    if (prevIndex < 0) return;

    currentIndexRef.current = prevIndex;
    setCurrentIndex(prevIndex);

    playSong(queueRef.current[prevIndex]);

  }, [playSong]);

  // ================= Pause =================

  const pauseSong = () => {

    audioRef.current.pause();

    setIsPlaying(false);

  };

  // ================= Toggle =================

  const togglePlayPause = async () => {

  if (!currentSong) return;

  if (isPlaying) {

    audioRef.current.pause();

    setIsPlaying(false);

    return;
  }

  try {

    // Restore after refresh
    if (!audioRef.current.src) {
      audioRef.current.src = currentSong.uri;
    }

    await initializeAudioEngine(audioRef.current);

    await resumeAudioEngine();

    await audioRef.current.play();

    applyAudioMode(audioMode);

    setIsPlaying(true);

  } catch (error) {

    console.error(error);

  }

};

    

  // ================= Seek =================

  const seekTo = (time) => {

    audioRef.current.currentTime = time;

    setCurrentTime(time);

  };

  // ================= Audio Events =================
  useEffect(() => {

  if (currentSong) {

    localStorage.setItem(
      "currentSong",
      JSON.stringify(currentSong)
    );

  }

}, [currentSong]);

useEffect(() => {

  if (!currentSong) return;

  audioRef.current.src = currentSong.uri;

}, []);


  
  useEffect(() => {

  applyAudioMode(audioMode);

}, [audioMode]);

  useEffect(() => {

    const audio = audioRef.current;

    const updateTime = () => {

      setCurrentTime(audio.currentTime);

    };

    const updateDuration = () => {

      setDuration(audio.duration || 0);

    };

    const handleEnded = () => {

      nextSong();

    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {

      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);

    };

  }, [nextSong]);

  return (

    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,

        currentTime,
        duration,

        volume,

        queue,
        currentIndex,

        audioRef,

        playSong,
        playQueue,

        pauseSong,
        togglePlayPause,

        nextSong,
        previousSong,

        seekTo,
        setVolume,

        audioMode,
setAudioMode,
      }}
    >

      {children}

    </PlayerContext.Provider>

  );

};

export const usePlayer = () => useContext(PlayerContext);