import Layout from "@/Layout/Layout";
import ImageType1 from "@/assets/imageType1.png";
import ImageSet from "@/components/type/ImageSet";
import { Specification } from "@/components/type/Specification";
import { ContactUs } from "@/components/type/ContactUs";
import React, { useEffect } from "react";



export default function Type({ title, galleries }) {
    // console.log(galleries);
    // useEffect(() => {
    //     console.log(galleries);
    // }, [galleries]);

    // const image1 = galleries.filter((item) => item.id === 1);
    // console.log(image1);

    return (
        <Layout title={title}>
            <div className="py-[10rem] lg:px-52 bg-white md:px-[2rem] px-6">
                <div>
                    <ImageSet galleries={galleries} />
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
