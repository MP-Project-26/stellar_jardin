import React from "react";

const Section_Prieview = () => {
    return (
        <div className="flex flex-col w-full lg:h-auto lg:mt-20">
            <div className="h-16 w-full bg-brown-400 sticky top-[8%] lg:top-[9%] z-50 ">
                <ul>
                    <li><a className="" href="#gallery">aaa</a></li>
                </ul>
            </div>

                <div className="flex w-full justify-start h-auto  mb-2 lg:px-40 lg:mb-7">
                    <div className="w-[6px] bg-[#0D7377] mr-3"></div>
                    <h1 className="font-sans font-bold text-[#0D7377] text-2xl md:text-4xl lg:text-5xl">
                        OVER<span className="text-black">VIEW</span>
                    </h1>
                </div>

                <div className="flex lg:px-40 flex-col lg:flex-row relative">
                    <div className="bg-black h-[80rem] w-full z-0 "></div>
                    <div className="flex flex-col w-full lg:w-[30%] h-full bg-blue-gray-200  gab-2 sticky lg:top-[27%] -bottom-[10%] z-10">
                        <div className="h-10 w-full bg-orange-300   "></div>
                        <div className="h-20 w-full bg-blue-300 lg:relative sticky -bottom-[0%] ">

                        </div>
                    </div>
                </div>

        </div>
    );
};

export default Section_Prieview;
