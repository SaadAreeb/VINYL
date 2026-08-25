export const createImpulseResponse = (
  audioContext,
  duration = 2,
  decay = 2
) => {

  const sampleRate = audioContext.sampleRate;
  const length = sampleRate * duration;

  const impulse = audioContext.createBuffer(
    2,
    length,
    sampleRate
  );

  for (let channel = 0; channel < 2; channel++) {

    const data = impulse.getChannelData(channel);

    for (let i = 0; i < length; i++) {

      data[i] =
        (Math.random() * 2 - 1) *
        Math.pow(1 - i / length, decay);

    }

  }

  return impulse;

};

/**
 * Creates a WaveShaper distortion curve.
 */

export const createDistortionCurve = (amount = 0) => {

  const samples = 44100;

  const curve = new Float32Array(samples);

  // No distortion → perfectly linear curve
  if (amount <= 0) {

    for (let i = 0; i < samples; i++) {

      curve[i] = (i * 2) / samples - 1;

    }

    return curve;

  }

  const k = amount;
  const deg = Math.PI / 180;

  for (let i = 0; i < samples; i++) {

    const x = (i * 2) / samples - 1;

    curve[i] =
      ((3 + k) * x * 20 * deg) /
      (Math.PI + k * Math.abs(x));

  }

  return curve;

};