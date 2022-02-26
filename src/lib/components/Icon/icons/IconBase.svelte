<script>
  export let glow, color;
  export let title = null;
  export let viewBox;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}
  style={!glow
    ? ''
    : `filter: drop-shadow(2px 2px 2px ${color}) drop-shadow(-2px -2px 2px ${color});`}
  {...$$props}
>
  {#if title}
    <title>{title}</title>
  {/if}
  <slot />
</svg>

<style>
  .glow {
    filter: drop-shadow(1px 1px 2px currentColor) drop-shadow(-1px 1px 2px currentColor)
      drop-shadow(1px -1px 2px currentColor) drop-shadow(-1px -1px 2px currentColor);
  }
  svg {
    stroke-width: 0;
    width: 100%;
    height: auto;
    max-height: 100%;
  }
</style>
