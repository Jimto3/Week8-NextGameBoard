"use client";
import { useState } from "react";
import SendLoginDetails from "@/app/components/SendLoginDetails";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import LoginButton from "../components/LoginButton";

export default function LoginPage() {
    const [login, setLogin] = useState(true);
    const [taken, setTaken] = useState(false);
    const [loggedin, setLoggedin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("id") != 0) {
            setLoggedin(true);
        }
    }, []);

    if (loggedin) {
        return (
            <div className="flex flex-col items-center">
                <h2 className="text-2xl bg-cyan-400 border-2 border-black mt-8">
                    Already logged in!
                </h2>
                <h2
                    className="hover:cursor-pointer text-purple-600 underline text-2xl font-bold mt-4"
                    onClick={() => {
                        localStorage.setItem("id", 0);
                        setLoggedin(false);
                    }}
                >
                    Sign Out
                </h2>
            </div>
        );
    }
    return (
        <div className="flex justify-center flex-col items-center gap-4">
            {login ? (
                <h2 className="text-3xl font-bold mt-4">Login:</h2>
            ) : (
                <h2 className="text-3xl font-bold mt-4">Signup:</h2>
            )}
            <form
                className="flex flex-col gap-4 justify-center items-center"
                action={handleSubmit}
            >
                <lable htmlFor="username">Username:</lable>
                <input
                    name="username"
                    id="username"
                    placeholder="Username"
                    required
                />
                <lable htmlFor="password">Password:</lable>
                <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    required
                />
                <LoginButton />
            </form>
            {taken ? (
                <div className="bg-red-600 border-4 font-mono text-xl">
                    Username Already Taken!
                </div>
            ) : null}
            <h2
                onClick={() => setLogin(!login)}
                className="font-bold text-xl hover:cursor-pointer hover:text-white transition-[color] duration-300"
            >
                {login ? (
                    <>Dont have an account?</>
                ) : (
                    <>already have an account?</>
                )}
            </h2>
        </div>
    );

    async function handleSubmit(formData) {
        const username = formData.get("username");
        const password = formData.get("password");
        const user_id = await SendLoginDetails(username, password, login);
        if (user_id == "taken") {
            setTaken(true);
        } else if (user_id) {
            localStorage.setItem("id", user_id.id);
            redirect("/");
        }
    }
}
