import Layout from "@/Layouts/Layout";
import ImageType1 from "@/assets/imageType1.png";
import { ImageSet } from "@/components/type/ImageSet";
import { Specification } from "@/components/type/Specification";
import { ContactUs } from "@/components/type/ContactUs";
import React from "react";

export default function Type() {
    return (
        <Layout title="Type">
            <div className="py-[10rem] lg:px-[6rem] bg-white md:px-[2rem] px-6">
                <div>
                    <img
                        src={ImageType1}
                        alt="image1"
                        className="h-full w-full lg:rounded-[2rem]  rounded-[1rem]"
                    />
                    <ImageSet />
                    <div
                        className="font-extrabold flex flex-col"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <span className="lg:text-5xl md:text-3xl text-2xl">
                            Normal Type
                        </span>
                        <span className="lg:text-3xl md:text-xl font-bold">
                            Rp. 1,23 Miliar
                        </span>
                        <span className="font-normal py-[2rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fringilla, mattis
                            ligula consectetur, ultrices mauris. Maecenas vitae
                            mattis tellus. mattis ligula consectetur, ultrices
                            mauris. Maecenas vitae mattis tellus.mattis ligula
                            consectetur, ultrices mauris. Maecenas vitae mattis
                            tellus.
                        </span>
                        <hr className="border-1 border-black" />
                        <Specification />
                        <hr className="border-1 border-black" />
                        <ContactUs />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
