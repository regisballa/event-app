import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';
import { put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';

export async function load({ locals }) {
	if (!locals.user) throw redirect(303, '/login');
	const [rows] = await pool.execute('SELECT * FROM categories');
	return { categories: rows };
}

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const description = formData.get('description');
		const startdate = formData.get('startdate');
		const starttime = formData.get('starttime');
		const categoryId = formData.get('category_id');
		const imageFile = formData.get('image');

		let imageUrl = null;

		if (imageFile && imageFile.size > 0) {
			const blob = await put(imageFile.name, imageFile, {
				access: 'public',
				token: BLOB_READ_WRITE_TOKEN
			});
			imageUrl = blob.url;
		}

		await pool.execute(
			'INSERT INTO event (name, description, startdate, starttime, category_id, image_url) VALUES (?, ?, ?, ?, ?, ?)',
			[name, description, startdate, starttime, categoryId || null, imageUrl]
		);

		throw redirect(303, '/admin/events');
	}
};
