import Layout from "@/Layouts/Layouts";
import AboutUs from "@/components/home/About";
import CarouselHeader from "@/components/home/Carousal";
import OurBlog from "@/components/home/OurBlog";
import ImageMap1 from "@/assets/map1.png";
import ImageMap2 from "@/assets/map2.png";
import ImageMap3 from "@/assets/map3.png";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import ImageType1 from "@/assets/imageType2.png";
import ImageType2 from "@/assets/imageType4.png";
import ImageType3 from "@/assets/imageType5.png";
import ImageType4 from "@/assets/imageType6.png";
import ModalLocation from "@/components/utils/modal/modalLocation";
import SliderImage from "@/components/home/SliderImage";
import BlogCard from "@/components/home/BlogCard";
import {
    FaBowlFood,
    FaBuildingShield,
    FaStore,
    FaTreeCity,
    FaUtensils,
} from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const image = [
    {
        title: "image1",
        image: ImageType1,
    },
    {
        title: "image2",
        image: ImageType2,
    },
    {
        title: "image3",
        image: ImageType3,
    },
    {
        title: "image4",
        image: ImageType4,
    },
];

const Index = ({ title, galleries }) => {
    console.log(galleries);
    return (
        <Layout title={title}>
            <CarouselHeader />
            <AboutUs />
            <SliderImage galleries={galleries} />
            <OurBlog />
            <BlogCard />
            <div className="md:py-32 py-10 bg-green-custom bg-opacity-10 ">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
                    {/* 1 */}
                    <div
                        className="rounded-[1.1rem] border-green-custom border-[3px] w-[22rem] h-[35rem]"
                        data-aos="zoom-in-right"
                    >
                        <div className=" -m-[2px] flex flex-col">
                            <img src={ImageMap1} alt="img" className="" />
                            <div className="w-full flex justify-center -mt-[3rem]">
                                <span className="cursor-pointer bg-green-custom text-white px-7 py-5 rounded-xl text-2xl font-extrabold">
                                    Facilities
                                </span>
                            </div>
                            <div className="w-full flex flex-col gap-4 justify-center py-[2rem] px-[2rem]">
                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaBuildingShield className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Sistem Keamanan 24 Jam
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaTreeCity className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Fasum Taman
                                    </h1>
                                </div>

                                <Link
                                    href="/type"
                                    className="text-blue-700 cursor-pointer"
                                >
                                    <h1>Lihat Selengkapnya</h1>
                                </Link>     
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div
                        className="rounded-[1.1rem] border-green-custom border-[3px] w-[22rem] h-[35rem]"
                        data-aos="zoom-in"
                    >
                        <div className=" -m-[2px] flex flex-col">
                            <img src={ImageMap2} alt="img" className="" />
                            <div className="w-full flex justify-center -mt-[3rem]">
                                <span className="cursor-pointer bg-green-custom text-white px-7 py-5 rounded-xl text-2xl font-extrabold">
                                    access
                                </span>
                            </div>
                            <div className="w-full flex flex-col gap-4 justify-center py-[2rem] px-[3rem]">
                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaUtensils className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Rumah Makan
                                    </h1>
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        10 Menit
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaStore className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Pasar Tradisional
                                    </h1>
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        10 Menit
                                    </h1>
                                </div>

                                <Link
                                    href="/type"
                                    className="text-blue-700 cursor-pointer"
                                >
                                    <h1>Lihat Selengkapnya</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div
                        className="rounded-[1.1rem] border-green-custom border-[3px] w-[22rem] h-[35rem]"
                        data-aos="zoom-in-left"
                    >
                        <div className=" -m-[2px] flex flex-col">
                            <img src={ImageMap3} alt="img" className="" />
                            <ModalLocation />
                            <div className="w-full flex flex-col gap-4 justify-center items-center py-[2rem] px-[3rem] ">
                                <div className="flex w-full items-center flex-col gap-2">
                                    <p className=" text-center text-xl font-semibold">
                                        Jl. Cikunir Raya No.37, RT.001/RW.002,
                                        Jaka Mulya, Kec. Bekasi Sel., Kota Bks,
                                        Jawa Barat 17146
                                    </p>

                                    <div className="text-blue-700 cursor-pointer">
                                        <h1>Lihat di Map</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
