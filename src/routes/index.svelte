<script context="module">
  import * as linkJson from '$content/links.json';
  import * as socialJson from '$content/socials.json';
  import IconButton from '$lib/components/IconButton.svelte';
  import ListItem from '$lib/components/ListItem.svelte';

  export const links = linkJson.default;
  export const socials = socialJson.default;
  export const prerender = true;
</script>

<svelte:head>
  <title>LinkInBio | @dianasfreeman</title>
</svelte:head>
<section class="text-white text-center">
  <div class="pt-5">
    <div
      class="relative p-5 pt-10 border-gray-500 border-r border-l border-b rounded-t-lg rounded-b-md"
  
      >
      <div class="absolute top-0 left-0 w-full border border-gray-500 bg-gray-500 rounded-t-lg">
        <ul class="flex flex-row w-full justify-end">
          {#each socials as social (social.url)}
            <li class="list-none">
              <IconButton
                class="flex items-center relative w-full text-left rounded-full"
                target={social.url}
                iconType={social.type}
              />
            </li>
          {/each}
        </ul>
      </div>
      <h1 class="font-computer text-center pb-5 pt-10">Hi! I'm Diana.</h1>

      <!-- SORT AND FILTER -->
      <div class="w-full justify-between m-auto">
        {#each links as item, idx}
          <ListItem {item} index={idx} />
        {/each}
      </div>
    </div>
  </div>
</section>
