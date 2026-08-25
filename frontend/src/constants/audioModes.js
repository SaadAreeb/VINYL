import {
  FaFire,
  FaRecordVinyl,
  FaVolumeUp,
  FaMicrophone,
  FaCloudRain,
  FaBolt,
  FaMask,
  FaGlobe,
} from "react-icons/fa";

export const AUDIO_MODES = [

  {
    id: "burnt",
    title: "Burnt",
    icon: FaFire,
    description: "Warm cassette-inspired sound with vintage saturation.",
    color: "from-orange-500 to-red-600",
  },

  {
    id: "vinyl",
    title: "Vinyl",
    icon: FaRecordVinyl,
    description: "Smooth analog warmth with subtle room ambience.",
    color: "from-purple-500 to-pink-500",
  },

  {
    id: "bassBoost",
    title: "Bass Boost",
    icon: FaVolumeUp,
    description: "Deep, punchy bass without sacrificing clarity.",
    color: "from-blue-500 to-cyan-500",
  },

  {
    id: "vocal",
    title: "Vocal",
    icon: FaMicrophone,
    description: "Enhances vocal clarity for podcasts and acoustic music.",
    color: "from-emerald-500 to-teal-500",
  },

  {
    id: "slowedReverb",
    title: "Slowed + Reverb",
    icon: FaCloudRain,
    description: "Dreamy slowed playback with spacious hall reverb.",
    color: "from-indigo-500 to-violet-600",
  },

  {
    id: "nightcore",
    title: "Nightcore",
    icon: FaBolt,
    description: "Fast, energetic playback with bright sparkling highs.",
    color: "from-yellow-400 to-orange-500",
  },

  {
    id: "muffled",
    title: "Muffled",
    icon: FaMask,
    description: "Simulates music playing from another room.",
    color: "from-gray-500 to-slate-700",
  },

  {
    id: "eightD",
    title: "8D Audio",
    icon: FaGlobe,
    description: "Slow stereo movement around your head. Best with headphones.",
    color: "from-sky-500 to-blue-700",
  },

];