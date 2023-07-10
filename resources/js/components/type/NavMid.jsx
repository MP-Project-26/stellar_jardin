import React from "react";
import { scroller } from "react-scroll";
import { useState } from "react";

const NavMid = () => {
    const [active, setActive] = useState("");
    const activeClass = "text-[#0D7377] border-b-2 border-[#0D7377]";

    const handleClick = (link, event) => {
        setActive(link);
        scrollToSection(link);
    };

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <div className="h-auto w-full px-2 my-3 lg:my-10 md:px-32 border bg-white sticky top-[8%] md:top-[6%]  lg:top-[9%] z-[20] lg:px-40">
            <ul className="flex gap-3 items-center py-2 ">
                <li>
                    <button
                        className={`text-xl hover:text-[#0D7377] hover:border-b-2 hover:border-[#0D7377] font-bold ${
                            active === "gallery" ? activeClass : ""
                        }`}
                        onClick={() => {
                            handleClick("gallery");
                            scrollToSection("gallery");
                        }}
                    >
                        Gallery
                    </button>
                </li>
                <li>
                    <button
                        className={`text-xl hover:text-[#0D7377] hover:border-b-2 hover:border-[#0D7377] font-bold ${
                            active === "spesifikasi" ? activeClass : ""
                        }`}
                        onClick={() => {
                            handleClick("spesifikasi");
                            scrollToSection("spesifikasi");
                        }}
                    >
                        Spesifikasi
                    </button>
                </li>

                <li>
                    <button
                        className={`text-xl hover:text-[#0D7377] hover:border-b-2 hover:border-[#0D7377] font-bold ${
                            active === "fasilitas" ? activeClass : ""
                        }`}
                        onClick={() => {
                            handleClick("fasilitas");
                            scrollToSection("fasilitas");
                        }}
                    >
                        Fasilitas & Akses
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default NavMid;
