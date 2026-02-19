import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    const id = params.id;
    const [rows] = await pool.execute('SELECT * FROM categories WHERE id = ?', [id]);

    if (rows.length === 0) {
        throw redirect(303, '/categories');
    }

    return {
        category: rows[0]
    };
}

export const actions = {
    edit: async ({ request, params }) => {
        const form = await request.formData();
        const id = params.id;
        const name = form.get('name');

        await pool.execute(
            'UPDATE categories SET name = ? WHERE id = ?',
            [name, id]
        );

        throw redirect(303, '/categories');
    }
};