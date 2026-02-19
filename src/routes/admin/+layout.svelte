<script>
    let { children } = $props();
</script>

<header>
    <h1>Admin Dashboard</h1>
</header>

{@render children()}

<style>
  header {
    background: #1f2937;
    padding: 20px;
    text-align: center;
  }

  header h1 {
    color: white;
    margin: 0;
  }
</style>