import { validateSession } from '$lib/server/auth';

export async function handle({ event, resolve }) {
	const sessionId = event.cookies.get('session');
	event.locals.user = sessionId ? await validateSession(sessionId) : null;
	return resolve(event);
}
