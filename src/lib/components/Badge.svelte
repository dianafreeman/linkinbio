<script>
  import Icon from '../elements/Icon/Icon.svelte';

  export let active, item;

  const toggleActive = () => (active = !active);
</script>

<button
  class="flex rounded-lg bg-gray-800 hover:bg-pink-400 px-1"
  onClick={toggleActive}
  style="max-width: 140px;"
>
  <Icon
    class="w-8 h-5 m-auto"
    style="max-height: 15px;"
    type={active ? 'checkmark' : item.icontype}
  />
  <p class="leading-8 pr-2 pb-1">{item.label}</p>
</button>
