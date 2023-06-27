import React from "react";
import aboutIMG from "@/assets/about.png";

const Section1 = () => {
    return (
        <div className="flex w-full h-full bg-[#FDFDFD] justify-center items-center flex-col lg:flex-row lg:items-start lg:gap-12 ">
            {/* Image */}
            <div className="flex w-full lg:w-[40rem] pb-4 justify-center ">
                <img
                    className="rounded-tr-3xl rounded-bl-3xl w-full lg:h-[25rem] object-cover"
                    src={aboutIMG}
                    alt=""
                    data-aos="fade-down-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                />
            </div>
            {/* Text */}
            <div className="flex-row w-full lg:w-[30rem] h-full items-start justify-center" data-aos="zoom-in-down">
                <h1 className="text-3xl font-bold">About Stellar Jardin</h1>
                <p className="text-justify indent-12 font-medium lg:text-xl md:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    perferendis dignissimos maxime molestias modi iusto hic
                    saepe veritatis illum. Natus officia dolor quia deserunt
                    quam, eos earum, sint blanditiis, dolorum sequi est
                    perferendis quasi libero a culpa quis magni nostrum. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Vel
                    perferendis dignissimos maxime molestias modi iusto hic
                    saepe veritatis illum. Natus officia dolor quia deserunt
                    quam, eos earum, sint blanditiis, dolorum sequi est
                    perferendis quasi libero a culpa quis magni nostrum. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Vel
                    perferendis dignissimos maxime molestias modi iusto hic
                    saepe veritatis illum. Natus officia dolor quia deserunt
                    quam, eos earum, sint blanditiis, dolorum sequi est
                    perferendis quasi libero a culpa quis magni nostrum.
                </p>
            </div>
        </div>
    );
};

export default Section1;
