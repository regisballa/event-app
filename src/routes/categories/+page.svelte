<script>
    let { data } = $props();
</script>

<h1>Manage Categories</h1>

<a href="/admin/category/new">
  <button>Add New Category</button>
</a>

{#each data.categories as { id, name }}
  <div class="category">
    <p>{name}</p>

    <a href={`/admin/category/${id}`}>
      <button>Edit</button>
    </a>

    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={id} />
      <button class="delete">Delete</button>
    </form>
  </div>
{/each}

<style>
  h1 {
    margin-bottom: 15px;
  }

  .category {
    background: white;
    border: 1px solid #e5e7eb;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 8px;
  }

  p {
    font-weight: bold;
    margin-bottom: 8px;
  }

  button {
    padding: 6px 10px;
    border-radius: 6px;
    border: none;
    background: #2563eb;
    color: white;
    margin-right: 5px;
  }

  .delete {
    background: #ef4444;
  }

  form {
    display: inline;
  }
</style>
