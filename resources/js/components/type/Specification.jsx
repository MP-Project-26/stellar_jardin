import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { FaMaximize } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
import { FaHouseCircleCheck } from "react-icons/fa6";


export const Specification = () => {
    return (
        <div id="spesifikasi" className="flex flex-col border-b-2 ">
            <h1 className="font-extrabold lg:text-5xl py-[2rem] md:text-3xl text-2xl">
                Spesifikasi
            </h1>
            <div>
                <div className="flex flex-row gap-2 overflow-x-auto w-auto ">
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
                            <div className="flex items-center gap-2 w-20">
                                <FaHouseCircleCheck className="text-[#0D7377] text-2xl" />
                                <p>Rumah</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-3">
                    <h1 className="lg:text-xl md:text-xl text-lg ">Detail</h1>
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
        </div>
    );
};
