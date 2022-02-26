<script>
  export let type, color, glow, wrapperClass;

  const ICON_TYPE_MAP = {
    youtube: () => import('$lib/components/Icon/icons/youtube.svelte'),
    bookmark: () => import('$lib/components/Icon/icons/bookmark.svelte'),
    handshake: () => import('$lib/components/Icon/icons/handshake.svelte'),
    github: () => import('svelte-icons/fa/FaGithub.svelte'),
    linkedin: () => import('svelte-icons/fa/FaLinkedinIn.svelte'),
    checkmark: () => import('$lib/components/Icon/icons/checkmark.svelte'),
    newwindow: () => import('$lib/components/Icon/icons/newwindow.svelte'),
    tiktok: () => import('$lib/components/Icon/icons/tiktok.svelte'),
  };
</script>

{#await ICON_TYPE_MAP[type]() then module}
  <div class={wrapperClass || 'w-20 h-10 m-auto '}>
    <svelte:component this={module.default} {color} {glow}/>
  </div>
{/await}
