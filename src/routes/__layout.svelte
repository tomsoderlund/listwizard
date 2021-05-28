<script>
	import Nav from '../components/Nav.svelte';
</script>

<style>
	main {
		position: relative;
		margin: 0 auto;
		max-width: 56em;
		padding: 1em;
		box-sizing: border-box;
	}
</style>

<Nav />

<main>
	<slot></slot>
</main>