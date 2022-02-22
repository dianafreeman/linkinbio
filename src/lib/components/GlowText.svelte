<script>
  export let color;

  const white = '#fff';

  let textGlow = `text-shadow: 0px 0px 2px ${white},
  1px 1px 3px ${color}, 
  1px -1px 3px ${color}, 
  -1px -1px 3px ${color}, 
   -1px 1px 3px ${color};`;
</script>

<p {...$$props} style={textGlow}>
  <slot />
</p>
