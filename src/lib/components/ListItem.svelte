<script>
  import COLOR_MAP from '$lib/config/colorMap';
  import IconButton from './IconButton.svelte';

  export let item;
</script>

  <IconButton   
  class="flex items-center relative w-full text-left py-1 my-6 rounded-md overflow-hidden"
  color={item.color} iconType={item.type}>
    <p style="text-shadow: 0 0 2px {COLOR_MAP[item.color]};">
      {item.name}
    </p>
  </IconButton>