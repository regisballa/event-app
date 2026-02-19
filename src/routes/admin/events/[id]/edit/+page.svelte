<script>
  let { data } = $props();
</script>

<h1>Edit Event</h1>

<form method="POST" action="?/edit" class="event-form">
  <label>
    Event Name
    <input type="text" name="name" required value={data.event.name} />
  </label>

  <label>
    Description
    <textarea name="description" required>{data.event.description}</textarea>
  </label>

  <label>
    Start Date
    <input type="date" name="startdate" required value={data.event.startdate} />
  </label>

  <label>
    Start Time
    <input type="time" name="starttime" required value={data.event.starttime} />
  </label>

  <button type="submit">Update Event</button>
</form>

<style>
  h1 {
    font-size: 26px;
    margin-bottom: 16px;
  }

  .event-form {
    max-width: 420px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
  }

  label {
    display: block;
    font-weight: 600;
    margin-bottom: 12px;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    margin-top: 6px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    font-size: 14px;
  }

  textarea {
    min-height: 80px;
    resize: vertical;
  }

  button {
    margin-top: 10px;
    background: #16a34a;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
  }

  button:hover {
    background: #15803d;
  }
</style>
