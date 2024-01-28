"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DisplayGames({ game }) {
    const thumbnails = require.context(`@/../public`, true);
    const list = thumbnails.keys().map((image) => thumbnails(image));
    return (
        <Link href={`/games/${game.id}`}>
            <motion.div
                className="border-2 border-black rounded-[0.75rem_0_0_0.75rem] max-w-[600px] w-[70vw] mt-[3vw] bg-cyan-600 h-fit relative box-content grid grid-cols-[1fr_2fr]"
                initial={{ scale: 1, opacity: 0.5 }}
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                }}
                // animate={{ scale: 1 }}
                whileInView={{ opacity: 1 }}
                whileTap={{ scale: 1.18 }}
            >
                {list.map((url) => {
                    return url.default.src.includes(game.name) ? (
                        <Image
                            className="w-[100%] h-auto rounded-[0.6rem_0_0_0.6rem]"
                            key={game.name + game.id}
                            src={url.default}
                            alt={`thumbnail of ${game.name}`}
                        />
                    ) : null;
                })}
                <div className="flex items-center flex-col">
                    <h2 className="bg-white w-[100%] text-center font-mono">
                        {game.name}
                    </h2>
                </div>
            </motion.div>
        </Link>
    );
}
