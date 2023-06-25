import Layout from "@/Layout/Layout";
import AboutUs from "@/components/home/About";
import Carousel from "@/components/home/Carousal";
import OurBlog from "@/components/home/OurBlog";
import ImageMap1 from "@/assets/map1.png";
import ImageMap2 from "@/assets/map2.png";
import ImageMap3 from "@/assets/map3.png";
import React from "react";

const Index = () => {
    return (
        <Layout title="index">
            <Carousel />
            <AboutUs />
            <OurBlog />
            <div className="py-[12rem] px-[6rem] bg-white ">
                <div className="flex flex-row items-center justify-center gap-8 ">
                    {/* 1 */}
                    <div
                        className="rounded-[1.1rem] border-green-custom border-[3px] w-[22rem] h-[35rem]"
                        data-aos="zoom-in-right"
                    >
                        <div className=" -m-[2px] flex flex-col">
                            <img src={ImageMap1} alt="img" className="" />
                            <div className="w-full flex justify-center -mt-[3rem]">
                                <span className="bg-green-custom text-white px-7 py-5 rounded-xl text-2xl font-extrabold">
                                    Facilities
                                </span>
                            </div>
                            <div className="w-full flex flex-col gap-4 justify-center items-center py-[2rem] px-[2rem]">
                                <div className="flex w-full  justify-center flex-row gap-4 items-center">
                                    <svg
                                        width="35"
                                        height="35"
                                        viewBox="0 0 35 35"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="17.5"
                                            cy="17.5"
                                            r="17.5"
                                            fill="#0D7377"
                                        />
                                        <path
                                            d="M27 26.4295H7H27ZM7 15.7598L15.126 9.45496C15.6579 9.04223 16.3188 8.81737 17 8.81737C17.6812 8.81737 18.3421 9.04223 18.874 9.45496L27 15.7598M20.5 10.4249V8.48499C20.5 8.35636 20.5527 8.233 20.6464 8.14205C20.7402 8.0511 20.8674 8 21 8H23.5C23.6326 8 23.7598 8.0511 23.8536 8.14205C23.9473 8.233 24 8.35636 24 8.48499V13.3348M9 26.4295V14.3048V26.4295ZM25 26.4295V14.3048V26.4295Z"
                                            fill="#0D7377"
                                        />
                                        <path
                                            d="M27 26.4295H7M7 15.7598L15.126 9.45496C15.6579 9.04223 16.3188 8.81737 17 8.81737C17.6812 8.81737 18.3421 9.04223 18.874 9.45496L27 15.7598M20.5 10.4249V8.48499C20.5 8.35636 20.5527 8.233 20.6464 8.14205C20.7402 8.0511 20.8674 8 21 8H23.5C23.6326 8 23.7598 8.0511 23.8536 8.14205C23.9473 8.233 24 8.35636 24 8.48499V13.3348M9 26.4295V14.3048M25 26.4295V14.3048"
                                            stroke="white"
                                        />
                                        <path
                                            d="M20 26.4296V21.5797C20 20.2082 20 19.5224 19.56 19.0966C19.122 18.6698 18.415 18.6698 17 18.6698C15.586 18.6698 14.879 18.6698 14.44 19.0966C14 19.5214 14 20.2072 14 21.5797V26.4296M19 14.3049C19 14.8194 18.7893 15.3129 18.4142 15.6767C18.0391 16.0405 17.5304 16.2449 17 16.2449C16.4696 16.2449 15.9609 16.0405 15.5858 15.6767C15.2107 15.3129 15 14.8194 15 14.3049C15 13.7904 15.2107 13.297 15.5858 12.9332C15.9609 12.5694 16.4696 12.365 17 12.365C17.5304 12.365 18.0391 12.5694 18.4142 12.9332C18.7893 13.297 19 13.7904 19 14.3049Z"
                                            fill="#0D7377"
                                        />
                                        <path
                                            d="M20 26.4296V21.5797C20 20.2082 20 19.5224 19.56 19.0966C19.122 18.6698 18.415 18.6698 17 18.6698C15.586 18.6698 14.879 18.6698 14.44 19.0966C14 19.5214 14 20.2072 14 21.5797V26.4296M19 14.3049C19 14.8194 18.7893 15.3129 18.4142 15.6767C18.0391 16.0405 17.5304 16.2449 17 16.2449C16.4696 16.2449 15.9609 16.0405 15.5858 15.6767C15.2107 15.3129 15 14.8194 15 14.3049C15 13.7904 15.2107 13.297 15.5858 12.9332C15.9609 12.5694 16.4696 12.365 17 12.365C17.5304 12.365 18.0391 12.5694 18.4142 12.9332C18.7893 13.297 19 13.7904 19 14.3049Z"
                                            stroke="white"
                                        />
                                    </svg>
                                    <p className="text-xl font-semibold">
                                        Lorem, ipsum dolor{" "}
                                    </p>
                                </div>
                                <div className="flex w-full  justify-center flex-row gap-4 items-center">
                                    <svg
                                        width="35"
                                        height="35"
                                        viewBox="0 0 35 35"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="17.5"
                                            cy="17.5"
                                            r="17.5"
                                            fill="#0D7377"
                                        />
                                        <path
                                            d="M27 26.4295H7H27ZM7 15.7598L15.126 9.45496C15.6579 9.04223 16.3188 8.81737 17 8.81737C17.6812 8.81737 18.3421 9.04223 18.874 9.45496L27 15.7598M20.5 10.4249V8.48499C20.5 8.35636 20.5527 8.233 20.6464 8.14205C20.7402 8.0511 20.8674 8 21 8H23.5C23.6326 8 23.7598 8.0511 23.8536 8.14205C23.9473 8.233 24 8.35636 24 8.48499V13.3348M9 26.4295V14.3048V26.4295ZM25 26.4295V14.3048V26.4295Z"
                                            fill="#0D7377"
                                        />
                                        <path
                                            d="M27 26.4295H7M7 15.7598L15.126 9.45496C15.6579 9.04223 16.3188 8.81737 17 8.81737C17.6812 8.81737 18.3421 9.04223 18.874 9.45496L27 15.7598M20.5 10.4249V8.48499C20.5 8.35636 20.5527 8.233 20.6464 8.14205C20.7402 8.0511 20.8674 8 21 8H23.5C23.6326 8 23.7598 8.0511 23.8536 8.14205C23.9473 8.233 24 8.35636 24 8.48499V13.3348M9 26.4295V14.3048M25 26.4295V14.3048"
                                            stroke="white"
                                        />
                                        <path
                                            d="M20 26.4296V21.5797C20 20.2082 20 19.5224 19.56 19.0966C19.122 18.6698 18.415 18.6698 17 18.6698C15.586 18.6698 14.879 18.6698 14.44 19.0966C14 19.5214 14 20.2072 14 21.5797V26.4296M19 14.3049C19 14.8194 18.7893 15.3129 18.4142 15.6767C18.0391 16.0405 17.5304 16.2449 17 16.2449C16.4696 16.2449 15.9609 16.0405 15.5858 15.6767C15.2107 15.3129 15 14.8194 15 14.3049C15 13.7904 15.2107 13.297 15.5858 12.9332C15.9609 12.5694 16.4696 12.365 17 12.365C17.5304 12.365 18.0391 12.5694 18.4142 12.9332C18.7893 13.297 19 13.7904 19 14.3049Z"
                                            fill="#0D7377"
                                        />
                                        <path
                                            d="M20 26.4296V21.5797C20 20.2082 20 19.5224 19.56 19.0966C19.122 18.6698 18.415 18.6698 17 18.6698C15.586 18.6698 14.879 18.6698 14.44 19.0966C14 19.5214 14 20.2072 14 21.5797V26.4296M19 14.3049C19 14.8194 18.7893 15.3129 18.4142 15.6767C18.0391 16.0405 17.5304 16.2449 17 16.2449C16.4696 16.2449 15.9609 16.0405 15.5858 15.6767C15.2107 15.3129 15 14.8194 15 14.3049C15 13.7904 15.2107 13.297 15.5858 12.9332C15.9609 12.5694 16.4696 12.365 17 12.365C17.5304 12.365 18.0391 12.5694 18.4142 12.9332C18.7893 13.297 19 13.7904 19 14.3049Z"
                                            stroke="white"
                                        />
                                    </svg>
                                    <p className="text-xl font-semibold">
                                        Lorem, ipsum dolor{" "}
                                    </p>
                                </div>
                                <div className="flex w-full  justify-center flex-row gap-4 items-center">
                                    <svg
                                        width="35"
                                        height="35"
                                        viewBox="0 0 35 35"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="17.5"
                                            cy="17.5"
                                            r="17.5"
                                            fill="#0D7377"
                                        />
                                        <path
                                            d="M27 26.4295H7H27ZM7 15.7598L15.126 9.45496C15.6579 9.04223 16.3188 8.81737 17 8.81737C17.6812 8.81737 18.3421 9.04223 18.874 9.45496L27 15.7598M20.5 10.4249V8.48499C20.5 8.35636 20.5527 8.233 20.6464 8.14205C20.7402 8.0511 20.8674 8 21 8H23.5C23.6326 8 23.7598 8.0511 23.8536 8.14205C23.9473 8.233 24 8.35636 24 8.48499V13.3348M9 26.4295V14.3048V26.4295ZM25 26.4295V14.3048V26.4295Z"
                                            fill="#0D7377"
                                        />
                                        <path
                                            d="M27 26.4295H7M7 15.7598L15.126 9.45496C15.6579 9.04223 16.3188 8.81737 17 8.81737C17.6812 8.81737 18.3421 9.04223 18.874 9.45496L27 15.7598M20.5 10.4249V8.48499C20.5 8.35636 20.5527 8.233 20.6464 8.14205C20.7402 8.0511 20.8674 8 21 8H23.5C23.6326 8 23.7598 8.0511 23.8536 8.14205C23.9473 8.233 24 8.35636 24 8.48499V13.3348M9 26.4295V14.3048M25 26.4295V14.3048"
                                            stroke="white"
                                        />
                                        <path
                                            d="M20 26.4296V21.5797C20 20.2082 20 19.5224 19.56 19.0966C19.122 18.6698 18.415 18.6698 17 18.6698C15.586 18.6698 14.879 18.6698 14.44 19.0966C14 19.5214 14 20.2072 14 21.5797V26.4296M19 14.3049C19 14.8194 18.7893 15.3129 18.4142 15.6767C18.0391 16.0405 17.5304 16.2449 17 16.2449C16.4696 16.2449 15.9609 16.0405 15.5858 15.6767C15.2107 15.3129 15 14.8194 15 14.3049C15 13.7904 15.2107 13.297 15.5858 12.9332C15.9609 12.5694 16.4696 12.365 17 12.365C17.5304 12.365 18.0391 12.5694 18.4142 12.9332C18.7893 13.297 19 13.7904 19 14.3049Z"
                                            fill="#0D7377"
                                        />
                                        <path
                                            d="M20 26.4296V21.5797C20 20.2082 20 19.5224 19.56 19.0966C19.122 18.6698 18.415 18.6698 17 18.6698C15.586 18.6698 14.879 18.6698 14.44 19.0966C14 19.5214 14 20.2072 14 21.5797V26.4296M19 14.3049C19 14.8194 18.7893 15.3129 18.4142 15.6767C18.0391 16.0405 17.5304 16.2449 17 16.2449C16.4696 16.2449 15.9609 16.0405 15.5858 15.6767C15.2107 15.3129 15 14.8194 15 14.3049C15 13.7904 15.2107 13.297 15.5858 12.9332C15.9609 12.5694 16.4696 12.365 17 12.365C17.5304 12.365 18.0391 12.5694 18.4142 12.9332C18.7893 13.297 19 13.7904 19 14.3049Z"
                                            stroke="white"
                                        />
                                    </svg>
                                    <p className="text-xl font-semibold">
                                        Lorem, ipsum dolor{" "}
                                    </p>
                                </div>
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
                                <span className="bg-green-custom text-white px-7 py-5 rounded-xl text-2xl font-extrabold">
                                    access
                                </span>
                            </div>
                            <div className="w-full flex flex-col gap-4 justify-center items-center py-[2rem] px-[3rem]">
                                <div className="flex w-full items-center">
                                    <p className=" text-center text-xl font-semibold">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Pariatur, harum
                                        reprehenderit sequi ipsum odio sed.
                                    </p>
                                </div>
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
                            <div className="w-full flex justify-center -mt-[3rem]">
                                <span className="bg-green-custom text-white px-7 py-5 rounded-xl text-2xl font-extrabold">
                                    location
                                </span>
                            </div>
                            <div className="w-full flex flex-col gap-4 justify-center items-center py-[2rem] px-[3rem]">
                                <div className="flex w-full items-center">
                                    <p className=" text-center text-xl font-semibold">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Pariatur, harum
                                        reprehenderit sequi ipsum odio sed.
                                    </p>
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
