export const createCompressor = (audioContext) => {

  const compressor = audioContext.createDynamicsCompressor();

  compressor.threshold.value = -24;

  compressor.knee.value = 30;

  compressor.ratio.value = 12;

  compressor.attack.value = 0.003;

  compressor.release.value = 0.25;

  return {
    compressor,
  };

};