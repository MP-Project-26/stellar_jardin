import { Link } from "@inertiajs/react";
import React from "react";
import { useEffect } from "react";
import Logo from "@/assets/Logo.png";

export default function Navbar() {
    const [open, setOpen] = React.useState(false);

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
                    ? " bg-transparent text-white"
                    : "bg-green-custom shadow-lg text-white"
            } lg:px-[3rem] px-0 mt-0 sticky top-0 z-[20000] transition-all duration-180 ease-in-out`}
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
                            className="menu menu-sm dropdown-content mt-3 z-[1] py-2 px-6 shadow bg-green-custom rounded-sm w-52"
                        >
                            <li>
                                <Link
                                    href="/"
                                    className=" font-semibold text-xl "
                                >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className=" font-semibold text-xl "
                                >
                                    ABOUT
                                </Link>
                            </li>

                            <li>
                                <span
                                    className=" font-semibold text-xl "
                                    onClick={() => setOpen(!open)}
                                >
                                    Type
                                </span>
                                {open && (
                                    <ul className="p-2">
                                        <li>
                                            <Link
                                                href="/type"
                                                className=" font-semibold text-xl "
                                            >
                                                Type
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/type_2"
                                                className=" font-semibold text-xl "
                                            >
                                                Custom
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className=" font-semibold text-xl "
                                >
                                    BLOG
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/buy"
                                    className=" font-semibold text-xl   bg-yellow-custom rounded-r-[3rem] rounded-tl-none rounded-bl-[3rem] px-[2rem]"
                                >
                                    BUY
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-[4rem] lg:w-[6rem] cursor-pointer"
                        />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/" className=" font-semibold text-xl ">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className=" font-semibold text-xl "
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary className=" font-semibold text-xl">
                                    Type
                                </summary>
                                <ul
                                    className="p-2"
                                    style={
                                        location === "/" && scroll <= 1.5
                                            ? {
                                                  backgroundColor: "#0D7377",
                                                  marginTop: "-.1rem",
                                              }
                                            : {
                                                  backgroundColor: "#0D7377",
                                                  marginTop: "-.1rem",
                                              }
                                    }
                                >
                                    <li>
                                        <Link
                                            href="/type"
                                            className=" font-semibold text-xl "
                                        >
                                            Type
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/type_2"
                                            className=" font-semibold text-xl "
                                        >
                                            Custom
                                        </Link>
                                    </li>
                                </ul>{" "}
                            </details>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className=" font-semibold text-xl "
                            >
                                BLOG
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/buy"
                                className=" font-semibold text-xl   bg-yellow-custom rounded-r-[3rem] rounded-tl-none rounded-bl-[3rem] px-[2rem]"
                            >
                                BUY
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
