<script>
  // import { spring } from 'svelte/motion';
  import ListItem from './ListItem.svelte';

  export let links;

  let processed = links;

  // let allTags = processed.map( i => i.tags?.indexOf(",") > -1 ? i.tags.split(",").map(i => i.trim()) : i.tags ).flat()
  // tags = Array.from( new Set(allTags))
</script>

<div class="w-full my-2">
  <nav>
    {#each processed as item}
      <ListItem {item} color={item.color} />
    {/each}
  </nav>
</div>

<style>
</style>
