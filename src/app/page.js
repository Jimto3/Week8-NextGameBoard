"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
    useEffect(() => {
        if (!localStorage.getItem("id")) {
            localStorage.setItem("id", 0);
            console.log(localStorage.getItem("id"));
        } else console.log("is local storage");
        redirect("/games");
        return;
    }, []);
    // redirect("/games");
    // return <div className="flex justify-center">{<Games />}</div>;
}
