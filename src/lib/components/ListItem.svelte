<script>
  import * as feather from 'feather-icons';
  import { onMount } from 'svelte';

  export let item;

  const ICON_MAP = {
    // list item type: icon type
    video: 'film',
    article: 'file-text',
    cause: 'thumbs-up',
  };
  const LIST_ITEM_STYLE_MAP = {
    // list item type: icon type
    video: 'neon-yellow list-item-glow-yellow ring-yellow ring-2 text-yellow',
    article: 'neon-pink list-item-glow-pink ring-pink ring-2 text-pink',
    cause: 'neon-purple list-item-glow-purple ring-purple ring-2 text-purple',
  };
  const ITEM_TAG_STYLE_MAP = {
    // list item type: icon type
    video: 'item-tag-glow-yellow',
    article: 'item-tag-glow-pink',
    cause: 'item-tag-glow-purple',
  };
  const ICON_WRAPPER_STYLE_MAP = {
    // list item type: icon type
    video: 'icon-glow-yellow',
    article: 'icon-glow-pink',
    cause: 'icon-glow-purple',
  };
  const TEXT_STYLE_MAP = {
    // list item type: icon type
    video: 'text-glow-yellow',
    article: 'text-glow-pink',
    cause: 'text-glow-purple',
  };

  const LIST_ITEM_CLASSES = `flex relative w-full text-left py-3 px-5 my-3 rounded-md list-item`;
  const ITEM_TAG_CLASSES = `flex absolute h-full w-16 left-0 top-0 p-2 text-center justify-center items-center text-black`;
  const ICON_WRAPPER_CLASSES = `flex relative h-12 w-12 p-1 text-center justify-center items-center`;

  const textClasses = `${TEXT_STYLE_MAP[item.type]}`;
  const listItemClasses = `${LIST_ITEM_CLASSES} ${LIST_ITEM_STYLE_MAP[item.type]}`;
  const itemTagClasses = `${ITEM_TAG_CLASSES} ${ITEM_TAG_STYLE_MAP[item.type]}`;
  const iconWrapperClasses = `${ICON_WRAPPER_CLASSES} ${ICON_WRAPPER_STYLE_MAP[item.type]}`;
  const icon = ICON_MAP[item.type];

  onMount(() => {
    feather.replace();
  });
</script>

<li class={listItemClasses}>
  <a href={item.url}>
  <div class={itemTagClasses}>
    <span class={iconWrapperClasses}>
      <i data-feather={icon} />
    </span>
  </div>
 <div class="pl-16">
    <p class={textClasses} >{item.name}</p>
  </div>
</a>
</li>

<style lang="scss">
  $yellow: #ffc600;
  $pink: #e900ff;
  $purple: #5800ff;

  $colors: (
    'yellow': $yellow,
    'pink': $pink,
    'purple': $purple,
  );

  @each $name, $color in $colors {
    .list-item{ 
      min-height: 50px;
    }
    .list-item-glow-#{$name} {
      // box-shadow: 0 0 5px $color, 0 0 10px $color, inset 0 0 5px $color, inset 0 0 10px $color;
      animation: neon-box-#{$name} 1s ease-in-out infinite alternate;
    }
    .item-tag-glow-#{$name} {
      background-color: $color;
      box-shadow: 0 0 5px $color, 0 0 10px $color, inset 0 0 5px $color, inset 0 0 10px $color;
    }
    .text-glow-#{$name} {
      color: lighten($color, 20%);
      animation: neon-text-#{$name} 1s ease-in-out infinite alternate;
    }


    @keyframes neon-text-#{$name} {
      from {
        text-shadow: 0 0 2px $color;

      }
      to {
        text-shadow: 0 0 5px $color;

      }
    }

    @keyframes neon-box-#{$name} {
      from {
        box-shadow: 0 0 5px #fff, 0 0 15px $color, 0 0 17px $color, 0 0 25px $color, inset 0 0 10px #fff, inset 0 0 10px $color;
      }
      to {
        box-shadow: 0 0 3px #fff, 0 0 10px $color, 0 0 12px $color, 0 0 20px $color,  inset 0 0 5px #fff,inset 0 0 8px $color;
      }
    }

    .icon-glow-#{$name} {
      border-radius: 100%;
        &:before {
          content: '';
          border-radius: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          box-shadow: 0 0 5px $color, 0 0 10px $color, inset 0 0 15px $color, inset 0 0 10px $color;
        }
      }
    }

    </style>
