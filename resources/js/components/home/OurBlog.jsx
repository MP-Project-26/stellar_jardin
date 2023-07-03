import React from "react";
import ImageOurBlog1 from "@/assets/bg-kanan.png";
import ImageOur1 from "@/assets/ourblog1-1.png";
import ImageOur2 from "@/assets/ourblog1-2.png";
import ImageOur3 from "@/assets/ourblog1-3.png";

import ImageOurBlog2 from "@/assets/ourblog2.png";
import ImageOurBlog3 from "@/assets/ourblog3.png";
import Elipse1 from "@/assets/Ellipse1.png";
import { Link } from "@inertiajs/react";
import HomeImage from "./HomeImage";

export default function OurBlog() {
    return (
        <>
            <div className="py-[12rem] px-0 md:px-[13rem] bg-gray-200">
                <div className="flex flex-col items-center justify-center gap-8 ">
                    <div
                        className="text-6xl font-extrabold flex flex-col items-center gap-6 mb-6"
                        data-aos="zoom-in"
                    >
                        <div>
                            <span className="text-green-custom">OUR</span> BLOG
                        </div>
                        <span className="text-green-custom pr-4 mb-[rpx]">
                            <svg
                                width="78"
                                height="10"
                                viewBox="0 0 78 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="78" height="10" fill="#0D7377" />
                            </svg>
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-10">
                        <HomeImage src={ImageOur1} bg={false}>
                            <div
                                className="flex flex-col gap-8 relative p-10 lg:p-0 w-full lg:w-[50%]"
                                data-aos="zoom-in-down"
                            >
                                <img
                                    src={Elipse1}
                                    alt="elipse"
                                    className="absolute -top-[14rem]"
                                />
                                <div className="text-6xl font-extrabold flex flex-row items-center ">
                                    how to manage house property
                                </div>
                                <p className=" text-md lg:text-2xl font-medium ">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Possimus eos provident
                                    unde vitae doloribus ea culpa tenetur, quis
                                    aut corporis. Amet dicta veniam architecto
                                    labore explicabo quod vero reprehenderit.
                                    Odio!
                                </p>
                                <div className="flex flex-row gap-[1.2rem] text-white text-sm lg:text-lg">
                                    <span className="px-3 py-1 rounded-xl bg-[#000000a7] text-white font-serif">
                                        #house
                                    </span>
                                    <span className="px-3 py-1 rounded-xl bg-[#000000a7] text-white font-serif">
                                        #house
                                    </span>
                                    <span className="px-3 py-1 rounded-xl bg-[#000000a7] text-white font-serif">
                                        #house
                                    </span>
                                </div>

                                <div className="w-50 flex justify-end">
                                    <Link
                                        href="/buy"
                                        className=" font-semibold text-md lg:text-xl text-white  bg-green-custom rounded-r-[2rem] rounded-tl-none rounded-bl-[2rem] px-5 lg:px-[3.4rem] py-3 lg:py-[1.2rem]"
                                    >
                                        MORE
                                    </Link>
                                </div>
                            </div>
                        </HomeImage>
                    </div>
                </div>
            </div>
            <div className="py-[12rem] px-0 md:px-[13rem] bg-white">
                <div className="flex flex-row items-center justify-center space-y-10">
                    <HomeImage src={ImageOur2} bg={true}>
                        <div
                            className="flex flex-col gap-8 relative p-10 lg:p-0 w-full lg:w-[50%]"
                            data-aos="zoom-in-down"
                        >
                            <img
                                src={Elipse1}
                                alt="elipse"
                                className="absolute -top-[14rem]"
                            />
                            <div className="text-6xl font-extrabold flex flex-row items-center ">
                                how to manage house property
                            </div>
                            <p className=" text-md lg:text-2xl font-medium ">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Possimus eos provident unde
                                vitae doloribus ea culpa tenetur, quis aut
                                corporis. Amet dicta veniam architecto labore
                                explicabo quod vero reprehenderit. Odio!
                            </p>
                            <div className="flex flex-row gap-[1.2rem] text-white text-sm lg:text-lg">
                                <span className="px-3 py-1 rounded-xl bg-[#000000a7] text-white font-serif">
                                    #house
                                </span>
                                <span className="px-3 py-1 rounded-xl bg-[#000000a7] text-white font-serif">
                                    #house
                                </span>
                                <span className="px-3 py-1 rounded-xl bg-[#000000a7] text-white font-serif">
                                    #house
                                </span>
                            </div>
                            <div className="w-50 flex justify-end">
                                <Link
                                    href="/buy"
                                    className=" font-semibold text-md lg:text-xl text-white  bg-green-custom rounded-r-[2rem] rounded-tl-none rounded-bl-[2rem] px-5 lg:px-[3.4rem] py-3 lg:py-[1.2rem]"
                                >
                                    MORE
                                </Link>
                            </div>
                        </div>{" "}
                    </HomeImage>
                </div>
            </div>
            <div className="py-[12rem] px-0 md:px-[13rem] bg-gray-200">
                <div className="flex flex-row items-center justify-center space-y-10">
                    <HomeImage src={ImageOur3} bg={false}>
                        <div
                            className="flex flex-col gap-8 relative p-10 lg:p-0 w-full lg:w-[50%]"
                            data-aos="zoom-in-down"
                        >
                            <img
                                src={Elipse1}
                                alt="elipse"
                                className="absolute -top-[14rem]"
                            />
                            <div className="text-6xl font-extrabold flex flex-row items-center ">
                                how to manage house property
                            </div>
                            <p className=" text-md lg:text-2xl font-medium ">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Possimus eos provident unde
                                vitae doloribus ea culpa tenetur, quis aut
                                corporis. Amet dicta veniam architecto labore
                                explicabo quod vero reprehenderit. Odio!
                            </p>
                            <div className="flex flex-row gap-[1.2rem] text-white text-sm lg:text-lg">
                                <span className="px-3 py-1 rounded-xl bg-[#000000a7] text-white font-serif">
                                    #house
                                </span>
                                <span className="px-3 py-1 rounded-xl bg-[#000000a7] text-white font-serif">
                                    #house
                                </span>
                                <span className="px-3 py-1 rounded-xl bg-[#000000a7] text-white font-serif">
                                    #house
                                </span>
                            </div>

                            <div className="w-50 flex justify-end">
                                <Link
                                    href="/buy"
                                    className=" font-semibold text-md lg:text-xl text-white  bg-green-custom rounded-r-[2rem] rounded-tl-none rounded-bl-[2rem] px-5 lg:px-[3.4rem] py-3 lg:py-[1.2rem]"
                                >
                                    MORE
                                </Link>
                            </div>
                        </div>
                    </HomeImage>
                </div>
            </div>
        </>
    );
}
