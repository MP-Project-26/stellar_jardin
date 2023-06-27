import Layout from "@/Layout/Layout";
import React, { useState } from "react";
import imageType1 from "@/assets/imageType1.png";
import { Link } from "@inertiajs/react";


export default function Type_2() {


    const galery = [
        {
            id: 1,
            title : "Eksterior 1",
            img : "/assets/img/eksterior/eksterior_1.png",
            category : "Eksterior"
        },
        {
            id: 2,
            title : "Eksterior 2",
            img : "/assets/img/eksterior/eksterior_2.png",
            category : "Eksterior"
        },
        {
            id: 3,
            title : "Site Plan",
            img : "/assets/img/eksterior/site_plan_1.png",
            category : "Eksterior"
        }
    ]

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
      setSelectedImage(image);
    };


    return (
        <Layout title="About">
            {/* container */}
            <div className="flex flex-col w-full h-auto justify-center py-5 lg:px-52 lg:py-20 bg-[#FDFDFD]">
                {/* title */}
                <div className="flex w-full justify-start h-auto mt-20 mb-2 px-2 lg:px-0 lg:mb-7">
                    <div className="w-[6px] bg-[#0D7377] mr-3"></div>
                    <h1 className="font-sans font-bold text-[#0D7377] text-2xl lg:text-5xl">
                        GA<span className="text-black">LLERY</span>
                    </h1>
                </div>

                {/* image */}
                <div className="flex flex-col h-auto w-full gap-1 lg:flex-row lg:gap-3">
                    <div className="w-full h-full lg:w-[80%] lg:h-full">
                        {/* Background Image */}
                        <div className="h-auto">
                            <img
                                className="object-cover w-full lg:rounded-tl-3xl lg:rounded-br-3xl lg:h-full"
                                src={selectedImage ? selectedImage.img : "/assets/img/eksterior/eksterior_1.png"}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="flex flex-row w-full gap-1 lg:flex-col lg:w-[20%] lg:gap-3 ">

                    {galery.slice(0, 3).map((foto) =>
                        <div className="h-auto" key={foto.id} onClick={() => handleImageClick(foto)}>
                            <img
                                className="object-cover lg:rounded-xl"
                                src={foto.img}
                                alt=""
                            />
                        </div>
                    )}

                        <div className="flex w-auto h-auto relative">
                            <img
                                className="object-cover blur-[3px] z-10 lg:rounded-xl"
                                src={imageType1}
                                alt=""
                            />
                            <div className="flex h-full w-full absolute z-20 bg-black text-white justify-center items-center bg-opacity-30 lg:rounded-xl">
                                <h1 className="font-bold text-sm lg:text-xl">lihat semua</h1>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Layout>
    );
}
