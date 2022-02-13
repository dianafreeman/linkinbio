<script>
  // import { spring } from 'svelte/motion';
  import ListItem from './ListItem/ListItem.svelte';

  export let links, tags;

  let processed = links;


  // let allTags = processed.map( i => i.tags?.indexOf(",") > -1 ? i.tags.split(",").map(i => i.trim()) : i.tags ).flat()
  // tags = Array.from( new Set(allTags))
</script>

<div class="w-full">
  <ul>
    {#each processed as item}
      <ListItem {item} />
    {/each}
  </ul>
</div>

<style>
</style>
