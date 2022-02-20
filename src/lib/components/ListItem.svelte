<script>
  import Icon from './Icon.svelte';

  export let item, index;

  let backgrounds = {
    video: 'from-yellow-700 to-yellow-900 text-black',
    cause: 'from-purple-500 to-purple-800 text-black',
    article: 'from-pink-500 to-pink-800 text-black',
  };
  console.log(index % 2 === 0);
</script>

<div
  class={`${
    index % 2 === 0 ? 'mr-2' : 'ml-2'
  } bg-gradient-to-b h-48 md:h-40 items-center relative w-full text-left my-6 rounded-xl overflow-hidden ${
    backgrounds[item.type]
  }`}
>
  <div class="absolute top-3 left-2 w-10 h-10">
    <Icon type={item.type} color={'white'} />
  </div>
  <div class="absolute bottom-3 left-2">
    <p class="font-black text-white">
      {item.name}
    </p>
  </div>
</div>
