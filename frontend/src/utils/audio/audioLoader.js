/**
 * audioLoader.js
 * --------------------------
 * Loads an audio file and decodes it into an AudioBuffer.
 */

export const loadAudioBuffer = async (
  audioContext,
  audioUrl
) => {

  const response = await fetch(audioUrl);

  if (!response.ok) {

    throw new Error(
      `Failed to fetch audio: ${audioUrl}`
    );

  }

  const arrayBuffer = await response.arrayBuffer();

  const audioBuffer =
    await audioContext.decodeAudioData(arrayBuffer);

  return audioBuffer;

};