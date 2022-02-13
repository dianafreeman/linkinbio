<script context="module">
  import List from '$components/List.svelte';
  import * as json from '$content/links.json';

  export const links = json.default.reverse();
  export const prerender = true;

  let socials = ['linkedin', 'github', 'film'];
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
<section class="text-white">
  <div class="pt-5 text-center">
    <h1 class="font-computer text-center">Hi! I'm Diana.</h1>
    <ul class="flex flex-row w-full justify-center place-content-between">
      {#each socials as social}
        <li class="px-1 m-1 text-center leading-4">
          <a class="px-1" target="_blank" href="#"> <i data-feather={social} /> </a>
        </li>
      {/each}
    </ul>
  </div>
  <List {links} />
</section>
