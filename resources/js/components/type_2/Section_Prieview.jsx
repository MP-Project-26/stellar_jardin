import React, { useState } from "react";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { FaMaximize } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { FaBuildingShield } from "react-icons/fa6";
import { FaTreeCity } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { FaMosque } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa6";

const Section_Prieview = () => {
    const [showMoreFasilitas, setShowMoreFasilitas] = useState(false);
    const [showMoreAkses, setShowMoreAkses] = useState(false);

    const toggleShowMoreFasilitas = () => {
        setShowMoreFasilitas(!showMoreFasilitas);
    };

    const toggleShowMoreAkses = () => {
        setShowMoreAkses(!showMoreAkses);
    };
    return (
        <div className="flex flex-col w-full md:h-auto lg:h-auto lg:mt-5 md:mt-5 ">
            <div className="flex md:px-10 lg:px-40 flex-col lg:flex-row md:flex-row relative">
                <div className="h-auto bg-white w-full lg:w-[80%] md:w-[80%] p-2 lg:px-0 mb-5">
                    <div id="spesifikasi">
                        <div className="flex flex-col mb-3">
                            <h1 className="lg:text-xl text-lg ">Start From</h1>
                            <p className="lg:text-2xl text-2xl font-semibold ">
                                Rp. 1,7 Milyar
                            </p>
                        </div>
                        <div className="flex flex-col border-b-2 pb-2 ">
                            <h1 className="lg:text-xl md:text-xl text-lg ">
                                Spesifikasi
                            </h1>
                            <div className="flex flex-row gap-2 overflow-x-auto w-full ">
                                <div className="border-2 border-[#0D7377] p-2 justify-center rounded-md ">
                                    <div className="flex flex-col">
                                        <p>K.Tidur</p>
                                        <div className="flex items-center gap-2 ">
                                            <FaBed className="text-[#0D7377] text-2xl" />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-2 border-[#0D7377] p-2 justify-center rounded-md">
                                    <div className="flex flex-col">
                                        <p>K.Mandi</p>
                                        <div className="flex items-center gap-2">
                                            <FaBath className="text-[#0D7377] text-2xl" />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-2 border-[#0D7377] p-2 justify-center rounded-md ">
                                    <div className="flex flex-col">
                                        <p>Carport</p>
                                        <div className="flex items-center gap-2 ">
                                            <FaCar className="text-[#0D7377] text-2xl" />
                                            <p>2</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-2 border-[#0D7377] p-2 justify-center rounded-md">
                                    <div className="flex flex-col">
                                        <p>L.Tanah</p>
                                        <div className="flex items-center gap-2 w-max">
                                            <FaMaximize className="text-[#0D7377] text-2xl" />
                                            <p>81 m²</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-2 border-[#0D7377] p-2 justify-center rounded-md">
                                    <div className="flex flex-col justify-center">
                                        <p>L.Bagunan</p>
                                        <div className="flex items-center gap-2 w-max">
                                            <FaHouse className="text-[#0D7377] text-2xl" />
                                            <p>81 m²</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-2 border-[#0D7377] p-2 justify-center rounded-md">
                                    <div className="flex flex-col justify-center">
                                        <p>Listrik</p>
                                        <div className="flex items-center gap-2 w-max">
                                            <FaBoltLightning className="text-[#0D7377] text-2xl" />
                                            <p>2200w</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-2 border-[#0D7377] p-2 justify-center rounded-md">
                                    <div className="flex flex-col justify-center">
                                        <p>Tipe Properti</p>
                                        <div className="flex items-center gap-2 w-max">
                                            <FaHouseCircleCheck className="text-[#0D7377] text-2xl" />
                                            <p>Rumah</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col my-3 border-b-2">
                            <h1 className="lg:text-xl md:text-xl text-lg ">
                                Detail
                            </h1>
                            <ul className="px-5 flex lg:w-[70%] lg:h-52 lg:flex-wrap mb-5 flex-col justify-stretch">
                                <li className="list-disc">
                                    <p>Lisplank</p>
                                </li>
                                <li className="list-disc">
                                    <p>Cat Dulux</p>
                                </li>
                                <li className="list-disc">
                                    <p>Genteng Aspal</p>
                                </li>
                                <li className="list-disc">
                                    <p>Toren Air 1200L</p>
                                </li>
                                <li className="list-disc">
                                    <p>Kusen Alumunium</p>
                                </li>
                                <li className="list-disc">
                                    <p>Tembok Bata Merah</p>
                                </li>
                                <li className="list-disc">
                                    <p>Lantai 80 x 80</p>
                                </li>
                                <li className="list-disc">
                                    <p>Smart Lock Door</p>
                                </li>
                                <li className="list-disc">
                                    <p>Plavon PVC</p>
                                </li>
                                <li className="list-disc">
                                    <p>Electrical Panasonic</p>
                                </li>
                                <li className="list-disc">
                                    <p>Railing Steinles</p>
                                </li>
                                <li className="list-disc">
                                    <p>Sanitary American Standard</p>
                                </li>
                                <li className="list-disc">
                                    <p>Kitchen Beton</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="fasilitas" className="flex flex-col gap-4 ">
                        <h1 className="lg:text-xl md:text-xl text-lg mb-2">
                            Fasilitas
                        </h1>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaRoad className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                Jalan Utama Cikunir
                            </h1>
                        </div>

                        {/* Tambahkan logika state untuk menampilkan item lebih banyak atau lebih sedikit */}
                        {showMoreFasilitas ? (
                            <>
                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaVideo className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        3 Point CCTV
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaBuildingShield className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Sistem Keamanan 24 Jam
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaTreeCity className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Fasum Taman
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaWifi className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Free WIFI
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaMosque className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Masjid Al-Hidayah
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaDoorOpen className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Smart Door Lock
                                    </h1>
                                </div>
                            </>
                        ) : null}

                        <div
                            className="flex gap-3 items-center justify-center cursor-pointer"
                            onClick={toggleShowMoreFasilitas}
                        >
                            <h1 className="font-semibold flex gap-2 items-center">
                                {showMoreFasilitas
                                    ? "Muat Lebih Sedikit"
                                    : "Muat Lebih Banyak"}
                            </h1>
                        </div>
                    </div>

                    <div id="akses" className="flex flex-col gap-4 ">
                        <h1 className="lg:text-xl md:text-xl text-lg mb-2">
                            Akses
                        </h1>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaRoad className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                Jalan Utama Cikunir
                            </h1>
                        </div>

                        {/* Tambahkan logika state untuk menampilkan item lebih banyak atau lebih sedikit */}
                        {showMoreAkses ? (
                            <>
                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaVideo className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        3 Point CCTV
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaBuildingShield className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Sistem Keamanan 24 Jam
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaTreeCity className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Fasum Taman
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaWifi className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Free WIFI
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaMosque className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Masjid Al-Hidayah
                                    </h1>
                                </div>

                                <div className="flex gap-3 items-center border-b-2 justify-between">
                                    <h1 className="font-semibold flex gap-2 items-center">
                                        <FaDoorOpen className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                        Smart Door Lock
                                    </h1>
                                </div>
                            </>
                        ) : null}

                        <div
                            className="flex gap-3 items-center justify-center cursor-pointer"
                            onClick={toggleShowMoreAkses}
                        >
                            <h1 className="font-semibold flex gap-2 items-center">
                                {showMoreAkses
                                    ? "Muat Lebih Sedikit"
                                    : "Muat Lebih Banyak"}
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full lg:w-[30%] md:w-[20%] h-full gab-2 sticky md:top-[15%] lg:top-[15%] -bottom-[25%] z-10 ">
                    <div className=" lg:ml-5  shadow-lg ">
                        <div className="flex flex-col justify-center items-center h-auto w-full bg-white">
                            <div
                                className={`lg:pt-0 md:pt-0 flex flex-col items-center static`}
                            >
                                <h1 className="text-2xl font-bold ">
                                    MP Project
                                </h1>
                                <p>Official Developer</p>
                                <img
                                    className=" w-[40%] lg:w-[60%] md:w-[60%]"
                                    src="/assets/img/logo_mp.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center h-auto w-full bg-green-custom lg:static md:static sticky p-4 bottom-[0%] z-10">
                            <div className="w-full gap-2 flex justify-center items-center p-4 md:p-1 rounded-lg bg-light-green-400 ">
                                <FaWhatsapp className="md:text-2xl sm:text-xl text-white" />
                                <h1 className="text-white md:text-lg sm:text-xl font-semibold">
                                    WhatsApp
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section_Prieview;
