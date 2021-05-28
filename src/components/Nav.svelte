<script>
  import { page } from '$app/stores'
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
		flex: 1;
		background-color: #eddbff;
		width: 100%;
		height: 100%;
		padding: 1em 0.5em;
	}

	.selected {
		background-color: rebeccapurple;
		color: #F5F5F5;
	}

	a {
		display: block;
		text-decoration: none;
		text-align: center;
	}
</style>

<nav>
	<ul>
		<li class='{$page.path === '/' ? 'selected' : ''}' ><a href='.'>Start</a></li>
		<li class='{$page.path === '/steps' ? 'selected' : ''}' ><a href='steps'>Step-by-Step</a></li>
		<li class='{$page.path === '/boolean' ? 'selected' : ''}' ><a href='boolean'>Boolean</a></li>
	</ul>
</nav>