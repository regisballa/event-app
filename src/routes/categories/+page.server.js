import pool from '$lib/server/database.js';
import { redirect, fail } from '@sveltejs/kit';

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

		// Prüfen ob noch Events mit dieser Kategorie verknüpft sind
		const [events] = await pool.execute(
			'SELECT COUNT(*) as count FROM event WHERE category_id = ?',
			[id]
		);

		if (events[0].count > 0) {
			return fail(400, {
				error: `Kann nicht gelöscht werden – noch ${events[0].count} Event(s) mit dieser Kategorie verknüpft.`
			});
		}

		await pool.execute('DELETE FROM categories WHERE id = ?', [id]);

		throw redirect(303, '/categories');
	}
};
