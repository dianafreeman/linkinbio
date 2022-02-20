<script>
  import TikTok from './tiktok.svelte';
  export let type, color;

  const ICON_TYPE_MAP = {
    video: () => import('svelte-icons/fa/FaYoutube.svelte'),
    article: () => import('svelte-icons/fa/FaBookmark.svelte'),
    cause: () => import('svelte-icons/fa/FaHandsHelping.svelte'),
    github: () => import('svelte-icons/fa/FaGithub.svelte'),
    linkedin: () => import('svelte-icons/fa/FaLinkedinIn.svelte'),
  };
</script>

{#if type == 'tiktok'}
  <span class="w-7">
    <TikTok {color} />
  </span>
{:else}
  {#await ICON_TYPE_MAP[type]() then module}
    <span class="w-7" style:color>
      <svelte:component this={module.default} />
    </span>
  {/await}
{/if}
