<script context="module">
  import List from '$lib/List.svelte';
  import * as json from '../content/links.json';

  export const links = json.default;
  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
<section class="text-white">
  <div class="py-5">
    <h1 class="font-computer text-center">Hi! I'm Diana.</h1>
  </div>
  <List {links} />
</section>
