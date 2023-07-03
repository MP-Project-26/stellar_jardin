import React from "react";
import BgKanan from "@/assets/bg-kanan.png";
import BgKiri from "@/assets/bg-kiri.png";

export default function HomeImage({ src, bg, children }) {
    return (
        <>
            {bg ? (
                <div
                    className="flex flex-col lg:flex-row items-center justify-around px-0 lg:px-[1rem] gap-[3rem]"
                    data-aos="fade-up-right"
                >
                    {" "}
                    <div className="pl-14 w-full lg:w-[50%]">
                        <div className="relative flex w-full justify-center">
                            <img
                                src={src}
                                className=" absolute top-[10%] left-[10%] lg:-left-[10%] z-[20] w-[20rem] lg:w-[50rem] rounded-se-[3rem] rounded-bl-[3rem]"
                                alt=""
                            />
                            <img
                                src={BgKanan}
                                className="w-[20rem] lg:w-[50rem]"
                                alt=""
                            />
                        </div>
                    </div>
                    {children}
                </div>
            ) : (
                <div
                    className="flex flex-col lg:flex-row items-center justify-around px-0 lg:px-[1rem] gap-[3rem]"
                    data-aos="fade-up-right"
                >
                    {children}
                    <div className="px-10 w-full lg:w-[50%]">
                        <div className="relative ">
                            <img
                                src={src}
                                className=" absolute top-[10%] left-[10%] z-[20] w-[20rem] lg:w-[50rem] rounded-br-[3rem] rounded-ss-[3rem] "
                                alt=""
                            />
                            <img
                                src={BgKiri}
                                className="w-[20rem] lg:w-[50rem]"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
