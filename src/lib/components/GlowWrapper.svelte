<script>
  import { tweened } from 'svelte/motion';

  export let color, asButton, onclick;

  const duration = 100;
  const lowerBound = 1;
  const upperBound = 6;

  const white = '#fff';

  let glowSize = tweened(upperBound, { duration });

  let glowSettings = [
    {
      multiplier: 1,
      color: white,
      inset: false,
    },
    {
      color: white,
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
    return `${accum} ${item.inset ? 'inset' : ''} 0 0 ${
      $glowSize * item.multiplier
    }px ${color}${punctuation}`;
  }, '');
</script>

{#if asButton}
  <button on:click={() => onclick()} style:box-shadow={glowStyle} {...$$props}>
    <slot />
  </button>
{:else}
  <div on:click={() => onclick()} style:box-shadow={glowStyle} {...$$props}>
    <slot />
  </div>
{/if}
