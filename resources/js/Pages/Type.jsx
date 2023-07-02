import Layout from "@/Layout/Layout";
import ImageType1 from "@/assets/imageType1.png";
import { ImageSet } from "@/components/type/ImageSet";
import { Specification } from "@/components/type/Specification";
import React, { useEffect } from "react";
import NavMid from "@/components/type/NavMid";
import Fasilitas from "@/components/type/Fasilitas";
import { Link } from "@inertiajs/react";



export default function Type({ title, galleries }) {
    // console.log(galleries);
    // useEffect(() => {
    //     console.log(galleries);
    // }, [galleries]);

    // const image1 = galleries.filter((item) => item.id === 1);
    // console.log(image1);

    return (
        <Layout title={title}>
            <div className="mt-32 my-10">
                <ImageSet galleries={galleries} />
                <NavMid />
                <div className="bg-white lg:mx-40 md:mx-32 mx-2">
                    <div>
                        <div
                            className="font-extrabold flex flex-col"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <div className="w-full border-b-2">
                                <span className="lg:text-5xl md:text-3xl text-2xl">
                                    Tipe Standar
                                </span>
                                <h1 className="text-xl font-normal">Mulai Dari</h1>
                                <h1 className="text-2xl font-semibold">Rp. 1,7 Milyar</h1>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <div className=" bg-lime-500 py-2 px-6 font-medium rounded-md cursor-pointer hover:bg-lime-300">
                                    <Link href="/simulasi_kpr" className="text-center ">Simulasi KPR</Link>
                                </div>

                                <div className=" bg-green-custom py-2 px-6 text-white font-medium rounded-md cursor-pointer hover:bg-gray-500">
                                    <Link href="/pengajuan_srs" className="text-center ">Ajukan SRS</Link>
                                </div>
                            </div>
                            <Specification />
                            <Fasilitas/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
