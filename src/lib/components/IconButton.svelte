<script>
  import { tap } from 'svelte-gestures';
  import { clickOutside } from '$lib/actions/clickOutside';
  import Icon from '../elements/Icon/Icon.svelte';

  export let iconType, color, target;

  let wasTapped = true;

  const toggleWasTapped = (value) => (wasTapped = value || !wasTapped);


  function onButtonTouch() {
    toggleWasTapped();
    toggleGlow();
  }

  function deactivate() {
    toggleWasTapped(false);
    toggleGlow(lowerBound);
  }
</script>

<button
  {...$$props}
  use:clickOutside
  use:tap
  on:tap={onButtonTouch}
  on:focus={onButtonTouch}
  on:blur={onButtonTouch}
  
>
  <div class="flex h-full left-0 top-0 text-center justify-center items-center">
    <span class={`h-8 w-8 my-2 mx-1`}>
      <Icon type={iconType} {color} />
    </span>
  </div>

  <div class="w-auto flex-1">
    <slot />
  </div>
</button>
