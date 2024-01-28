"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NavBar() {
    return (
        <header className="bg-blue-300 h-[10vh] w-[100%] sticky top-0 left-0 z-10 flex justify-center items-center">
            <h2 className="text-4xl text-white font-mono">Game Reviews</h2>
            <Link
                className="text-2xl w-[10vw] text-white justify-center h-full flex items-center absolute right-0 bg-black transition-[background, text] duration-500 hover:bg-white hover:text-black"
                href="/login"
            >
                Log In!
            </Link>

            <Link
                className="text-2xl w-[10vw] text-white justify-center h-full flex items-center absolute left-0 bg-black transition-[background, text] duration-500 hover:bg-white hover:text-black"
                href="/games"
            >
                Home
            </Link>
        </header>
    );
}
