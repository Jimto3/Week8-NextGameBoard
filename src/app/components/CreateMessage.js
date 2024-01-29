"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function CreateMessage({ game_id }) {
    const [addMessage, setAddMessage] = useState(false);
    const [user_id, setUser_id] = useState(0);
    useEffect(() => {
        if (localStorage.getItem("id")) {
            setUser_id(localStorage.getItem("id"));
        }
    }, []);
    return (
        <div>
            {addMessage ? (
                redirect(`/games/${game_id}/${user_id}`)
            ) : (
                <button
                    onClick={() => setAddMessage(true)}
                    className="p-2 border-2 border-black bg-amber-400 texy-xl font-bold mt-4"
                >
                    Add Message
                </button>
            )}
        </div>
    );
}
