import Layout from "@/Layouts/Layout";
import axios from "axios";
import React, { useState, useRef } from "react";

const PemesananUnit = ({ title }) => {
    const [unitKavling, setUnitKavling] = useState("");
    const [sistemPengajuan, setSistemPengajuan] = useState("");
    const [namaLengkap, setNamaLengkap] = useState("");
    const [email, setEmail] = useState("");
    const [noWa, setNoWa] = useState("");
    const [alamat, setAlamat] = useState("");
    const [pesan, setPesan] = useState("");
    const [success, setSuccess] = useState(null);
    const [errors, setErrors] = useState(null);

    const formRef = useRef(null);

    const cleanValue = (value, pattern) => {
        const cleanedValue = value.replace(pattern, "");
        return cleanedValue;
    };

    const handleSubmit = (e) => {
        console.log("No WA :", noWa);
        e.preventDefault();
        const formData = new FormData();
        formData.append("no_unit", unitKavling);
        formData.append("sistem_pengajuan", sistemPengajuan);
        formData.append("nama_lengkap", namaLengkap);
        formData.append("email", email);
        formData.append("no_wa", noWa);
        formData.append("alamat", alamat);
        formData.append("pesan", pesan);

        axios
            .post("/pemesanan_unit", formData)
            .then((res) => {
                setSuccess(res.data.message);
                setUnitKavling("");
                setSistemPengajuan("");
                setNamaLengkap("");
                setEmail("");
                setNoWa("");
                setAlamat("");
                setPesan("");
                scrollToTop();
            })
            .catch((err) => {
                setErrors("Terjadi kesalahan, silahkan coba lagi nanti");
                scrollToTop();
            });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const dataUnitKavling = [
        {
            id: 1,
            name: "A1",
        },
        {
            id: 2,
            name: "A2",
        },
        {
            id: 3,
            name: "A3",
        },
        {
            id: 4,
            name: "A4",
        },
        {
            id: 5,
            name: "A5",
        },
        {
            id: 6,
            name: "A6",
        },
        {
            id: 7,
            name: "A7",
        },
        {
            id: 8,
            name: "A8",
        },
        {
            id: 9,
            name: "A9",
        },
        {
            id: 10,
            name: "A10",
        },
        {
            id: 11,
            name: "A11",
        },
        {
            id: 12,
            name: "A12",
        },
    ];

    return (
        <Layout title={title}>
            <div className="w-full h-full mt-20 lg:px-40 md:px-5 lg:px-20 lg:py-16 md:py-14 px-4 py-8">
                <div className="bg-green-custom bg-opacity-10 flex flex-col justify-center items-center w-full h-full px-4 rounded-xl shadow-lg">
                    <div className="flex flex-col w-full h-full md:items-center justify-center pt-10">
                        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-green-custom">
                            PEMESANAN <span className="text-black">UNIT</span>
                        </h1>
                        <div className="w-[10%] h-2bg-green-custom"></div>
                    </div>

                    {success && (
                        <div className="alert alert-success mt-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{success}</span>
                        </div>
                    )}

                    {errors && (
                        <div className="alert alert-error">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{errors}</span>
                        </div>
                    )}

                    <div className="w-[100%] flex flex-col md:flex-row py-4 md:py-10">
                        <div className="md:w-[50%] w-full hidden md:block">
                            <img
                                src="/assets/img/gallery/main_site_plan.jpg"
                                className="object-cover h-full"
                                alt=""
                            />
                        </div>
                        <div className="md:w-[50%] w-full">
                            <form
                                className="flex flex-col gap-4 md:px-8"
                                onSubmit={handleSubmit}
                                ref={formRef}
                            >
                                <div className="flex flex-wrap">
                                    <label
                                        htmlFor="unit_kavling"
                                        className="mb-2 w-full"
                                    >
                                        Unit/Kavling
                                    </label>
                                    <select
                                        required

                                        id="unit_kavling"
                                        className="border border-gray-300 rounded-md px-2 py-1 lg:w-[50%] md:w-[100%] w-full lg:mr-3"
                                        value={unitKavling}
                                        onChange={(e) => {
                                            setUnitKavling(e.target.value);
                                        }}
                                    >
                                        <option value="">
                                            Pilih Unit/Kavling
                                        </option>
                                        {dataUnitKavling.map((item, index) => (
                                            <option
                                                key={index}
                                                value={item.name}
                                            >
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>

                                    <button
                                        className="bg-green-custom text-white px-2 py-1 rounded-md lg:w-[30%] w-full mt-3 lg:mt-0"
                                        onClick={() =>
                                            window.my_modal_2.showModal()
                                        }
                                    >
                                        Lihat Foto Unit/Kavling
                                    </button>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="sistem_pengajuan">
                                        Sistem Pengajuan :
                                    </label>
                                    <select
                                        required

                                        id="sistem_pengajuan"
                                        className="border border-gray-300 rounded-md px-2 py-1 lg:w-[50%] md:w-[100%] w-full lg:mr-3"
                                        value={sistemPengajuan}
                                        onChange={(e) => {
                                            setSistemPengajuan(e.target.value);
                                        }}
                                    >
                                        <option value="">
                                            Pilih Sistem Pengajuan
                                        </option>
                                        <option value="kpr">KPR</option>
                                        <option value="cash">Cash</option>
                                        <option value="cash bertahap">
                                            Cash Bertahap
                                        </option>
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="nama_lengkap">
                                        Nama Lengkap:
                                    </label>
                                    <input
                                        required
                                        type="text"

                                        id="nama_lengkap"
                                        className="border border-gray-300 rounded-md px-2 py-1"
                                        value={namaLengkap}
                                        onChange={(e) => {
                                            setNamaLengkap(
                                                cleanValue(
                                                    e.target.value,
                                                    /[^a-zA-Z0-9\s]/g
                                                )
                                            );
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        required
                                        type="email"

                                        id="email"
                                        className="border border-gray-300 rounded-md px-2 py-1"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(
                                                cleanValue(
                                                    e.target.value,
                                                    /[^a-zA-Z0-9_.+\-@]/g
                                                )
                                            );
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="no_wa">No. WhatsApp:</label>
                                    <input
                                        required
                                        type="text"

                                        id="no_wa"
                                        className="border border-gray-300 rounded-md px-2 py-1"
                                        value={noWa}
                                        onChange={(e) => {
                                            setNoWa(
                                                cleanValue(
                                                    e.target.value,
                                                    /[^0-9+-]/g
                                                )
                                            );
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="alamat">Alamat:</label>
                                    <textarea
                                        required

                                        id="alamat"
                                        rows="4"
                                        className="border border-gray-300 rounded-md px-2 py-1"
                                        value={alamat}
                                        onChange={(e) => {
                                            setAlamat(
                                                cleanValue(
                                                    e.target.value,
                                                    /[^a-zA-Z0-9\s\-\/\.\,\(\)\#\&\"\'\:\;\@\!\_\+]/g
                                                )
                                            );
                                        }}
                                    ></textarea>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="pesan">
                                        Pesan (Opsional):
                                    </label>
                                    <textarea
                                        required

                                        id="pesan"
                                        rows="4"
                                        className="border border-gray-300 rounded-md px-2 py-1"
                                        value={pesan}
                                        onChange={(e) => {
                                            setPesan(
                                                cleanValue(
                                                    e.target.value,
                                                    /[^a-zA-Z0-9\s\-\/\.\,\(\)\#\&\"\'\:\;\@\!\_\+]/g
                                                )
                                            );
                                        }}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-green-custom text-white px-4 py-2 rounded-md"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_2" className="modal">
                <form
                    method="dialog"
                    className="modal-box w-11/12 max-w-5xl rounded-none"
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                    <h3 className="font-bold text-lg">Foto Unit/Kavling</h3>
                    <div>
                        <img
                            src="/assets/img/gallery/main_site_plan.jpg"
                            className="img-responsive"
                            alt=""
                        />
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </Layout>
    );
};

export default PemesananUnit;
