"use server";

import { sql } from "@vercel/postgres";
export default async function SendLoginDetails(username, password, login) {
    if (!login) {
        const usernameCheck =
            await sql`SELECT * FROM users WHERE username=${username}`;
        if (!usernameCheck.rows.length) {
            await sql`INSERT INTO users(username, password) VALUES (${username}, ${password})`;
        } else {
            return "taken";
        }
    }

    const { rows } =
        await sql`SELECT users.id FROM users WHERE username=${username} AND password=${password}`;
    return rows[0];
}
