import React from "react";
import ImageAbout from "@/assets/aboutUs.png";
import { Link } from "@inertiajs/react";
import aboutIMG from "@/assets/about.png";

const AboutUs = () => {
    return (
        <div className="flex w-full h-full bg-white justify-center items-center flex-col md:flex-row md:items-start lg:gap-4 md:gap-4 lg:mt-28 md:mt-20 mt-10 lg:px-40 md:px-14 px-4 mb-20">
            {/* Image */}
            <div className=" flex md:w-[50%] flex-col relative w-full justify-center items-center lg:h-[25rem] md:h-[15rem] h-[12rem] ">
                <div className="flex w-full h-full justify-center items-center absolute">
                    <div className="border-green-custom   border-2 lg:w-[70%] md:w-[70%] w-[60%]  h-full rounded-tl-3xl rounded-br-3xl"></div>
                </div>

                <div className="h-full w-full flex items-center justify-center absolute z-20 px-8 lg:px-16 md:px-5 ">
                    <img
                        className="rounded-tr-3xl rounded-bl-3xl  w-full  object-cover"
                        src={aboutIMG}
                        alt=""
                        data-aos="fade-down-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    />
                </div>
                <div className="flex w-full h-full items-end lg:px-8 md:px-0">
                    <div className="bg-green-custom lg:w-[40%] lg:h-[30%] md:w-[35%] md:h-[25%] w-[40%] h-[40%] absolute z-10 rounded-tl-3xl rounded-br-3xl"></div>
                </div>
            </div>
            {/* Text */}
            <div
                className="flex-row w-full md:w-[50%] h-full items-start justify-center mt-8 lg:mt-0 md:mt-0"
                data-aos="zoom-in-down"
            >
                <div className="w-full  h-auto flex mb-3 ">
                    <div className="w-2 bg-green-custom mr-2 lg:mr-5 md:mr-3"></div>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-green-custom">
                        TENTANG <span className="text-black">STELLAR JARDIN</span>
                    </h1>
                </div>
                <p className="text-justify indent-12 font-medium lg:text-xl md:text-lg lg:w-[80%]">
                    Stellar Jardin Residence adalah proyek perumahan yang mengusung konsep Skandinavia yang memukau. Kami mempersembahkan hunian damai dengan sentuhan elegan dan kenyamanan luar biasa untuk para penghuni. Dalam Stellar Jardin, kami menciptakan harmoni sempurna antara desain modern yang elegan dan suasana yang memanjakan.
                    {/* Dengan kemewahan alami dan desain minimalis yang memukau, kami menghadirkan pengalaman hidup tenang. Setiap rumah di Stellar Jardin dirancang dengan cermat untuk menciptakan lingkungan yang memikat dan memenuhi impian hidup para penghuninya. Stellar Jardin Recidense adalah takdir rumah impian Anda yang menawarkan gaya hidup yang unik dan prestisius. */}
                </p>
                <div className="flex w-full h-full justify-start  lg:w-[80%] md:py-7 py-3">
                    <Link href='/about' className="bg-green-custom p-3 text-white font-medium hover:bg-blue-gray-400 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl">Selengkapnya</Link>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;
