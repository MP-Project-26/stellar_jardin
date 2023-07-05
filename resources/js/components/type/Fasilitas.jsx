import React, { useEffect, useState } from "react";
import { FaRoad } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { FaBuildingShield } from "react-icons/fa6";
import { FaTreeCity } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { FaMosque } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { FaStore } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";
import { FaPlaneDeparture } from "react-icons/fa6";


const Fasilitas = ({idElement}) => {
    const [showMoreFasilitas, setShowMoreFasilitas] = useState(false);

    const toggleShowMoreFasilitas = () => {
        setShowMoreFasilitas(!showMoreFasilitas);
    };

    useEffect(() => {
        const sectionElement = document.getElementById(idElement);
        if (sectionElement) {
          sectionElement.scrollIntoView();
          setShowMoreFasilitas(true);
        }
      }, [idElement]);

    return (
        <div id="fasilitas" className="flex flex-col">
            <h1 className="font-extrabold lg:text-5xl pt-[2rem] md:text-3xl text-2xl">
                Fasilitas & Akses
            </h1>
            <div className={`flex flex-col gap-4 py-2 w-full lg:w-[70%]  md:w-[100%]  md:flex-wrap ${showMoreFasilitas ? ' md:h-[35rem]' : 'lg:h-20 md:h-20' }`}>
                <div className="flex gap-3 items-center border-b-2 justify-between">
                    <h1 className="font-semibold flex gap-2 items-center">
                        <FaRoad className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                        Jalan Utama Cikunir
                    </h1>
                </div>

                {/* Tambahkan logika state untuk menampilkan item lebih banyak atau lebih sedikit */}

                <div className="flex gap-3 items-center border-b-2 justify-between">
                    <h1 className="font-semibold flex gap-2 items-center">
                        <FaVideo className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                        3 Point CCTV
                    </h1>
                </div>
                {showMoreFasilitas ? (
                    <>
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

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaRoad className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                3 Akses Jalan Tol
                            </h1>
                        </div>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaHospital className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                Rumah Sakit
                            </h1>
                            <h1 className="font-semibold flex gap-2 items-center">
                            10 Menit
                            </h1>
                        </div>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaUtensils className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                Rumah Makan
                            </h1>
                            <h1 className="font-semibold flex gap-2 items-center">
                            10 Menit
                            </h1>
                        </div>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaBowlFood className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                Foodcourl
                            </h1>
                            <h1 className="font-semibold flex gap-2 items-center">
                            5 Menit
                            </h1>
                        </div>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaStore className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                Pasar Tradisional
                            </h1>
                            <h1 className="font-semibold flex gap-2 items-center">
                            10 Menit
                            </h1>
                        </div>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaSchool className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                SD, SMP, SMA
                            </h1>

                        </div>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaTrainSubway className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                Stasiun KAI Bekasi
                            </h1>
                            <h1 className="font-semibold flex gap-2 items-center">
                            15 Menit
                            </h1>
                        </div>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaTrainSubway className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                Stasiun KAI Pekayon
                            </h1>
                            <h1 className="font-semibold flex gap-2 items-center">
                            15 Menit
                            </h1>
                        </div>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaBus className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                Terminal Bekasi
                            </h1>
                            <h1 className="font-semibold flex gap-2 items-center">
                            15 Menit
                            </h1>
                        </div>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaPlaneDeparture className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                Bandara Halim
                            </h1>
                            <h1 className="font-semibold flex gap-2 items-center">
                            10 Menit
                            </h1>
                        </div>

                        <div className="flex gap-3 items-center border-b-2 justify-between">
                            <h1 className="font-semibold flex gap-2 items-center">
                                <FaBuildingShield className="lg:text-4xl md:text-3xl text-2xl text-green-custom" />
                                Polsek Jati Asih
                            </h1>
                            <h1 className="font-semibold flex gap-2 items-center">
                            3 Menit
                            </h1>
                        </div>

                    </>
                ) : null}
            </div>
            <div
                className="flex md:w-[70%] gap-3 items-center justify-center cursor-pointer"
                onClick={toggleShowMoreFasilitas}
            >
                <h1 className="font-semibold flex gap-2 items-center">
                    {showMoreFasilitas
                        ? "Muat Lebih Sedikit"
                        : "Muat Lebih Banyak"}
                </h1>
            </div>
        </div>
    );
};

export default Fasilitas;
