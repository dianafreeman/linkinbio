<script context="module">
  import * as linkJson from '$content/contentLinks.json';
  import * as socialJson from '$content/navLinks.json';
  import IconButton from '$lib/components/IconButton.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import COLOR_MAP from '$lib/config/colorMap';

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
        <nav class="flex flex-row w-full justify-end">
          {#each socials as social (social.url)}
            <IconButton
              class="m-1 ring-2 ring-gray-600 hover:ring-gray-300 focus:ring-gray-300 bg-gray-600 hover:bg-gray-800 focus:bg-gray-800 rounded-full px-2"
              wrapperClass="h-6 w-6 my-2 mx-1"
              url={social.url}
              iconType={social.icon}
              color={COLOR_MAP[social.icon]}
              glow={false}
            />
          {/each}
        </nav>
      </div>
      <h1 class="font-computer text-center pb-5 pt-10 text-7xl">Hi! I'm Diana.</h1>

      <div class="w-full m-auto">
        {#each links as item, idx}
          <ListItem {item} />
        {/each}
      </div>
    </div>
  </div>
</section>
