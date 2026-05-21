<script>
	let { data } = $props();
</script>

<h1>Events</h1>
<h2 class="subtitle">{data.pageTitle}</h2>

<div class="events">
	{#each data.event as event}
		<a href={'/events/' + event.id} class="event-card">
			{#if event.image_url}
				<img src={event.image_url} alt={event.name} class="event-img" />
			{/if}
			<div class="event-info">
				<h3>{event.name}</h3>
				<p class="desc">{event.description}</p>
				<span class="category">Category: {event.category_name}</span>
			</div>
		</a>
	{/each}
</div>

<h1 class="space-top">Manage Categories</h1>

<div class="categories">
	{#each data.categories as category}
		<div class="category-card">
			<p>{category.name}</p>
			<a href={`/admin/category/${category.id}/edit`}>Edit</a>
		</div>
	{/each}
</div>

<style>
	h1 {
		font-size: 26px;
		margin-bottom: 10px;
	}

	.subtitle {
		color: #6b7280;
		margin-bottom: 20px;
	}

	.events {
		display: grid;
		gap: 12px;
		margin-bottom: 40px;
	}

	.event-card {
		display: flex;
		gap: 16px;
		padding: 16px;
		border-radius: 10px;
		background: white;
		border: 1px solid #e5e7eb;
		text-decoration: none;
		color: inherit;
		align-items: center;
	}

	.event-card:hover {
		background: #f9fafb;
	}

	.event-img {
		width: 100px;
		height: 80px;
		object-fit: cover;
		border-radius: 8px;
		flex-shrink: 0;
	}

	.event-info h3 {
		margin-bottom: 6px;
	}

	.desc {
		color: #374151;
		margin-bottom: 8px;
	}

	.category {
		font-size: 13px;
		color: #6b7280;
	}

	.space-top {
		margin-top: 40px;
	}

	.categories {
		display: grid;
		gap: 10px;
		max-width: 400px;
	}

	.category-card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		padding: 12px;
		border-radius: 8px;
		border: 1px solid #e5e7eb;
	}

	.category-card a {
		color: #2563eb;
		text-decoration: none;
		font-weight: 600;
	}
</style>
