import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="footer px-0 md:px-[10rem] py-[5rem] bg-green-custom text-neutral-content flex flex-col gap-5  ">
            <div className="flex flex-col lg:flex-row w-full justify-center">
                <img
                    src={"/assets/img/footer_stellar.png"}
                    alt="Logo"
                    className="w-[17rem] lg:w-[20rem]  cursor-pointer m-0 lg:-mt-[5rem] lg:-ml-[5rem]"
                />
                <div className=" w-full lg:w-[70%] flex flex-col gap-5 lg:gap-0 lg:flex-row justify-evenly p-7 lg:p-0">
                    <div className="flex flex-col gap-2 w-[10rem] ">
                        <Link
                            href="#"
                            className="text-xl text-white font-semibold font-roboto  cursor-pointer"
                        >
                            Home
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 w-[10rem] ">
                        <Link
                            href="#"
                            className="text-xl text-white font-semibold font-roboto  cursor-pointer"
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            className="text-md text-gray-300 font-roboto  cursor-pointer"
                        >
                            Our Story
                        </Link>
                        <Link
                            href="#"
                            className="text-md text-gray-300 font-roboto  cursor-pointer"
                        >
                            Contact Form
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 w-[10rem] ">
                        <Link
                            href="#"
                            className="text-xl text-white font-semibold font-roboto  cursor-pointer"
                        >
                            Type
                        </Link>
                        <Link
                            href="#"
                            className="text-md text-gray-300 font-roboto  cursor-pointer"
                        >
                            Standard
                        </Link>
                        <Link
                            href="#"
                            className="text-md text-gray-300 font-roboto  cursor-pointer"
                        >
                            Custom
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 w-[10rem] ">
                        <Link
                            href="#"
                            className="text-xl text-white font-semibold font-roboto  cursor-pointer"
                        >
                            Blog
                        </Link>{" "}
                        <Link
                            href="#"
                            className="text-md text-gray-300 font-roboto  cursor-pointer"
                        >
                            Latest news
                        </Link>
                        <Link
                            href="#"
                            className="text-md text-gray-300 font-roboto  cursor-pointer"
                        >
                            Top Trending
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 w-[16rem] ">
                        <Link
                            href="#"
                            className="text-xl text-white font-semibold font-roboto  cursor-pointer"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="#"
                            className="text-md text-gray-300 font-roboto flex flex-row items-center gap-3 cursor-pointer"
                        >
                            <svg
                                width="20"
                                height="16"
                                viewBox="0 0 20 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H18C18.55 1.69779e-06 19.021 0.196001 19.413 0.588001C19.805 0.980001 20.0007 1.45067 20 2V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z"
                                    fill="#E2E0E0"
                                />
                            </svg>{" "}
                            stellarjardin@gmail.com
                        </Link>
                        <Link
                            href="#"
                            className="text-md text-gray-300 font-roboto flex flex-row items-center gap-3 cursor-pointer"
                        >
                            <svg
                                width="24"
                                height="19"
                                viewBox="0 0 24 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.8"
                                    d="M22 0.679688H2C1.46957 0.679688 0.960859 0.88399 0.585786 1.24765C0.210714 1.61131 0 2.10454 0 2.61884L0 16.1929C0 16.7072 0.210714 17.2004 0.585786 17.5641C0.960859 17.9277 1.46957 18.132 2 18.132H22C22.5304 18.132 23.0391 17.9277 23.4142 17.5641C23.7893 17.2004 24 16.7072 24 16.1929V2.61884C24 2.10454 23.7893 1.61131 23.4142 1.24765C23.0391 0.88399 22.5304 0.679688 22 0.679688ZM8 3.58841C8.79565 3.58841 9.55871 3.89486 10.1213 4.44035C10.6839 4.98585 11 5.72569 11 6.49713C11 7.26857 10.6839 8.00842 10.1213 8.55391C9.55871 9.0994 8.79565 9.40585 8 9.40585C7.20435 9.40585 6.44129 9.0994 5.87868 8.55391C5.31607 8.00842 5 7.26857 5 6.49713C5 5.72569 5.31607 4.98585 5.87868 4.44035C6.44129 3.89486 7.20435 3.58841 8 3.58841ZM14 15.2233H2V14.2537C2 12.3146 6 11.248 8 11.248C10 11.248 14 12.3146 14 14.2537V15.2233ZM17.85 11.345H19.5L21 13.2842L19 15.2233C17.7 14.2537 16.73 12.906 16.28 11.345C16.1 10.7245 16 10.0749 16 9.40585C16 8.73685 16.1 8.08723 16.28 7.46671C16.73 5.896 17.7 4.55798 19 3.58841L21 5.52756L19.5 7.46671H17.85C17.63 8.07754 17.5 8.72715 17.5 9.40585C17.5 10.0846 17.63 10.7342 17.85 11.345Z"
                                    fill="#E2E0E0"
                                />
                            </svg>
                            (62)87885889540
                        </Link>
                        <Link
                            href="#"
                            className="text-md text-gray-300 font-roboto flex flex-row items-center gap-10 mt-3 cursor-pointer"
                        >
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30 15.0376C30 6.73684 23.28 0 15 0C6.72 0 0 6.73684 0 15.0376C0 22.3158 5.16 28.3759 12 29.7744V19.5489H9V15.0376H12V11.2782C12 8.37594 14.355 6.01504 17.25 6.01504H21V10.5263H18C17.175 10.5263 16.5 11.203 16.5 12.0301V15.0376H21V19.5489H16.5V30C24.075 29.2481 30 22.8421 30 15.0376Z"
                                    fill="#E2E0E0"
                                />
                            </svg>
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.7 0H21.3C26.1 0 30 3.9 30 8.7V21.3C30 23.6074 29.0834 25.8203 27.4518 27.4518C25.8203 29.0834 23.6074 30 21.3 30H8.7C3.9 30 0 26.1 0 21.3V8.7C0 6.39262 0.916605 4.17974 2.54817 2.54817C4.17974 0.916605 6.39262 0 8.7 0ZM8.4 3C6.96783 3 5.59432 3.56893 4.58162 4.58162C3.56893 5.59432 3 6.96783 3 8.4V21.6C3 24.585 5.415 27 8.4 27H21.6C23.0322 27 24.4057 26.4311 25.4184 25.4184C26.4311 24.4057 27 23.0322 27 21.6V8.4C27 5.415 24.585 3 21.6 3H8.4ZM22.875 5.25C23.3723 5.25 23.8492 5.44754 24.2008 5.79917C24.5525 6.15081 24.75 6.62772 24.75 7.125C24.75 7.62228 24.5525 8.09919 24.2008 8.45082C23.8492 8.80246 23.3723 9 22.875 9C22.3777 9 21.9008 8.80246 21.5492 8.45082C21.1975 8.09919 21 7.62228 21 7.125C21 6.62772 21.1975 6.15081 21.5492 5.79917C21.9008 5.44754 22.3777 5.25 22.875 5.25ZM15 7.5C16.9891 7.5 18.8968 8.29018 20.3033 9.6967C21.7098 11.1032 22.5 13.0109 22.5 15C22.5 16.9891 21.7098 18.8968 20.3033 20.3033C18.8968 21.7098 16.9891 22.5 15 22.5C13.0109 22.5 11.1032 21.7098 9.6967 20.3033C8.29018 18.8968 7.5 16.9891 7.5 15C7.5 13.0109 8.29018 11.1032 9.6967 9.6967C11.1032 8.29018 13.0109 7.5 15 7.5ZM15 10.5C13.8065 10.5 12.6619 10.9741 11.818 11.818C10.9741 12.6619 10.5 13.8065 10.5 15C10.5 16.1935 10.9741 17.3381 11.818 18.182C12.6619 19.0259 13.8065 19.5 15 19.5C16.1935 19.5 17.3381 19.0259 18.182 18.182C19.0259 17.3381 19.5 16.1935 19.5 15C19.5 13.8065 19.0259 12.6619 18.182 11.818C17.3381 10.9741 16.1935 10.5 15 10.5Z"
                                    fill="#E2E0E0"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col p-2 lg:p-0">
                <div className="w-full flex justify-center gap-10 flex-col">
                    <Link
                        href="#"
                        className=" text-md lg:text-lg text-gray-300 font-roboto text-center  cursor-pointer p-5 lg:p-0"
                    >
                        Jl. Cikunir Raya No.37, RT.001/RW.002, Jaka Mulya, Kec.
                        Bekasi Sel., Kota Bks, Jawa Barat 17146
                    </Link>
                    <div className="border border-[#a2a2a2]"></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center pt-5">
                    <Link
                        href="#"
                        className="text-xs lg:text-lg text-gray-300 font-roboto text-center flex flex-row items-center  cursor-pointer"
                    >
                        Powered by{" "}
                        <img src="/assets/img/mp-footer.png" alt="" /> PROJECT
                    </Link>
                    <div className="text-xs lg:text-lg text-gray-300 font-roboto text-center flex flex-row gap-4">
                        <Link>Privacy policy</Link>
                        <Link>Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
