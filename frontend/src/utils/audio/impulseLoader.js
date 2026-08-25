export const loadImpulse = async (audioContext, url) => {

  const response = await fetch(url);

  const arrayBuffer = await response.arrayBuffer();

  return await audioContext.decodeAudioData(arrayBuffer);

};