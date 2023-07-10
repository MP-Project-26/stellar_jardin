
import ImageSet from "@/components/type/ImageSet";
import { Specification } from "@/components/type/Specification";
import React, { useEffect } from "react";
import NavMid from "@/components/type/NavMid";
import Fasilitas from "@/components/type/Fasilitas";
import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";



export default function Type({ title, galleries, idElement }) {
    return (
        <Layout title={title}>
            <div className="mt-32 my-10">
                <ImageSet galleries={galleries} />
                <NavMid />
                <div className="bg-white lg:mx-40 md:mx-32 mx-4">
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
                                <Link href="/simulasi_kpr" className=" bg-lime-500 py-2 px-6 font-medium rounded-md cursor-pointer hover:bg-lime-300">
                                    <h1 className="text-center ">Simulasi KPR</h1>
                                </Link>

                                <Link href="/pemesanan_unit" className=" bg-green-custom py-2 px-6 text-white font-medium rounded-md cursor-pointer hover:bg-gray-500">
                                    <h1 href="/pemesanan_unit" className="text-center ">Pesan Unit</h1>
                                </Link>
                            </div>
                            <Specification idElement={idElement}/>
                            <Fasilitas idElement={idElement}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
