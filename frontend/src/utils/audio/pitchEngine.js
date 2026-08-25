import * as ST from "soundtouchjs";

console.log(ST);
console.log(ST.getWebAudioNode);

/**
 * Creates a SoundTouch filter for an AudioBuffer.
 */
export const createPitchEngine = (
  audioBuffer,
  pitch = 1,
  tempo = 1
) => {

  const soundTouch = new SoundTouch();

  // Independent controls
  soundTouch.pitch = pitch;
  soundTouch.tempo = tempo;

  const source = new WebAudioBufferSource(audioBuffer);

  const filter = new SimpleFilter(
    source,
    soundTouch
  );

  return {

    soundTouch,

    filter,

  };

};