<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>
<style>
	:global(html, body) {
		height: 100%;
		width: 100%;
		background: var(--color-zinc-50);
	}

</style>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
