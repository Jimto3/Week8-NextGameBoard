import { sql } from "@vercel/postgres";
import Image from "next/image";
import DisplayGames from "../components/DisplayGames";

export default async function Home() {
    const { rows } = await sql`SELECT * FROM games`;
    return (
        <div className="flex items-center flex-col">
            {rows.map((game) => {
                return <DisplayGames key={game.id} game={game} />;
            })}
        </div>
    );
}
