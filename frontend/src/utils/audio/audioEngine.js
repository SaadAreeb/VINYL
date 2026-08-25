import hallIR from "../../assets/impulses/hall.wav";
import { createFilters } from "./filters";
import { getPreset } from "./presets";
import { createReverb } from "./reverb";
import { createImpulseResponse } from "./helpers";
import { createDistortion } from "./distortion";
import { createDistortionCurve } from "./helpers";
import { createStereoPanner } from "./stereoPanner";
import { createCompressor } from "./compressor";
import { loadImpulse } from "./impulseLoader.js";

console.log("✅ audioEngine.js loaded");


let compressor = null;
let lowPassFilter = null;
let stereoPanner = null;
let waveShaper = null;
let highPassFilter = null;
let audioContext = null;
let sourceNode = null;
let boundAudioElement = null;
let panOscillator = null;
let panGain = null;
let convolver = null;
let dryGain = null;
let wetGain = null;
let bassFilter = null;
let trebleFilter = null;

let currentMode = "burnt";

const RAMP_TIME = 0.25;



export const initializeAudioEngine = async (audioElement) => {
  console.log("🎵 initializeAudioEngine");


  if (!audioElement) {
    console.log("No audio element");
    return null;
  }

  // Reuse existing engine for the same audio element
  if (audioContext && boundAudioElement === audioElement) {
    console.log("Reusing existing AudioContext");
    return audioContext;
  }

  audioContext = new (window.AudioContext || window.webkitAudioContext)();

  boundAudioElement = audioElement;

  sourceNode = audioContext.createMediaElementSource(audioElement);

  // ================= Create Nodes =================

  const stereo = createStereoPanner(audioContext);
  const distortion = createDistortion(audioContext);

  const reverb = createReverb(audioContext);

  convolver = reverb.convolver;

convolver.buffer = await loadImpulse(
  audioContext,
   hallIR
);

dryGain = reverb.dryGain;
wetGain = reverb.wetGain;

  const filters = createFilters(audioContext);
  const comp = createCompressor(audioContext);

  compressor = comp.compressor;
  bassFilter = filters.bassFilter;
  trebleFilter = filters.trebleFilter;
  lowPassFilter = filters.lowPass;
  highPassFilter = filters.highPass;

  stereoPanner = stereo.panner;

  
  dryGain = reverb.dryGain;
  wetGain = reverb.wetGain;

  waveShaper = distortion.waveShaper;

  // ================= 8D LFO =================

  panOscillator = audioContext.createOscillator();

  panGain = audioContext.createGain();

  panOscillator.type = "sine";

  panOscillator.frequency.value = 0;

  panGain.gain.value = 0;

  panOscillator.connect(panGain);

  panGain.connect(stereoPanner.pan);

  panOscillator.start();

  // ================= Audio Graph =================

     sourceNode.connect(bassFilter);
   bassFilter.connect(audioContext.destination);
  bassFilter.connect(trebleFilter);
  trebleFilter.connect(audioContext.destination);
  trebleFilter.connect(lowPassFilter);
  lowPassFilter.connect(audioContext.destination);
  lowPassFilter.connect(highPassFilter);
  highPassFilter.connect(audioContext.destination);
 // highPassFilter.connect(waveShaper);
  waveShaper.connect(audioContext.destination);
  sourceNode.connect(stereoPanner);
  stereoPanner.connect(audioContext.destination);
   stereoPanner.connect(compressor);
   compressor.connect(audioContext.destination);

  // ---------- Dry ----------

  compressor.connect(dryGain);

  dryGain.connect(audioContext.destination);

  // ---------- Wet ----------

  compressor.connect(convolver);

  convolver.connect(wetGain);

  wetGain.connect(audioContext.destination);

  console.log("✅ Audio graph created");

  applyAudioMode(currentMode);

  return audioContext;

};

export const resumeAudioEngine = async () => {

  console.log("▶ resumeAudioEngine");

  if (!audioContext) return;

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

};

//APPLY MODE


  export const applyAudioMode = (modeId) => {

      if (!audioContext) {
    console.log("AudioContext not initialized yet");
    return;
  }

  // Original / Default audio
  if (!modeId) {

    // Reset everything to neutral

    bassFilter.gain.setTargetAtTime(0, audioContext.currentTime, RAMP_TIME);
    trebleFilter.gain.setTargetAtTime(0, audioContext.currentTime, RAMP_TIME);

    lowPassFilter.frequency.setTargetAtTime(20000, audioContext.currentTime, RAMP_TIME);
    highPassFilter.frequency.setTargetAtTime(20, audioContext.currentTime, RAMP_TIME);

    waveShaper.curve = createDistortionCurve(0);

    dryGain.gain.setTargetAtTime(1, audioContext.currentTime, RAMP_TIME);
    wetGain.gain.setTargetAtTime(0, audioContext.currentTime, RAMP_TIME);

    if (panGain) {
      panGain.gain.setTargetAtTime(0, audioContext.currentTime, RAMP_TIME);
    }

    if (boundAudioElement) {
      boundAudioElement.playbackRate = 1;
      boundAudioElement.preservesPitch = true;
    }

    return;
  }


  console.log("🎚 applyAudioMode:", modeId);

  currentMode = modeId;



  const preset = getPreset(modeId);

  if (!preset) {
  console.warn("Preset not found:", modeId);
  return;
}

  console.log("Preset:", preset);

  const now = audioContext.currentTime;

  
  console.log("Current Mode:", currentMode);
console.log("Preset:", preset);

  
  // ---------- Distortion ----------
waveShaper.curve = createDistortionCurve(
  preset.distortion ?? 0
);

  // Apply Bass
  bassFilter.gain.setTargetAtTime(
    preset.bass,
    now,
    RAMP_TIME
  );

  // Apply Treble
  trebleFilter.gain.setTargetAtTime(
    preset.treble,
    now,
    RAMP_TIME
  );

  console.log("Bass:", preset.bass);
  console.log("Treble:", preset.treble);



const reverbMix = preset.reverbMix ?? 0;
const reverbDuration = preset.reverbDuration ?? 1;
const reverbDecay = preset.reverbDecay ?? 2;

dryGain.gain.setTargetAtTime(
  1 - reverbMix,
  now,
  RAMP_TIME
);

wetGain.gain.setTargetAtTime(
  reverbMix,
  now,
  RAMP_TIME
);

//precaution
if (lowPassFilter) {
  lowPassFilter.frequency.setTargetAtTime(
    preset.lowpassFreq,
    now,
    RAMP_TIME
  );
}

// ---------- High Pass ----------
if (highPassFilter) {
  highPassFilter.frequency.setTargetAtTime(
    preset.highpassFreq ?? 20,
    now,
    RAMP_TIME
  );
}

console.log("panLFO:", preset.panLFO);
console.log("panSpeed:", preset.panSpeed);
console.log("highpass:", preset.highpassFreq);

// ---------- 8D Audio ----------

const panAmount = preset.panLFO ?? 0;

const panSpeed = preset.panSpeed ?? 0.15;

if (panGain) {
  panGain.gain.setTargetAtTime(
    panAmount,
    now,
    RAMP_TIME
  );
}

if (panOscillator) {
  panOscillator.frequency.setTargetAtTime(
    panSpeed,
    now,
    RAMP_TIME
  );
}



  // Playback Speed
  if (boundAudioElement) {

    boundAudioElement.playbackRate = preset.playbackRate;

    if ("preservesPitch" in boundAudioElement) {

      boundAudioElement.preservesPitch = preset.preservesPitch;

    } else if ("webkitPreservesPitch" in boundAudioElement) {

      boundAudioElement.webkitPreservesPitch = preset.preservesPitch;

    } else if ("mozPreservesPitch" in boundAudioElement) {

      boundAudioElement.mozPreservesPitch = preset.preservesPitch;

    }

  }

};

export const setBassGain = (value) => {

  if (!bassFilter || !audioContext) return;

  bassFilter.gain.setTargetAtTime(
    value,
    audioContext.currentTime,
    RAMP_TIME
  );

};

export const setTrebleGain = (value) => {

  if (!trebleFilter || !audioContext) return;

  trebleFilter.gain.setTargetAtTime(
    value,
    audioContext.currentTime,
    RAMP_TIME
  );

};

export const getAudioContext = () => audioContext;

export const getCurrentMode = () => currentMode;
