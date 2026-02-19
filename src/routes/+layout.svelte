<script>
    import favicon from '$lib/assets/favicon.svg';
 
    let { children } = $props();
</script>
 
<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>
 
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
</style>
