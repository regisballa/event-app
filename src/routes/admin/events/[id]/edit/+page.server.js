import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    const id = params.id;
    const [rows] = await pool.execute('SELECT * FROM event WHERE id = ?', [id]);

    if (rows.length === 0) {
        throw redirect(303, '/admin/events');
    }

    return {
        event: rows[0]
    };
}

export const actions = {
    edit: async ({ request, params }) => {
        const form = await request.formData();
        const id = params.id;
        const name = form.get('name');
        const description = form.get('description');
        const startdate = form.get('startdate');
        const starttime = form.get('starttime');

        await pool.execute(
            'UPDATE event SET name = ?, description = ?, startdate = ?, starttime = ? WHERE id = ?',
            [name, description, startdate, starttime, id]
        );

        throw redirect(303, '/admin/events');
    }
};