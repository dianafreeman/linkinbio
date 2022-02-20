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
  class={`w-full m-auto bg-gradient-to-b flex-col h-32 items-center relative text-left my-6 rounded-xl overflow-hidden ${
    backgrounds[item.type]
  }`}

>
  <div class="absolute top-4 left-4 w-10 h-10">
    <Icon type={item.type} color="white" />
  </div>
  <div class="absolute bottom-4 w-full pr-4">
    <p class="font-bold text-white text-right">
      {item.name}
    </p>
  </div>
</div>
