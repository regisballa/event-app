import { fail, redirect } from '@sveltejs/kit';
import pool from '$lib/server/database.js';
import { verifyPassword, createSession } from '$lib/server/auth.js';

export const actions = {
	login: async ({ request, cookies }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		if (!username || !password) {
			return fail(400, { error: 'Bitte alle Felder ausfüllen.' });
		}

		const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);

		if (rows.length === 0) {
			return fail(400, { error: 'Username nicht gefunden.' });
		}

		if (!(await verifyPassword(password, rows[0].password_hash))) {
			return fail(400, { error: 'Falsches Passwort.' });
		}

		const sessionId = await createSession(rows[0].id);
		cookies.set('session', sessionId, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 30
		});

		throw redirect(303, '/admin/events');
	}
};
