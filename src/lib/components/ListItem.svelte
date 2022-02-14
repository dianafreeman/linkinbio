<script>
  import * as feather from 'feather-icons';
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  const glowSize = tweened(1);

  let hovered;
  export let item, color;

  const ICON_MAP = {
    // list item type: icon type
    video: 'youtube',
    article: 'file-text',
    cause: 'thumbs-up',
  };
  const icon = ICON_MAP[item.type];

  function handleStartHover() {
    hovered = true;
    $glowSize = 5;
  }
  function handleEndHover() {
    hovered = false;
    $glowSize = 1;
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
  on:mouseenter={handleStartHover}
  on:focus={handleStartHover}
  on:mouseleave={handleEndHover}
  on:blur={handleEndHover}
  class="link-item flex relative w-full text-left py-3 px-5 my-6 rounded-md ring-1 ring-gray-500 overflow-hidden"
  style={`box-shadow: 0 0 ${$glowSize}px ${white}, 0 0 ${$glowSize * 1.5}px ${
    COLOR_MAP[color]
  }, 0 0 ${$glowSize * 2}px ${COLOR_MAP[color]}, 0 0 ${$glowSize * 3}px ${COLOR_MAP[color]},
  inset 0 0 ${$glowSize}px ${white}, inset 0 0 ${$glowSize * 1.5}px ${COLOR_MAP[color]}`}
  href={item.url}
>
  <span class:ripple={hovered} />
  <div class="flex absolute h-full w-16 left-0 top-0 p-2 text-center justify-center items-center">
    <span class={`flex relative h-12 w-12 p-1 text-center justify-center items-center`}>
      <i data-feather={icon} />
    </span>
  </div>
  <div class="pl-10">
    <p style="text-shadow: 0 0 2px {COLOR_MAP[color]}">
      {item.name}
    </p>
  </div>
</a>

<style>
  .ripple {
    z-index: 100;
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    animation: ripple 1s infinite;
  }

  /* Add animation */
  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(0);
    }

    to {
      opacity: 0;
      transform: scale(100);
    }
  }
</style>
