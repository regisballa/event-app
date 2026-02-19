<h1>Edit Category</h1>

<form method="POST" action="?/edit">
  <input type="text" name="name" value={data.category.name} required />
  <button type="submit">Update</button>
</form>

<style>
  h1 {
    font-size: 26px;
    margin-bottom: 15px;
  }

  form {
    max-width: 400px;
    background: #ffffff;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 12px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
  }

  button {
    background: #2563eb;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
  }
</style>
