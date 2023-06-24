import React from "react";
import ImageAbout from "@/assets/aboutUs.png";
import { Link } from "@inertiajs/react";

const AboutUs = () => {
    return (
        <div className="my-[12rem] px-[6rem]">
            <div className="flex flex-col items-center justify-center space-y-10">
                <div className="flex flex-row items-center justify-around px-[1rem] gap-[3rem]">
                    <img
                        src={ImageAbout}
                        className=" w-[130rem] rounded-xl bg-white filter-[sepia(100%) saturate(100%) hue-rotate(180deg)]]]"
                        alt=""
                        data-aos="fade-up-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    />
                    <div
                        className="flex flex-col gap-8"
                        data-aos="zoom-in-down"
                    >
                        <div className="text-6xl font-extrabold flex flex-row items-center ">
                            <span className="text-green-custom pr-4 mb-[rpx]">
                                <svg
                                    width="10"
                                    height="68"
                                    viewBox="0 0 10 68"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        width="10"
                                        height="68"
                                        fill="#0D7377"
                                    />
                                </svg>
                            </span>
                            ABOUT{" "}
                            <span className="text-green-custom pl-4">US</span>
                        </div>
                        <p className="text-2xl font-medium ">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Possimus eos provident unde vitae doloribus ea
                            culpa tenetur, quis aut corporis. Amet dicta veniam
                            architecto labore explicabo quod vero reprehenderit.
                            Odio!
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
    );
};

export default AboutUs;
