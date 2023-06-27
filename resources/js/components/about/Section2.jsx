import React from "react";
import houseIcon from "@/assets/img/house-icon.png";
import logo from "@/assets/logo.png";

const Section2 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-auto mb-8 mt-10">
            <h1 className="font-sans font-bold text-3xl lg:text-5xl mt-10 mb-5">
                WHY CHOOSE US
            </h1>
            <div className="flex w-full lg:w-auto flex-col lg:flex-row md:flex-row items-center">
                <div className="flex flex-col justify-center w-full md:w-auto md:flex-col lg:gap-28 md:gap-24">
                    <div
                        className="card w-full lg:w-[27rem]"
                        data-aos="fade-down-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    >
                        <div className="card-body items-center text-center">
                            <img
                                className="w-[3rem] md:w-[5rem] "
                                src={houseIcon}
                                alt=""
                            />
                            <h2 className="card-title text-3xl font-semibold text-[#0D7377]">MODERN HOUSE</h2>
                            <p className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maxime quisquam tempore.</p>
                        </div>
                    </div>

                    <div
                        className="card w-full lg:w-[27rem]"
                        data-aos="fade-up-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    >
                        <div className="card-body items-center text-center">
                            <img
                                className="w-[3rem] md:w-[5rem] "
                                src={houseIcon}
                                alt=""
                            />
                            <h2 className="card-title text-3xl font-semibold text-[#0D7377]">MODERN HOUSE</h2>
                            <p className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maxime quisquam tempore.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col h-auto w-full lg:w-auto lg:h-auto md:w-[20rem] sm:w-full md:flex-col lg:gap-28 md:gap-24">
                    <div
                        className="card w-full h-full lg:w-[27rem] md:w-[15rem] "
                        data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <div className="card-body items-center text-center justify-center ">
                            <div className="flex items-center justify-center w-32 h-32 lg:w-80 lg:h-80 md:w-40 md:h-40 bg-[#0D7377] rounded-full  lg:">
                                <img
                                    className="lg:w-auto  md:w-auto w-20 "
                                    src={logo}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center w-full lg:w-auto md:w-auto sm:w-full lg:flex-col md:flex-col lg:gap-28 md:gap-24">
                    <div
                        className="card w-full lg:w-[27rem]"
                        data-aos="fade-down-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    >
                        <div className="card-body items-center text-center">
                            <img
                                className="w-[3rem] md:w-[5rem] "
                                src={houseIcon}
                                alt=""
                            />
                            <h2 className="card-title text-3xl font-semibold text-[#0D7377]">MODERN HOUSE</h2>
                            <p className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maxime quisquam tempore.</p>
                        </div>
                    </div>

                    <div
                        className="card w-full lg:w-[27rem]   "
                        data-aos="fade-up-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    >
                        <div className="card-body items-center text-center">
                            <img
                                className="w-[3rem] md:w-[5rem]  "
                                src={houseIcon}
                                alt=""
                            />
                            <h2 className="card-title text-3xl font-semibold text-[#0D7377]">MODERN HOUSE</h2>
                            <p className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maxime quisquam tempore.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full lg:w-auto md:w-auto sm:w-full">
                <div
                    className="card w-full lg:w-[27rem] md:w-[15rem]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                >
                    <div className="card-body items-center text-center">
                        <img
                            className="w-[3rem] md:w-[5rem]"
                            src={houseIcon}
                            alt=""
                        />
                        <h2 className="card-title text-3xl font-semibold text-[#0D7377]">MODERN HOUSE</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum nostrum laborum molestiae!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
