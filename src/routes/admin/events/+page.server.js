import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.user) redirect(303, '/login');
	const [rows] = await pool.execute(
		'SELECT e.description as description, e.id as id, c.name as category_name, e.name as name from event e LEFT JOIN categories c ON e.category_id = c.id'
	);

	return {
		pageTitle: 'List of events',
		event: rows
	};
}

export const actions = {
	delete: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');

		await pool.execute('DELETE FROM event WHERE id = ?', [id]);

		return { success: true };
	}
};
