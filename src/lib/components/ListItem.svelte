<script>
  import Icon from '$lib/elements/Icon/Icon.svelte';
  import GlowWrapper from './GlowWrapper.svelte';
  import COLOR_MAP from '$lib/config/colorMap';
  import GlowText from './GlowText.svelte';
  import { fly } from 'svelte/transition';
  import { tweened } from 'svelte/motion';

  export let item;

  let clicked = false;

  const LABEL_POS_0 = 0
  const LABEL_POS_1 = 70
  
  const labelPosition = tweened(50, { duration: 200});

  const focusStates = {
    video: 'focus:bg-pink-400',
    cause: 'focus:bg-purple-300',
    article: 'focus:bg-sky-300',

  }
  const toggle = () => {
    clicked = !clicked;
    $labelPosition = $labelPosition === LABEL_POS_0 ? LABEL_POS_1 : LABEL_POS_0;
  };
</script>

<GlowWrapper
  onclick={toggle}
  asButton={true}
  color={COLOR_MAP[item.type]}
  class={`w-full m-auto flex flex-row h-32 items-center relative text-left my-6 rounded-xl overflow-hidden`}
>
  {#if !clicked}
    <div class="w-1/4 h-10 absolute left-0" transition:fly={{ x: -200, duration: 300 }}>
      <Icon type={item.type} color={COLOR_MAP[item.type]} glow={true} />
    </div>
  {/if}

  <div class="w-3/4 relative" style="left: {$labelPosition}px;">
    <GlowText class="font-exo text-2xl text-right" color={COLOR_MAP[item.type]}>
      {item.name}
    </GlowText>
  </div>

  {#if clicked}
  <a href={item.url} transition:fly={{ x: 200, duration: 300 }} class="{focusStates[item.type]} absolute top-0 right-0 h-full w-90 flex justify-center " style="max-width: 80px;">
    <GlowWrapper asButton={false} class="h-full w-full m-auto flex justify-center" color={COLOR_MAP[item.type]} >
        <Icon type="newwindow" color={COLOR_MAP[item.type]} glow={true} />
      </GlowWrapper>
      </a>
  {/if}
</GlowWrapper>
