<script>
  import IconBase from './IconBase.svelte';
  export let color, glow;
</script>

<IconBase
  viewBox="0 0 484 645.3"
  fill={'#fff'}
  style={!glow
    ? ''
    : `filter: drop-shadow(2px 2px 2px ${color}) drop-shadow(-2px -2px 2px ${color});`}
  {...$$props}
>
  <path
    d="M464,630.9L242,501.4L20,630.9V114.7c0-43,35-78,78-78h288c43,0,78,35,78,78V630.9z M242,431.9l162,94.5V114.7
		c0-9.9-8.1-18-18-18H98c-9.9,0-18,8.1-18,18v411.8L242,431.9z"
  />
</IconBase>
