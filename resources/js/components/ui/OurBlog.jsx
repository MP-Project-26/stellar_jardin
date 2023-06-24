import React from "react";
import ImageOurBlog from "@/assets/ourblog.png";
import Elipse1 from "@/assets/Ellipse1.png";
import { Link } from "@inertiajs/react";

export default function OurBlog() {
    return (
        <div className="my-[12rem] px-[6rem]">
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="text-6xl font-extrabold flex flex-col items-center gap-6 mb-6">
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
                <div className="flex flex-col items-center justify-center space-y-10">
                    <div className="flex flex-row items-center justify-around px-[1rem] gap-[3rem]">
                        <img
                            src={ImageOurBlog}
                            className=" w-[130rem] rounded-xl bg-white filter-[sepia(100%) saturate(100%) hue-rotate(180deg)]]]"
                            alt=""
                            data-aos="fade-up-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                        />
                        <div
                            className="flex flex-col gap-8 relative"
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
                            <p className="text-2xl font-medium ">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Possimus eos provident unde
                                vitae doloribus ea culpa tenetur, quis aut
                                corporis. Amet dicta veniam architecto labore
                                explicabo quod vero reprehenderit. Odio!
                            </p>

                            <div className="w-50 flex justify-end">
                                <Link
                                    href="/buy"
                                    className=" font-semibold text-xl text-white  bg-green-custom rounded-r-[2rem] rounded-tl-none rounded-bl-[2rem] px-[3.4rem] py-[1.2rem]"
                                >
                                    MORE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
