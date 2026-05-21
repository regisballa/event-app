import { fail, redirect } from '@sveltejs/kit';
import pool from '$lib/server/database.js';
import { hashPassword, createSession } from '$lib/server/auth.js';

export const actions = {
	register: async ({ request, cookies }) => {
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
		} catch (err) {
			if (err.code === 'ER_DUP_ENTRY') {
				return fail(400, { error: 'Username ist bereits vergeben.' });
			}
			return fail(500, { error: 'Registrierung fehlgeschlagen. Bitte erneut versuchen.' });
		}

		// result ist hier garantiert definiert
		const sessionId = await createSession(result.insertId);
		cookies.set('session', sessionId, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 30
		});

		throw redirect(303, '/admin/events');
	}
};
