<script context="module">
  import List from '$components/List.svelte';
  import * as json from '$content/links.json';

  export const links = json.default.reverse();
  export const prerender = true;

  let socials = [
    {
      url: 'https://www.linkedin.com/in/dianasteakleyfreeman',
      label: 'connect on linkedin',
      icon: 'linkedin',
    },
    {
      url: 'https://github.com/dianafreeman/',
      label: 'check out my github',
      icon: 'github',
    },
    {
      url: 'https://www.tiktok.com/@dianasfreeman',
      label: 'find me on tiktok',
      icon: 'film',
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
          <li
            class="p-2 m-1 text-center leading-4 w-25 h-25 border border-gray-500 rounded-full text-gray-500 hover:text-white hover:border-white  "
          >
            <a target="_blank" href={social.url} aria-label={social.label}>
              <i data-feather={social.icon} />
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <List {links} />
  </div>
</section>
