<script>
    let { data } = $props();
</script>

<h1>Manage my events</h1>

<a href="/admin/events/new">
    <button>Add new event</button>
</a>

<main>
    {#each data.event as event}
        <div class="event">
            <p>{event.name}</p>
            <h3>{event.category_name}</h3>

            <div>
                <a href={`/admin/events/${event.id}/edit`}>
                    <button>Edit</button>
                </a>

                <form action="?/delete" method="POST">
                    <input type="hidden" name="id" value={event.id} />
                    <button type="submit">Delete</button>
                </form>
            </div>
        </div>
    {/each}
</main>




<style>
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #111827;
  }

  a {
    text-decoration: none;
  }

  a > button {
    background: #2563eb;
    color: white;
    border: none;
    padding: 10px 14px;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .event {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .event p {
    margin: 0;
    font-weight: 600;
    color: #111827;
  }

  .event h3 {
    margin: 4px 0 0;
    font-size: 0.9rem;
    font-weight: 500;
    color: #6b7280;
  }

  .event div:last-child {
    display: flex;
    gap: 8px;
  }

  button {
    background: #2563eb;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
  }

  button:hover {
    background: #1d4ed8;
  }

  form button {
    background: #dc2626;
  }

  form button:hover {
    background: #b91c1c;
  }
</style>
