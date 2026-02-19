<h1>Add New Category</h1>

<form method="POST" action="?/create">
  <input type="text" name="name" required />
  <button>Create</button>
</form>

<style>
  h1 {
    font-size: 26px;
    margin-bottom: 15px;
  }

  form {
    max-width: 420px;
    background: #ffffff;
    padding: 40px;
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
    background: #16a34a;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
  }
</style>
