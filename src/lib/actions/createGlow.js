import { tweened } from 'svelte/motion';

function createGlow(color, size) {
 
  const duration = 100;
  const lowerBound = 1;
  const upperBound = 5;

  const white = '#fff';

  let glowSize = tweened(lowerBound, { duration });

  let glowSettings = [
    {
      multiplier: 1,
      color: white,
      inset: false,
    },
    {
      color,
      multiplier: 1.5,
      inset: false,
    },
    {
      color,
      multiplier: 2,
      inset: false,
    },
    {
      color,
      multiplier: 3,
      inset: false,
    },
    {
      multiplier: 1,
      color: white,
      inset: true,
    },
    {
      color,
      multiplier: 1.5,
      inset: true,
    },
  ];

  const glowStyle = glowSettings.reduce((accum, item, idx) => {
    let punctuation = idx + 1 < glowSettings.length ? ',' : '';
    return `${accum} 0 0 ${$glowSize * item.multiplier}px ${color}${punctuation}`;
  }, 'box-shadow: ');

  const toggleGlow = (value) =>
    value && [upperBound, lowerBound].includes(value)
      ? value
      : $glowSize < upperBound
      ? ($glowSize = upperBound)
      : ($glowSize = lowerBound);


      return [glowStyle, toggleGlow]
}

export default createGlow