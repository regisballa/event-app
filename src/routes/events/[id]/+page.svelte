<script>
	let { data } = $props();
</script>

<div class="event-card">
	{#if data.event.image_url}
		<img src={data.event.image_url} alt={data.event.name} class="event-img" />
	{/if}

	<h1 class="title">{data.event.name}</h1>

	<p class="description">{data.event.description}</p>

	<div class="date-time">
		<span>📅 {data.event.startdate}</span>
		<span>⏰ {data.event.starttime}</span>
	</div>
</div>

<style>
	.event-card {
		max-width: 500px;
		background: #ffffff;
		padding: 20px;
		border-radius: 10px;
		border: 1px solid #e5e7eb;
	}

	.event-img {
		width: 100%;
		max-height: 300px;
		object-fit: cover;
		border-radius: 8px;
		margin-bottom: 16px;
	}

	.title {
		font-size: 28px;
		margin-bottom: 8px;
		color: #111827;
	}

	.description {
		font-size: 16px;
		color: #374151;
		margin-bottom: 15px;
	}

	.date-time {
		font-size: 14px;
		color: #6b7280;
	}

	.date-time span {
		display: block;
		margin-bottom: 4px;
	}
</style>
