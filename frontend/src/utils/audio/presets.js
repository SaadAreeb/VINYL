/**
 * presets.js
 * ----------
 * Single source of truth for every Listening Studio mode.
 * Every mode id must match the id in constants/audioModes.js
 */

export const AUDIO_PRESETS = {


burnt: {

  // Playback
  playbackRate: 0.94,
  preservesPitch: false,

  // EQ
  bass: 6,
  treble: -10,

  // Filters
  lowpassFreq: 2800,
  highpassFreq: 120,

  // Distortion
  distortion: 72,

  // Reverb
  reverbMix: 0.06,
  reverbDuration: 1.2,
  reverbDecay: 1.8,

  // Stereo
  panLFO: 0,
  panSpeed: 0,

  // Compressor
  threshold: -18,
  ratio: 6,
  attack: 0.003,
  release: 0.15,

  // IR
  impulse: "burntroom",

},
vocal: {

  // Playback
  playbackRate: 1,
  preservesPitch: true,

  // EQ
  bass: -8,
  treble: 2,

  // Filters
  lowpassFreq: 12000,
  highpassFreq: 180,

  // Distortion
  distortion: 0,

  // Reverb
  reverbMix: 0,
  reverbDuration: 1,
  reverbDecay: 2,

  // Stereo
  panLFO: 0,
  panSpeed: 0,

  // Compressor
  threshold: -28,
  ratio: 2,
  attack: 0.003,
  release: 0.08,

  // IR
  impulse: "room",

},

  bassBoost: {

  // Playback
  playbackRate: 1,
  preservesPitch: true,

  // EQ
  bass: 12,
  treble: -2,

  // Filters
  lowpassFreq: 18000,
  highpassFreq: 35,

  // Distortion
  distortion: 5,

  // Reverb
  reverbMix: 0,

  reverbDuration: 1,
  reverbDecay: 2,

  // Stereo
  panLFO: 0,
  panSpeed: 0,

  // Compressor
  threshold: -14,
  ratio: 5,
  attack: 0.002,
  release: 0.12,

  // IR
  impulse: "room",

},
vinyl: {

  // Playback
  playbackRate: 1,
  preservesPitch: true,

  // EQ
  bass: 5,
  treble: -8,

  // Filters
  lowpassFreq: 9000,
  highpassFreq: 45,

  // Distortion
  distortion: 10,

  // Reverb
  reverbMix: 0.12,
  reverbDuration: 1.6,
  reverbDecay: 2.2,

  // Stereo
  panLFO: 0,
  panSpeed: 0,

  // Compressor
  threshold: -22,
  ratio: 3,
  attack: 0.01,
  release: 0.25,

  // IR
  impulse: "room",

},
  // ================= Future Modes =================
  slowedReverb: {

  // Playback
  playbackRate: 0.84,
  preservesPitch: false,

  // EQ
  bass: 5,
  treble: -7,

  // Filters
  lowpassFreq: 12500,
  highpassFreq: 40,

  // Saturation
  distortion: 3,

  // Reverb
  reverbMix: 0.28,
  reverbDuration: 2.8,
  reverbDecay: 2.4,

  // Stereo
  panLFO: 0,
  panSpeed: 0,

  // Compressor
  threshold: -22,
  ratio: 3,
  attack: 0.01,
  release: 0.35,

  // IR
  impulse: "hall",

},
  nightcore: {
  

  // Playback
  playbackRate: 1.28,
  preservesPitch: false,

  // EQ
  bass: -2,
  treble: 10,

  // Filters
  lowpassFreq: 20000,
  highpassFreq: 100,

  // Distortion
  distortion: 2,

  // Reverb
  reverbMix: 0.04,
  reverbDuration: 1,
  reverbDecay: 1.5,

  // Stereo
  panLFO: 0,
  panSpeed: 0,

  // Compressor
  threshold: -18,
  ratio: 2.5,
  attack: 0.003,
  release: 0.10,

  // IR
  impulse: "room",


  },
  muffled: {

  // Playback
  playbackRate: 1,
  preservesPitch: true,

  // EQ
  bass: 2,
  treble: -18,

  // Filters
  lowpassFreq: 850,
  highpassFreq: 180,

  // Distortion
  distortion: 0,

  // Reverb
  reverbMix: 0.12,
  reverbDuration: 1.4,
  reverbDecay: 2,

  // Stereo
  panLFO: 0,
  panSpeed: 0,

  // Compressor
  threshold: -22,
  ratio: 2,
  attack: 0.01,
  release: 0.25,

  // IR
  impulse: "room",

},
eightD: {

  // Playback
  playbackRate: 1,
  preservesPitch: true,

  // EQ
  bass: 2,
  treble: 2,

  // Filters
  lowpassFreq: 18000,
  highpassFreq: 35,

  // Distortion
  distortion: 0,

  // Reverb
  reverbMix: 0.08,
  reverbDuration: 1.8,
  reverbDecay: 2,

  // Stereo
  panLFO: 1,
  panSpeed: 0.12,

  // Compressor
  threshold: -20,
  ratio: 2,
  attack: 0.01,
  release: 0.20,

  // IR
  impulse: "room",

},

};

export const getPreset = (modeId = "studio") => {
  return AUDIO_PRESETS[modeId] || AUDIO_PRESETS.studio;
};