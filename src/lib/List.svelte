<script>
	import { spring } from 'svelte/motion';
	import GlowingItem from './GlowingItem.svelte'; 

	export let links
</script>

<div class="list">
	<ul>
		{#each links as item}
		<GlowingItem>
			<a href="{item.destination}">{item.name}</a>
		</GlowingItem>
		{/each}
	</ul>
</div>

<style>

</style>
