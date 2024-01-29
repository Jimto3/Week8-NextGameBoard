// "use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function CreatePost({ params }) {
    return (
        <>
            {params.user_id == 0 ? (
                <h2 className="border-2 bg-red-600 border-black text-xl text-center">
                    Please Login!
                </h2>
            ) : null}
            <div className="flex justify-center">
                <form className="flex mt-4 gap-4" action={handleSubmit}>
                    <label htmlFor="message">Message: </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-[300px] h-[200px]"
                    ></textarea>
                    <button className="bg-green-500 border-2 border-black h-fit p-2">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );

    async function handleSubmit(formData) {
        "use server";
        if (parseInt(params.user_id)) {
            const name =
                await sql`SELECT username FROM users WHERE id=${params.user_id}`;
            if (name.rows.length) {
                await sql`INSERT INTO comments(name, user_id, game_id, message, likes) VALUES (${
                    name.rows[0].username
                }, ${params.user_id}, ${params.game_id}, ${formData.get(
                    "message"
                )}, 0)`;
                revalidatePath(`/games/${params.game_id}`);
                redirect(`/games/${params.game_id}`);
            }
        } else {
            console.log("Not logged in!");
        }
    }
}
