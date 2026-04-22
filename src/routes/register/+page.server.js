import { fail, redirect } from '@sveltejs/kit';
import pool from '$lib/server/database.js';
import { hashPassword, createSession } from '$lib/server/auth.js';

export const actions = {
	register: async ({ request, cookies }) => {
		// GET DATA
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		if (!username || !password) {
			return fail(400, { error: 'Bitte alle Felder ausfüllen.' });
		}

		let result;
		try {
			[result] = await pool.execute('INSERT INTO users (username, password_hash) VALUES (?, ?)', [
				username,
				await hashPassword(password)
			]);
			console.log(result);
		} catch (err) {
			console.log(err);
			if (err.code === 'ER_DUP_ENTRY') {
				return fail(400, { error: 'Username is already taken !' });
			}
		}

		// Create Session
		const sessionId = await createSession(result.insertId);
		cookies.set('session', sessionId, {
			path: '/',
			maxAge: 60 * 60 * 24 * 30
		});

		// Redirect
		redirect(303, '/admin/events');
	}
};
