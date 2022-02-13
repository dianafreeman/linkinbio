<script>
  import * as feather from 'feather-icons'
  import { onMount } from 'svelte';
  // import  colors from '$config/themeColors.cjs'
  export let item

  const ICON_MAP = {
    // list item type: icon type
    'video': 'film',
    'article': 'file-text', 
    'cause': 'thumbs-up'
  }

  
  let listItemClasses, iconBoxClasses;
  let icon = ICON_MAP[item.type]

  listItemClasses = `flex w-full text-left py-3 px-5 my-3 rounded-md ring-2 relative`
  iconBoxClasses = `flex w-10 absolute left-0 top-0 h-full text-black text-center justify-center items-center`

  if (item.type === 'video'){
    listItemClasses = `${listItemClasses} ring-yellow text-yellow`
    iconBoxClasses = `${iconBoxClasses} bg-yellow`

  } else if (item.type === 'article') {
    listItemClasses = `${listItemClasses} ring-pink text-pink`
    iconBoxClasses = `${iconBoxClasses} bg-pink`
    
  } else if (item.type === 'cause') { 
    listItemClasses =  `${listItemClasses} ring-purple text-purple`
    iconBoxClasses = `${iconBoxClasses} bg-purple`
  } else {
    listItemClasses = `${listItemClasses} ring-white text-white`
    iconBoxClasses = `${iconBoxClasses} bg-white`
  }
  

	onMount(() => {
		feather.replace()
	});
</script>

<li class={listItemClasses}>
  <div class={iconBoxClasses}>
    <i data-feather={icon}></i>
  </div> 
  <div class="pl-10">
  <a href={item.url}>{item.name}</a>
  <p class="text-sm">{item.body}</p>
</div>
</li>

