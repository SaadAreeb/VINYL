/**
 * Creates the filters used by the Listening Studio.
 * Initially everything is neutral (no audible change).
 */

export const createFilters = (audioContext) => {

    const lowPass = audioContext.createBiquadFilter();
lowPass.type = "lowpass";
lowPass.frequency.value = 20000;

const highPass = audioContext.createBiquadFilter();

highPass.type = "highpass";

highPass.frequency.value = 20;

  // Bass
  const bassFilter = audioContext.createBiquadFilter();
  bassFilter.type = "lowshelf";
  bassFilter.frequency.value = 150;
  bassFilter.gain.value = 0;

  // Treble
  const trebleFilter = audioContext.createBiquadFilter();
  trebleFilter.type = "highshelf";
  trebleFilter.frequency.value = 3000;
  trebleFilter.gain.value = 0;

  return {
    bassFilter,
    trebleFilter,
     lowPass,
       highPass,
  };

};