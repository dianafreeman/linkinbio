<script>
  import { tap } from 'svelte-gestures';
  import {clickOutside } from '$lib/actions/clickOutside'
  import { tweened } from 'svelte/motion';
  import Icon from './Icon.svelte';

  export let iconType, color, target;

  const duration = 100
  const lowerBound = 1;
  const upperBound = 5;

  const white = "#fff"
  const gray500 = "rgb(107 114 128)"
  const DEFAULT_COLOR = gray500
  
  color = color || DEFAULT_COLOR;

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

  $: glowStyle = glowSettings.reduce((accum, item, idx) => {
    let punctuation = idx + 1 < glowSettings.length ? ',' : '';
    return `${accum} 0 0 ${$glowSize * item.multiplier}px ${item.color}${punctuation}`;
  }, '');

  const toggleGlow = (value) =>
    value && [upperBound, lowerBound].includes(value) ? value : $glowSize < upperBound ? ($glowSize = upperBound) : ($glowSize = lowerBound);

  let wasTapped = true;

  const toggleWasTapped = (value) => (wasTapped = value || !wasTapped);
  

  function onButtonTouch(){
    toggleWasTapped()
    toggleGlow();
  }
  
  function deactivate(){
    toggleWasTapped(false)
    toggleGlow(lowerBound);
  }
</script>

<button
  use:clickOutside
  use:tap={{ timeframe: duration }}
  on:tap={onButtonTouch}
  on:focus={onButtonTouch}
  on:blur={onButtonTouch}
  on:clickOutside={deactivate}
  style:color={color}
  style:box-shadow={glowStyle}
  {...$$props}
>
  <div class="flex h-full w-16 left-0 top-0 px-2 text-center justify-center items-center">
    <span class={`flex relative h-12 w-12 text-center justify-center items-center`}>
      <Icon type={iconType} color={color}/>
    </span>
  </div>

  <div class="w-auto flex-1">
    <slot />
  </div>
</button>
