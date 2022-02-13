<script>
  import { spring } from 'svelte/motion';
  import GlowingItem from './GlowingButton.svelte';

  export let links;
  let classes = "w-full text-left py-3 px-5 my-3 rounded-md"
</script>

<div class="w-11/12">
  <ul>
    {#each links as item}
    <li>
      <GlowingItem {classes} >
       <a target="_blank" href={item.destination}>{item.name}</a>
      </GlowingItem>
    </li>
    {/each}
  </ul>
</div>

<style>
</style>
