<svelte:head>
	<title>Listwizard</title>
</svelte:head>

<h1>{capitalizeFirstLetter(name)}</h1>

<p>{description}</p>

<section>
	<a href='./boolean'>Boolean Manipulation</a>
	<a href='./steps'>Step-by-Step Manipulation</a>
</section>

<script>
	import { name, description } from '../../package.json'

	const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)
</script>
