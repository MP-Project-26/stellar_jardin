import Layout from "@/Layout/Layout";
import React from "react";

export default function Login() {
    return (        
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center w-96 h-96 bg-white rounded-xl shadow-xl">
                    <h1 className="text-3xl font-bold text-gray-800">Login</h1>
                    <form className="flex flex-col items-center justify-center w-full h-full gap-3">
                        <input
                            className="w-3/4 h-10 px-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-400"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            className="w-3/4 h-10 px-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-400"
                            type="password"
                            placeholder="Password"
                        />
                        <button
                            className="w-3/4 h-10 px-3 rounded-lg bg-green-400 text-white font-bold focus:outline-none focus:bg-green-500"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
    );
}
