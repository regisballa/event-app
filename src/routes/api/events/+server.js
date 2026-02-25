import pool from '$lib/server/database.js';

export async function GET() {
    const [rows] = await pool.query('SELECT * FROM event');
    return Response.json(rows);
    
} 

export async function POST({ request }) {
        const { name, description } = await request.json();

        const [result] = await pool.query(
            'INSERT INTO event (name, description) VALUES (?, ?)',
            [name, description]
        );

        return Response.json({ message: "Event created" }, { status: 201 });
    }