import pool from '$lib/server/database.js';

export async function load() {
    const [events] = await pool.execute(
        'SELECT e.description as description, e.id as id, c.name as category_name, e.name as name FROM event e LEFT JOIN categories c ON e.category_id = c.id'
    );

    const [categories] = await pool.execute('SELECT * FROM categories');

    return {
        pageTitle: 'List of events and categories',
        event: events,
        categories: categories
    };
}