<script>
  import { tap } from 'svelte-gestures';
  import { clickOutside } from '$lib/actions/clickOutside';
  import { tweened } from 'svelte/motion';
  import Icon from './Icon.svelte';

  export let iconType, color, target;

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

  $: glowStyle = glowSettings.reduce((accum, item, idx) => {
    let punctuation = idx + 1 < glowSettings.length ? ',' : '';
    return `${accum} 0 0 ${$glowSize * item.multiplier}px ${color}${punctuation}`;
  }, '');

  const toggleGlow = (value) =>
    value && [upperBound, lowerBound].includes(value)
      ? value
      : $glowSize < upperBound
      ? ($glowSize = upperBound)
      : ($glowSize = lowerBound);

  let wasTapped = true;

  const toggleWasTapped = (value) => (wasTapped = value || !wasTapped);

  function onButtonTouch() {
    toggleWasTapped();
    toggleGlow();
  }

  function deactivate() {
    toggleWasTapped(false);
    toggleGlow(lowerBound);
  }
</script>

<button
  {...$$props}
  use:clickOutside
  use:tap={{ timeframe: duration }}
  on:tap={onButtonTouch}
  on:focus={onButtonTouch}
  on:blur={onButtonTouch}
  on:clickOutside={deactivate}
  style:box-shadow={glowStyle}
>
  <div class="flex h-full left-0 top-0 text-center justify-center items-center">
    <span class={`h-8 w-8 my-2 mx-1`}>
      <Icon type={iconType} {color} />
    </span>
  </div>

  <div class="w-auto flex-1">
    <slot />
  </div>
</button>
