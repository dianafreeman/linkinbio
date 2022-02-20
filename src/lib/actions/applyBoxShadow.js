function applyBoxShadow(node) {
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

  $: glowStyle = glowSettings.reduce((accum, item, idx) => {
    let punctuation = idx + 1 < glowSettings.length ? ',' : '';
    return `${accum} 0 0 ${$glowSize * item.multiplier}px ${item.color}${punctuation}`;
  }, '');

  return `box-shadow: ${glowStyle}`;
}
