<script>
  import Icon from '../elements/Icon/Icon.svelte';
  import GlowWrapper from './GlowWrapper.svelte';
  import COLOR_MAP from '$lib/config/colorMap';
  import GlowText from './GlowText.svelte';

  export let item;

</script>

<GlowWrapper
  color={COLOR_MAP[item.type]}
  class={`w-full m-auto flex flex-row h-32 items-center relative text-left my-6 rounded-xl`}
>
  <div class="w-1/4 h-10">
    <Icon type={item.type} color={COLOR_MAP[item.type]} glow={true}/>
  </div>
  <div class="w-3/4 pr-4">
    <GlowText class="font-exo text-2xl text-right" color={COLOR_MAP[item.type]}>
      {item.name}
    </GlowText>
  </div>
  <div class="w-1/4 h-10">
    <a href={item.url}>
      <Icon type="newwindow" color={COLOR_MAP[item.type]} glow={true}/>
    </a>
  </div>
</GlowWrapper>
