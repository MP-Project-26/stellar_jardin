import { Link } from "@inertiajs/react";
import React from "react";
import { useEffect } from "react";

export default function Navbar() {
    const location = window.location.pathname;

    const [scroll, setScroll] = React.useState(0);
    const scrollToTop = () => {
        const datascroll = window.scrollY;
        return datascroll > 0 ? setScroll(datascroll) : setScroll(0);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollToTop);
        return () => {
            window.removeEventListener("scroll", scrollToTop);
        };
    }, []);
    return (
        <nav
            className={`w-full ${
                location === "/" && scroll <= 1.5
                    ? " bg-transparent"
                    : "bg-green-custom"
            } lg:px-[14rem] px-0 mt-0 sticky top-0 z-30  shadow-xl`}
        >
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-sm w-52"
                        >
                            <li>
                                <Link className=" font-extrabold text-lg text-white">
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link className=" font-extrabold text-lg text-white">
                                    ABOUT
                                </Link>
                            </li>
                            <li>
                                <Link className=" font-extrabold text-lg text-white">
                                    TYPE
                                </Link>
                            </li>
                            <li>
                                <Link className=" font-extrabold text-lg text-white">
                                    BLOG
                                </Link>
                            </li>
                            <li>
                                <Link className=" font-extrabold text-lg text-white  bg-yellow-custom rounded-r-[3rem] rounded-tl-none rounded-bl-[3rem]">
                                    BUY
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">
                        daisyUI
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link className=" font-extrabold text-lg text-white">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link className=" font-extrabold text-lg text-white">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link className=" font-extrabold text-lg text-white">
                                TYPE
                            </Link>
                        </li>
                        <li>
                            <Link className=" font-extrabold text-lg text-white">
                                BLOG
                            </Link>
                        </li>
                        <li>
                            <Link className=" font-extrabold text-lg text-white  bg-yellow-custom rounded-r-[3rem] rounded-tl-none rounded-bl-[3rem]">
                                BUY
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
