<script>
  export let glow,
    color,
    fill = '#fff',
    title = null,
    viewBox;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}
  {fill}
  style={glow
    ? `filter: drop-shadow(1px 1px 2px ${color}) drop-shadow(-1px 1px 2px ${color})
  drop-shadow(1px -1px 2px ${color}) drop-shadow(-1px -1px 2px ${color});`
    : ''}
>
  {#if title}
    <title>{title}</title>
  {/if}
  <slot />
</svg>

<style>
  svg {
    stroke-width: 0;
    width: 100%;
    height: auto;
    max-height: 100%;
  }
</style>
