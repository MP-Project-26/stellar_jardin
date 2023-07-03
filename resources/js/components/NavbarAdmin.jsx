import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "@inertiajs/react";
import { BiLogOut, BiSolidBookContent, BiSolidContact } from "react-icons/bi";
import { AiFillSetting, AiFillLeftCircle } from "react-icons/ai";
import { FaNewspaper } from "react-icons/fa";
const NavbarAdmin = () => {
    const menu = [
        {
            name: "dashboard",
            link: "/admin/dashboard",
            icon: MdOutlineDashboard,
        },
        {
            name: "User Management",
            link: "/admin/user",
            icon: AiOutlineUser,
        },
        {
            name: "Content Management",
            link: "/admin/content",
            icon: BiSolidBookContent,
        },
        { name: "Blog Management", link: "/admin/blog", icon: FaNewspaper },
        {
            name: "Contact Management",
            link: "/admin/contact",
            icon: BiSolidContact,
        }
    ];
    const [open, setOpen] = useState(true);
    return (
        <div className="px-0 mt-0 h-screen select-none top-0 sticky z-[200] ">
            <div className="flex h-full top gap-6">
                <div
                    className={` ${
                        open ? "w-72" : "w-20 "
                    } bg-green-custom text-white h-screen p-5  pt-8 relative duration-300`}
                >
                    <div
                        src="./src/assets/control.png"
                        className={`absolute cursor-pointer -right-3 top-[7rem] w-7 text-black border-black
           border-2 rounded-full  ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    >
                        {React.createElement(AiFillLeftCircle, {
                            size: "20",
                        })}
                    </div>
                    <div className="flex gap-x-4 items-center">
                        <div
                            className={`cursor-pointer duration-500 ${
                                open && "rotate-[360deg]"
                            }`}
                        >
                            <Link href="/admin/dashboard">
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="w-[4rem] lg:w-[8rem] cursor-pointer invert"
                                />
                            </Link>
                        </div>
                        <h1
                            className={`text-white origin-left font-medium text-xl duration-200 ${
                                !open && "scale-0"
                            }`}
                        ></h1>
                    </div>

                    <div className="mt-8 flex flex-col gap-4 relative max-h-[84vh]  overflow-x-hidden webkit-scroll p-2">
                        {menu?.map((menu, i) => (
                            <Link
                                href={menu?.link}
                                key={i}
                                className={` ${
                                    menu?.margin && "mt-[5rem]"
                                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                            >
                                <div>
                                    {React.createElement(menu?.icon, {
                                        size: "20",
                                    })}
                                </div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500 ${
                                        !open &&
                                        "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                                >
                                    {menu?.name}
                                </h2>
                                <h2
                                    className={`${
                                        open && "hidden"
                                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NavbarAdmin;
