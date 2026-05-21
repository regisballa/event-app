import pool from '$lib/server/database.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const eventId = params.id;
	const [rows] = await pool.execute('SELECT * FROM event WHERE id = ?', [eventId]);

	if (rows.length === 0) {
		throw error(404, 'Event not found');
	}

	return {
		event: rows[0]
	};
}
