<script>
  import * as feather from 'feather-icons';
  import { onMount } from 'svelte';

  export let item;

  const STYLES = {
    box: {
      hovered: {
        video: 'text-yellow box-glow-yellow',
        article: 'text-teal box-glow-teal',
        cause: 'text-pink box-glow-pink',
      },
      default: {
        video: 'box-inactive-yellow',
        article: 'box-inactive-teal',
        cause: 'box-inactive-pink',
      },
    },
    text: {
      hovered: {
        video: 'text-glow-yellow',
        article: 'text-glow-teal',
        cause: 'text-glow-pink',
      },
    },
    iconWrapper: {
      hovered: {
        video: 'text-yellow icon-glow-yellow',
        article: 'text-teal icon-glow-teal',
        cause: 'text-pink icon-glow-pink',
      },
      default: {},
    },
  };
  const ICON_MAP = {
    // list item type: icon type
    video: 'youtube',
    article: 'file-text',
    cause: 'thumbs-up',
  };
  const icon = ICON_MAP[item.type];

  let hovered = false;

  function handleStartHover() {
    hovered = true;
  }
  function handleEndHover() {
    hovered = false;
  }

  onMount(() => {
    feather.replace();
  });
</script>

<li
  on:mouseenter={handleStartHover}
  on:focus={handleStartHover}
  on:mouseleave={handleEndHover}
  on:blur={handleEndHover}
  class={`flex relative w-full text-left py-3 px-5 my-6 rounded-md ring-1 ring-gray-500 ${
    hovered ? STYLES.box.hovered[item.type] : STYLES.box.default[item.type]
  }`}
>
  <a target="_blank" href={item.url}>
    <div class="flex absolute h-full w-16 left-0 top-0 p-2 text-center justify-center items-center">
      <span
        class={`flex relative h-12 w-12 p-1 text-center justify-center items-center ${
          hovered ? STYLES.iconWrapper.hovered[item.type] : STYLES.iconWrapper.default[item.type]
        }`}
      >
        <i data-feather={icon} />
      </span>
    </div>
    <div class="pl-10">
      <p class={hovered && STYLES.text.hovered[item.type] }>
        {item.name}
      </p>
    </div>
  </a>
</li>

<style lang="scss">
  $yellow: #ffc600;
  $pink: #e900ff;
  $purple: #5800ff;
  $teal: #009dff;
  $white: #fff;

  $colors: (
    'white': $white,
    'yellow': $yellow,
    'pink': $pink,
    'purple': $purple,
    'teal': $teal,
  );

  @each $name, $color in $colors {
    .box-inactive-#{$name} {
      animation: box-inactive-#{$name} 1.5s ease-in-out infinite alternate;
    }
    .box-glow-#{$name} {
      animation: box-glow-#{$name} 1.5s ease-in-out infinite alternate;
    }
    .text-glow-#{$name} {
      animation: text-glow-#{$name} 1.5s ease-in-out infinite alternate;
    }

    @keyframes text-glow-#{$name} {
      from {
        text-shadow: 0 0 2px $color;
      }
      to {
        text-shadow: 0 0 5px $color;
      }
    }

    @keyframes box-glow-#{$name} {
      from {
        box-shadow: 0 0 5px $white, 0 0 15px $color, 0 0 17px $color, 0 0 25px $color,
          inset 0 0 10px $white, inset 0 0 10px $color;
      }
      to {
        box-shadow: 0 0 3px $white, 0 0 10px $color, 0 0 12px $color, 0 0 20px $color,
          inset 0 0 5px $white, inset 0 0 8px $color;
      }
    }
    @keyframes box-inactive-#{$name} {
      from {
        box-shadow: 0 0 2px lighten($color, 40%), 0 0 5px $white, inset 0 0 2px #ababab,
          inset 0 0 5px $white;
      }
      to {
        box-shadow: 0 0 1px lighten($color, 40%), 0 0 3px $white, inset 0 0 1px #ababab,
          inset 0 0 3px $white;
      }
    }
  }
</style>
