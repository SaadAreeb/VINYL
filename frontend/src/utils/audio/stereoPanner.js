export const createStereoPanner = (audioContext) => {

  const panner = audioContext.createStereoPanner();

  panner.pan.value = 0;

  return {

    panner,

  };

};