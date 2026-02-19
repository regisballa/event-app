import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';

export async function load() {
    const [rows] = await pool.execute('SELECT * FROM categories');

    return {
        pageTitle: 'Manage categories',
        categories: rows
    };
}

export const actions = {
    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) {
            throw redirect(303, '/categories');
        }

        await pool.execute('DELETE FROM categories WHERE id = ?', [id]);

        throw redirect(303, '/categories');
    }
};