<script>
  import * as feather from 'feather-icons';
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { tap } from 'svelte-gestures';

  export let item, color;

  const glowSize = tweened(1);
  let exiting = false;

  const ICON_MAP = {
    // list item type: icon type
    video: 'youtube',
    article: 'file-text',
    cause: 'thumbs-up',
  };
  const icon = ICON_MAP[item.type];

  function handleStartHover() {
    $glowSize = 5;
  }
  function handleEndHover() {
    $glowSize = 1;
  }

  function onClick(ev) {
    ev.preventDefault();
    const goTo = ev.currentTarget.getAttribute('href');
    exiting = true;
    setTimeout(() => {
      window.location = goTo;
    }, 1000);
  }

  onMount(() => {
    feather.replace();
  });

  const COLOR_MAP = {
    yellow: `#ffc600`,
    pink: `#e900ff`,
    purple: `#5800ff`,
    teal: `#009dff`,
    white: `#fff`,
  };

  const white = `#fff`;
</script>

<a
  use:tap={{ timeframe: 300 }}
  on:click={onClick}
  on:tap={onClick}
  on:mouseover={handleStartHover}
  on:mouseleave={handleEndHover}
  on:focus={handleStartHover}
  on:blur={handleEndHover}
  class="link-item flex relative w-full text-left py-3 px-5 my-6 rounded-md ring-1 ring-gray-500 overflow-hidden"
  style={`box-shadow: 0 0 ${$glowSize}px ${white}, 0 0 ${$glowSize * 1.5}px ${
    COLOR_MAP[color]
  }, 0 0 ${$glowSize * 2}px ${COLOR_MAP[color]}, 0 0 ${$glowSize * 3}px ${COLOR_MAP[color]},
  inset 0 0 ${$glowSize}px ${white}, inset 0 0 ${$glowSize * 1.5}px ${COLOR_MAP[color]}`}
  href={item.url}
>
  <div class="flex absolute h-full w-16 left-0 top-0 p-2 text-center justify-center items-center">
    <span class={`flex relative h-12 w-12 p-1 text-center justify-center items-center`}>
      <i data-feather={icon} />
    </span>
  </div>
  <div class="pl-10">
    <p style="text-shadow: 0 0 2px {COLOR_MAP[color]}">
      {#if exiting}
        Good choice! See you again soon!
      {:else}
        {item.name}
      {/if}
    </p>
  </div>
</a>
