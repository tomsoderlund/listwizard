<svelte:head>
	<title>{nameCapitalized} – {description}</title>
</svelte:head>

<h1>{nameCapitalized}</h1>

<p>{description}</p>

<section>
	<a href='./boolean' class='button'>Boolean Manipulation</a>
	<!-- <a href='./steps' class='button'>Step-by-Step Manipulation</a> -->
</section>

<p>&copy; <a href="https://twitter.com/tomsoderlund" target="_blank">Tom S&ouml;derlund</a> 2020</p>

<script>
	import { name, description } from '../../package.json'

	const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)

  const nameCapitalized = capitalizeFirstLetter(name)
</script>

<style>
  .button {
    font-size: 1.5em;
    width: 10em;
    height: 7em;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>