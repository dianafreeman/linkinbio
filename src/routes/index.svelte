<script context="module">
  import IconButton from '$lib/components/IconButton.svelte';
  import ListItem from '$lib/components/ListItem.svelte';
  import COLOR_MAP from '$lib/config/colorMap';

  export const prerender = true;

  export async function load({ fetch }) {
    let listResp = await fetch('/list-items'); //.then( ({resp}) => console.log(resp))
    let socialRsl = await fetch('/socials'); //.then( ({resp}) => console.log(resp))
    let { postFiles } = await listResp.json();
    let { socials } = await socialRsl.json();

    return { props: { postFiles, socials } };
  }
</script>

<script>
  export let postFiles;
  export let socials;
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
            <!-- Note two of these icons are pulled directly from font awesome, and aren't configured for {glow: true} -->
            <IconButton
              class="m-1 ring-2 ring-gray-600 hover:ring-gray-300 focus:ring-gray-300 bg-gray-600 hover:bg-gray-800 focus:bg-gray-800 rounded-full px-2"
              wrapperClass="h-6 w-6 my-2 mx-1"
              url={social.url}
              iconType={social.type}
              color={Object.keys(COLOR_MAP).includes(social.type)
                ? COLOR_MAP[social.type]
                : COLOR_MAP['white']}
              glow={false}
            />
          {/each}
        </nav>
      </div>
      <h1 class="font-computer text-center pb-5 pt-10 text-7xl">Hi! I'm Diana.</h1>

      <div class="w-full m-auto text-white">
        {#each postFiles as file, idx}
          <ListItem item={file.frontmatter} />
        {/each}
      </div>
    </div>
  </div>
</section>
