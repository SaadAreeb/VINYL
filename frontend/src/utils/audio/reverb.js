import { createImpulseResponse } from "./helpers";

/**
 * Creates the complete reverb chain.
 */

export const createReverb = (
  audioContext,
  duration = 2,
  decay = 2
) => {

  const convolver = audioContext.createConvolver();

  convolver.buffer = createImpulseResponse(
    audioContext,
    duration,
    decay
  );

  const dryGain = audioContext.createGain();
  const wetGain = audioContext.createGain();

  dryGain.gain.value = 1;
  wetGain.gain.value = 0;

  return {

    convolver,

    dryGain,

    wetGain,

  };

};