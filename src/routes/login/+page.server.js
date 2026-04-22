import { fail, redirect } from '@sveltejs/kit';
import pool from '$lib/server/database.js';
import { verifyPassword, createSession } from '$lib/server/auth.js';
import path from 'path';

export const actions = {
	login: async ({ request, cookies }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		if (!username || !password) {
			return fail(400, { error: 'Bitte alle Felder ausfüllen.' });
		}

		// Find user in Database
		const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);

		if (rows.length === 0) {
			return fail(400, { error: 'Username nicht gefunden.' });
		}

		// Check password is correct
		if (!(await verifyPassword(password, rows[0].password_hash))) {
			return fail(400, { error: 'Falsches Passwort.' });
		}

		// Create session and session cookie
		const sessionId = await createSession(rows[0].id);
		cookies.set('session', sessionId, {
			path: '/',
			maxAge: 60 * 60 * 24 * 30 // 30 Tage
		});

		// Redirect
		redirect(303, '/admin/events');
	}
};
