<script>
  import Icon from './Icon/index.svelte';

  export let iconType, color, url, glow, wrapperClass;
</script>

<a href={url} {...$$props}>
  <Icon type={iconType} {color} {glow} {wrapperClass} />
  <div class="w-auto flex-1">
    <slot />
  </div>
</a>
