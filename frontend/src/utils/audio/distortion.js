import { createDistortionCurve } from "./helpers";

export const createDistortion = (audioContext) => {

  const waveShaper = audioContext.createWaveShaper();

  waveShaper.curve = createDistortionCurve(0);

  waveShaper.oversample = "4x";

  return {

    waveShaper,

  };

};