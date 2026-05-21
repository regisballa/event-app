<script>
	let { data, form } = $props();
</script>

<h1>Manage Categories</h1>

<a href="/admin/category/new">
	<button>Add New Category</button>
</a>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

{#each data.categories as { id, name }}
	<div class="category">
		<p>{name}</p>

		<a href={`/admin/category/${id}/edit`}>
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
		cursor: pointer;
	}

	.delete {
		background: #ef4444;
	}

	form {
		display: inline;
	}

	.error {
		background: #fee2e2;
		border: 1px solid #fca5a5;
		color: #b91c1c;
		padding: 10px 14px;
		border-radius: 6px;
		margin-bottom: 16px;
		font-weight: 500;
	}
</style>
