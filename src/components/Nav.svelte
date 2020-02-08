<script>
	export let segment;
</script>

<style>
	nav {
		padding: 0;
		user-select: none;
	}

	ul {
		margin: 0;
		padding: 0;
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  align-items: center;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		flex: 1;
		background-color: #eddbff;
	}

	.selected {
		background-color: rebeccapurple;
		color: #F5F5F5;
	}

	a {
		display: block;
		text-decoration: none;
		width: 100%;
		padding: 1em 0.5em;
		text-align: center;
	}
</style>

<nav>
	<ul>
		<li class='{segment === undefined ? 'selected' : ''}' ><a href='.'>Start</a></li>
		<li class='{segment === 'steps' ? 'selected' : ''}' ><a href='steps'>Step-by-Step</a></li>
		<li class='{segment === 'boolean' ? 'selected' : ''}' ><a href='boolean'>Boolean Manipulation</a></li>
	</ul>
</nav>