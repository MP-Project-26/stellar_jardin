import { Link } from "@inertiajs/react";
import React from "react";

export default function HeaderAdmin({ auth }) {
    return (
        <div className="fixed w-full  bg-green-custom p-5 top-0 z-[200]">
            <div className="w-full flex justify-end ">
                <div className="dropdown dropdown-end font-sans shadow-2xl font-bold text-black text-2xl md:text-3xl">
                    <label tabIndex={0} className="text-xl p-2 rounded-xl select-none bg-white m-1">
                        {auth.user.name}
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow-2xl bg-white text-black rounded-box w-52"
                    >
                        <li>
                            <Link href={route("profile.edit")}>Profil</Link>
                        </li>
                        <li>
                            <Link method="post" href={route("logout")} as="button">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
