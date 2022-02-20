<script context="module">
  import * as json from '$content/links.json';
  import IconButton from '$lib/components/IconButton.svelte';
  import ListItem from '$lib/components/ListItem.svelte';

  export const links = json.default;
  export const prerender = true;

  let socials = [
    {
      url: 'https://www.linkedin.com/in/dianasteakleyfreeman',
      name: 'connect on linkedin',
      type: 'linkedin',
    },
    {
      url: 'https://github.com/dianafreeman/',
      name: 'check out my github',
      type: 'github',
    },
    {
      url: 'https://www.tiktok.com/@dianasfreeman',
      name: 'find me on tiktok',
      type: 'tiktok',
    },
  ];
</script>

<svelte:head>
  <title>LinkInBio | @dianasfreeman</title>
</svelte:head>
<section class="text-white">
  <div class="pt-5 text-center ">
    <div
      class="relative pt-10 border-gray-500 border-r border-l border-b rounded-t-lg rounded-b-md"
    >
      <div
        class="absolute top-0 left-0 w-full h-10 border border-gray-500 bg-gray-500 rounded-t-lg"
      />
      <h1 class="font-computer text-center my-2">Hi! I'm Diana.</h1>
      <ul class="flex flex-row w-full justify-center place-content-between my-2">
        {#each socials as social (social.url)}
          <li class="list-none mx-3">
            <IconButton
              class="flex items-center relative w-full text-left py-1 my-1 rounded-full"
              target={social.url}
              iconType={social.type}
            />
          </li>
        {/each}
      </ul>
    </div>

    <div class="w-full flex justify-between">
      {#each links as item, idx}
        <ListItem {item} index={idx} />
      {/each}
    </div>
  </div>
</section>
