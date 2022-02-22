<script>
  import { tap } from 'svelte-gestures';
  import { clickOutside } from '$lib/actions/clickOutside';
  import Icon from '../elements/Icon/Icon.svelte';

  export let iconType, color, url, wrapperClass;

  let wasTapped = true;

  const toggleWasTapped = (value) => (wasTapped = value || !wasTapped);
</script>

<a href={url} {...$$props}>
  <Icon type={iconType} {color} {wrapperClass} />
  <div class="w-auto flex-1">
    <slot />
  </div>
</a>
