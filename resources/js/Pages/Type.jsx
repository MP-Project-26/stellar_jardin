import Layout from "@/Layout/Layout";
import ImageType1 from "@/assets/imageType1.png";
import ImageSet from "@/components/type/ImageSet";
import { Specification } from "@/components/type/Specification";
import { ContactUs } from "@/components/type/ContactUs";
import React from "react";

export default function Type({ gallery }) {
    // console.log(gallery);
    return (
        <Layout title="Type">
            <div className="py-[8rem] lg:px-[10rem] bg-white md:px-[3rem] px-6">
                <div>
                    <ImageSet gallery={gallery} />
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
