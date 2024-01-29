import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";
import like from "@/../public/like.png";
import { redirect } from "next/navigation";
import CreateMessage from "@/app/components/CreateMessage";

export default async function GamePage({ params }) {
    const { rows } =
        await sql`SELECT games.name, games.rating, genres.genre, comments.id, comments.name AS comment_name, comments.message, comments.user_id, comments.likes FROM games 
    JOIN genres ON games.genre_id = genres.id
    JOIN comments ON games.id = comments.game_id
    WHERE games.id=${params.game_id}`;

    return (
        <div className="flex justify-center items-center font-mono flex-col gap-4">
            <div className="flex items-center justify-center mt-[20px] text-4xl font-mono bg-white w-[100%] border-2 border-black">
                <Link
                    className="underline text-black text-2xl absolute left-1"
                    href="/"
                >
                    Go Back
                </Link>
                <h2 className="self-center">{rows[0].name}</h2>
            </div>
            {rows.map((game) => {
                return (
                    <div
                        key={game.id}
                        className="border-2 border-black rounded bg-white text-black font-mono w-[60vw] text-center "
                    >
                        <button
                            className="flex flex-row justify-start w-[60vw] absolute hover:cursor-pointer"
                            onClick={async () => {
                                "use server";
                                handleDelete(game.id);
                            }}
                        >
                            Delete
                        </button>
                        <div className="bg-teal-300">
                            <h2 className="flex flex-row justify-end w-[60vw] absolute">
                                {game.likes}
                                <Image
                                    src={like}
                                    alt="Like Button"
                                    width={25}
                                />
                            </h2>
                            {game.comment_name}
                        </div>
                        <h2>{game.message}</h2>
                    </div>
                );
            })}
            {<CreateMessage game_id={params.game_id} />}
        </div>
    );

    async function handleDelete(comment_id) {
        // "use server";
        await sql`DELETE FROM comments WHERE id=${comment_id}`;
        console.log("done");
    }
}
