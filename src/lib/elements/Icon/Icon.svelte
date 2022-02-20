<script>
  export let type, color, glow, wrapperClass;

  const ICON_TYPE_MAP = {
    video: () => import('$lib/elements/Icon/icons/youtube.svelte'),
    article: () => import('$lib/elements/Icon/icons/bookmark.svelte'),
    cause: () => import('$lib/elements/Icon/icons/handshake.svelte'),
    github: () => import('svelte-icons/fa/FaGithub.svelte'),
    linkedin: () => import('svelte-icons/fa/FaLinkedinIn.svelte'),
    checkmark: () => import('$lib/elements/Icon/icons/checkmark.svelte'),
    newwindow: () => import('$lib/elements/Icon/icons/newwindow.svelte'),
    tiktok: () => import('$lib/elements/Icon/icons/tiktok.svelte'),
  };
</script>

{#await ICON_TYPE_MAP[type]() then module}
  <div class={wrapperClass || 'w-20 h-10 m-auto '}>
    <svelte:component this={module.default} {...$$props} {type} {color} {glow} />
  </div>
{/await}
