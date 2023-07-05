import Layout from "@/Layouts/Layouts";
import React, { useState, useEffect } from "react";

const PengajuanSRS = ({ title }) => {
    const urlProvinsi ="https://dev.farizdotid.com/api/daerahindonesia/provinsi";
    const [provinsi, setProvinsi] = useState([]);
    const [selectedProvinsi, setSelectedProvinsi] = useState('Provinsi')//berisi id provinsi

    const urlKota =

    useEffect(() => {
        fetch(urlProvinsi)
            .then((response) => response.json())
            .then((data) => setProvinsi(data.provinsi));

    }, []);


    const handleSelectAlamat = (event) => {
        setSelectedProvinsi(event.target.value)
    }


    console.log("hhh",provinsi);

    return (
        <Layout title={title}>
            <div className="w-full h-full mt-20 lg:px-40 md:px-20 lg:py-16 md:py-14 px-4 py-8">
                {/* container */}
                <div className="bg-green-custom bg-opacity-10 flex flex-col justify-center items-center w-full h-full px-4 rounded-xl shadow-lg">
                    {/* Tilte */}
                    <div className="flex flex-col w-full h-full md:items-center justify-center pt-10">
                        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-green-custom">
                            PENGAJUAN <span className="text-black">SRS</span>
                        </h1>
                        {/* Line */}
                        <div className="w-[10%] h-2 bg-green-custom"></div>
                    </div>
                    {/* end title */}

                    {/* Container Form */}
                    <div className="lg:w-[70%] md:w-[90%] w-full lg:m-10 md:m-5 m-5">
                        <form className="w-[100%] flex flex-wrap justify-center gap-2">
                            <div className="flex flex-col md:w-[30%] w-full">
                                <label
                                    className="w-full"
                                    htmlFor="nama lengkap"
                                >
                                    Nama Depan
                                </label>
                                <input
                                    type="text"
                                    className="w-full border-2 border-gray-300 rounded-md p-2 mb-4"
                                    placeholder="Nama Depan"
                                />
                            </div>
                            <div className="flex flex-col md:w-[30%] w-full">
                                <label
                                    className="w-full"
                                    htmlFor="nama Belakang"
                                >
                                    Nama Belakang
                                </label>
                                <input
                                    type="text"
                                    className="w-full border-2 border-gray-300 rounded-md p-2 mb-4"
                                    placeholder="Nama Belakang"
                                />
                            </div>
                            <div className="flex flex-col md:w-[40%] w-full">
                                <label
                                    className="w-full"
                                    htmlFor="nama lengkap"
                                >
                                    Alamat Lengkap
                                </label>
                                <select className="select w-full max-w-xs"  value={selectedProvinsi} onChange={handleSelectAlamat}>
                                    <option disabled value="Provinsi">Provinsi</option>
                                    {provinsi.map((item, index) => (
                                        <option key={index} value={item.id}>{item.nama}</option>
                                    ))}

                                </select>
                            </div>
                        </form>
                    </div>
                    {/* end Container Form */}
                </div>
                {/* end container */}
            </div>
        </Layout>
    );
};

export default PengajuanSRS;
