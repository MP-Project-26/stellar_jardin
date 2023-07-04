import React from "react";
import ImageOurBlog1 from "@/assets/bg-kanan.png";
import ImageOur1 from "@/assets/ourblog1-1.png";
import ImageOur2 from "@/assets/ourblog1-2.png";
import ImageOur3 from "@/assets/ourblog1-3.png";

import ImageOurBlog2 from "@/assets/ourblog2.png";
import ImageOurBlog3 from "@/assets/ourblog3.png";
import Elipse1 from "@/assets/Ellipse1.png";
import { Link } from "@inertiajs/react";


export default function OurBlog() {
    return (
        <>
            <div className="py-6 px-4 lg:px-40 md:px-20 bg-gray-200"
            >
                <div className="flex flex-col items-center justify-center gap-8 ">
                    <div
                        className="flex w-full flex-col  lg:text-5xl md:text-4xl text-3xl font-bold items-center mb-6"
                        data-aos="zoom-in"
                    >
                        <h1 className="text-green-custom">
                            OUR <span className="text-black">BLOG</span>
                        </h1>
                        <div className="w-[20%] lg:w-[8%] h-2 bg-green-custom"></div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                        <div className="flex flex-col lg:flex-row md:flex-row w-full h-full justify-center lg:gap-20 md:gap-10 ">
                            {/* Image */}
                            <div className="flex flex-col h-auto relative justify-center md:w-[50%] lg:w-[50%]"
                            data-aos="zoom-in-down">
                                <div className="w-full h-full flex justify-center items-center px-6">
                                    <img
                                        className="w-full"
                                        src="/assets/img/bg-kiri.png"
                                        alt=""
                                    />
                                </div>

                                <div className="flex w-full justify-center h-full absolute md:items-center py-8 pl-12  lg:items-center lg:pl-20 md:pl-16">
                                    <img
                                        className="object-cover w-full h-full rounded-tl-[3rem] lg:h-[20rem] md:h-[14rem] rounded-br-[3rem] shadow-xl"
                                        src="/assets/img/gallery/living_room_2.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            {/* Text */}
                            <div
                                className="flex-row w-full h-full items-start justify-center mt-8 lg:mt-0 md:mt-0 lg:w-[50%] md:w-[50%]"
                                data-aos="zoom-in-down"
                            >
                                <div className="w-full  h-auto flex mb-3 ">
                                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-black">
                                        Panduan Lengkap tentang Membeli dan
                                        Memiliki Rumah
                                    </h1>
                                </div>
                                <p className="text-justify indent-12 font-medium lg:text-xl md:text-lg ">
                                    Temukan panduan lengkap tentang properti
                                    rumah, dari proses pembelian hingga tips
                                    perawatan. Pelajari segala hal yang perlu
                                    Anda ketahui sebelum membeli dan memiliki
                                    rumah impian Anda.
                                    {/* Dengan kemewahan alami dan desain minimalis yang memukau, kami menghadirkan pengalaman hidup tenang. Setiap rumah di Stellar Jardin dirancang dengan cermat untuk menciptakan lingkungan yang memikat dan memenuhi impian hidup para penghuninya. Stellar Jardin Recidense adalah takdir rumah impian Anda yang menawarkan gaya hidup yang unik dan prestisius. */}
                                </p>
                                <div className="flex w-full h-full justify-start  lg:w-[80%] md:py-7 py-3">
                                    <Link
                                        href="/blog"
                                        className="bg-green-custom p-3 text-white font-medium hover:bg-blue-gray-400"
                                    >
                                        Selengkapnya
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
