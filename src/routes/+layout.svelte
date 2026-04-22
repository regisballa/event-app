<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<p>Welcome {data.user?.username || 'Anonymous'}</p>

  {#if (data.user)}
	<form action="/logout?/logout" method="POST">
		<button type="submit">Logout</button>
	</form>

  {:else}
  <a href="/login">Login</a>
  {/if}

</header>

{@render children()}

<footer>
	<div>
		<h2>Contact</h2>
		<a href="mailto:ballaregis2008@gmail.com">Write a mail!</a>
	</div>
	<div>
		<h3>Admin</h3>
		<a href="/admin">Go to admin area</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		background: #f3f4f6;
		padding: 20px;
		margin-top: 40px;
	}

	footer a {
		color: #2563eb;
		text-decoration: none;
	}

	header {
		padding: 10px;
		background: #2c57af;
		margin-bottom: 20px;
		display: flex;
		justify-content: space-between;
	}
</style>
