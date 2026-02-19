<script>
  let { data } = $props();
</script>

<h1>Events</h1>
<h2 class="subtitle">{data.pageTitle}</h2>

<div class="events">
  {#each data.event as event}
    <a href={"/events/" + event.id} class="event-card">
      <h3>{event.name}</h3>
      <p class="desc">{event.description}</p>
      <span class="category">Category: {event.category_name}</span>
    </a>
  {/each}
</div>

<h1 class="space-top">Manage Categories</h1>

<div class="categories">
  {#each data.categories as category}
    <div class="category-card">
      <p>{category.name}</p>
      <a href={`category/${category.id}`}>Edit</a>
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

  /* ===== Events ===== */
  .events {
    display: grid;
    gap: 12px;
    margin-bottom: 40px;
  }

  .event-card {
    display: block;
    padding: 16px;
    border-radius: 10px;
    background: white;
    border: 1px solid #e5e7eb;
    text-decoration: none;
    color: inherit;
  }

  .event-card:hover {
    background: #f9fafb;
  }

  .event-card h3 {
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

  /* ===== Categories ===== */
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
