import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import Layout from "@/Layouts/Layout";

const SimulasiKPR = ({ title }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = () => {
        setIsLoading(true);

        // Setelah 3 detik, atur isLoading menjadi false
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    //insialisasi state untuk menampung data dari form
    const { data, setData, errors, post } = useForm({
        nilai_properti: "0",
        persentase_uang_muka: "",
        suku_bunga: "13",
        jangka_waktu: "",
    });
    const [cicilanBulanan, setCicilanBulanan] = useState("");
    const [totalPembayaran, setTotalPembayaran] = useState("");
    const [uangMuka, setUangMuka] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const cleanNilaiProperti = data.nilai_properti.replace(
                    /\D/g,
                    ""
                );
                const numberNilaiProperti = parseInt(cleanNilaiProperti, 10);

                const cleanpersentaseUangMuka =
                    data.persentase_uang_muka.replace(/\D/g, "");
                const numberpersentaseUangMuka = parseInt(
                    cleanpersentaseUangMuka,
                    10
                );

                const cleanSukuBunga = data.suku_bunga.replace(/\D/g, "");
                const numberSukuBunga = parseInt(cleanSukuBunga, 10);

                const cleanJangkaWaktu = data.jangka_waktu.replace(/\D/g, "");
                const numberJangkaWaktu = parseInt(cleanJangkaWaktu, 10);

                const response = await axios.post("/simulasi_kpr", {
                    nilai_properti: numberNilaiProperti,
                    persentase_uang_muka: numberpersentaseUangMuka,
                    suku_bunga: numberSukuBunga,
                    jangka_waktu: numberJangkaWaktu,
                });

                const { cicilan_bulanan, total_pembayaran, uang_muka } =
                    response.data;
                setCicilanBulanan(cicilan_bulanan);
                setTotalPembayaran(total_pembayaran);
                setUangMuka(uang_muka);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const validateForm = () => {
        let isValid = true;
        // Validasi nilai_properti
        if (data.nilai_properti === "") {
            setData("nilai_properti", "");
            errors.nilai_properti = "Nilai Properti harus diisi";
            isValid = false;
        } else if (parseInt(data.nilai_properti) === 0) {
            setData("nilai_properti", "");
            errors.nilai_properti = "Nilai Properti minimal 1";
            isValid = false;
        } else {
            errors.nilai_properti = "";
        }
        // Validasi persentase_uang_muka
        if (data.persentase_uang_muka === "") {
            setData("persentase_uang_muka", "");
            errors.persentase_uang_muka = "Persentase Uang Muka harus diisi";
            isValid = false;
        } else if (parseInt(data.persentase_uang_muka) < 10) {
            setData("persentase_uang_muka", "");
            errors.persentase_uang_muka =
                "Persentase Uaang Muka minimal 10 pesen";
            isValid = false;
        } else if (parseInt(data.persentase_uang_muka) > 100) {
            setData("persentase_uang_muka", "");
            errors.persentase_uang_muka =
                "Persentase Uang Muka maksimal 100 persen";
            isValid = false;
        } else {
            errors.persentase_uang_muka = "";
        }

        // Validasi suku_bunga
        if (data.suku_bunga === "") {
            setData("suku_bunga", "");
            errors.suku_bunga = "Suku Bunga per Tahun harus diisi";
            isValid = false;
        } else if (parseInt(data.suku_bunga) < 10) {
            setData("suku_bunga", "");
            errors.suku_bunga = "Suku Bunga per Tahun minimal 10 pesen";
            isValid = false;
        } else if (parseInt(data.suku_bunga) > 100) {
            setData("suku_bunga", "");
            errors.suku_bunga = "Suku Bunga per Tahun maksimal 100 persen";
            isValid = false;
        } else {
            errors.suku_bunga = "";
        }

        // Validasi jangka_waktu
        if (data.jangka_waktu === "") {
            setData("jangka_waktu", "");
            errors.jangka_waktu = "Jangka Waktu KPR harus diisi";
            isValid = false;
        } else if (parseInt(data.jangka_waktu) < 1) {
            setData("jangka_waktu", "");
            errors.jangka_waktu = "Jangka Waktu KPR minimal 1 Tahun";
            isValid = false;
        } else if (parseInt(data.jangka_waktu) > 20) {
            setData("jangka_waktu", "");
            errors.jangka_waktu = "Jangka Waktu KPR  maksimal 20 Tahun";
            isValid = false;
        } else {
            errors.jangka_waktu = "";
        }
        return isValid;
    };
    const formatNumber = (value) => {
        const cleanedValue = value.replace(/\D/g, "");
        const numberValue = parseInt(cleanedValue, 10);
        return numberValue.toLocaleString("id-ID");
    };

    return (
        <Layout title={title}>
            <div className="w-full h-auto my-32 flex justify-center flex-col items-center px-9">
                <div className="w-full flex justify-center mb-10">
                    <h1 className="font-sans font-bold text-3xl lg:text-5xl">
                        Simulasi <span className="text-[#0D7377]">KPR</span>
                    </h1>
                </div>
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col lg:w-[50%] md:w-[70%] w-full gap-4  md:px-0"
                >
                    <div className="flex flex-col w-full">
                        <label>Harga Properti:</label>

                        <div className="w-ful flex flex-row">
                            <h1 className="bg-green-custom p-2 text-white">
                                Rp.
                            </h1>
                            <input
                                className="w-full"
                                id="nilai_properti"
                                type="text"
                                name="nilai_properti"
                                value={formatNumber(data.nilai_properti)}
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const numericValue = parseInt(
                                        inputValue,
                                        10
                                    );
                                    if (numericValue >= 0) {
                                        setData("nilai_properti", inputValue);
                                    } else {
                                        setData("nilai_properti", "0");
                                    }
                                }}
                            />
                        </div>
                        {errors.nilai_properti && (
                            <span style={{ color: "red" }}>
                                {errors.nilai_properti}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label>Persentase Uang Muka (DP):</label>
                        <div className="flex">
                            <input
                                className="w-full"
                                id="persentase_uang_muka"
                                type="number"
                                name="persentase_uang_muka"
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const numericValue = parseInt(
                                        inputValue,
                                        10
                                    );
                                    if (numericValue >= 0) {
                                        setData(
                                            "persentase_uang_muka",
                                            inputValue
                                        );
                                    } else {
                                        setData("persentase_uang_muka", "");
                                    }
                                }}
                            />
                            <h1 className="bg-green-custom px-4 py-2 w-auto text-center text-white">
                                %
                            </h1>
                        </div>
                        {errors.persentase_uang_muka && (
                            <span style={{ color: "red" }}>
                                {errors.persentase_uang_muka}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col ">
                        <label>Suku Bunga per Tahun:</label>
                        <div className="flex">
                            <input
                                disabled
                                className="w-full bg-gray-200"
                                id="suku_bunga"
                                type="number"
                                name="suku_bunga"
                                value={data.suku_bunga}
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const numericValue = parseInt(
                                        inputValue,
                                        10
                                    );
                                    if (numericValue >= 0) {
                                        setData("suku_bunga", inputValue);
                                    } else {
                                        setData("suku_bunga", "");
                                    }
                                }}
                            />
                            <h1 className="bg-green-custom px-4 py-2 w-auto text-center text-white">
                                %
                            </h1>
                        </div>
                        <span className="text-yellow-700">
                            *Suku bunga tahunan sudah berdasarkan hasil riset
                            terbaru
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <label>
                            Jangka Waktu KPR : {data.jangka_waktu} Tahun
                        </label>

                        {/* <div className="flex">
                            <input
                                className="w-full"
                                id="jangka_waktu"
                                type="number"
                                name="jangka_waktu"
                                onChange={(e) =>
                                    setData("jangka_waktu", e.target.value)
                                }
                            />

                            <h1 className="bg-green-custom p-2 w-auto text-center text-white">
                                Tahun
                            </h1>
                        </div> */}

                        <div className="flex justify-between text-xs px-2">
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                        </div>
                        <input
                            type="range"
                            min={5}
                            max={20}
                            value={data.jangka_waktu}
                            className="range range-secondary"
                            step={0}
                            onChange={(e) =>
                                setData("jangka_waktu", e.target.value)
                            }
                        />
                        <div className="flex justify-between text-xs px-2">
                            <span>5 tahun</span>
                            <span>10 tahun</span>
                            <span>15 tahun</span>
                            <span>20 tahun</span>
                        </div>

                        {errors.jangka_waktu && (
                            <span style={{ color: "red" }}>
                                {errors.jangka_waktu}
                            </span>
                        )}
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center w-full">
                            <span className="loading loading-bars loading-sm"></span>
                        </div>
                    ) : (
                        <div>
                            {cicilanBulanan && totalPembayaran && (
                                <div className="overflow-x-auto w-full">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>
                                                    <h1>Hasil Simulasi</h1>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Uang Muka : </th>
                                                <th>{uangMuka}</th>
                                            </tr>
                                            <tr>
                                                <th>Cicilan Bulanan : </th>
                                                <th>{cicilanBulanan}</th>
                                            </tr>
                                            <tr>
                                                <th>Total Pembayaran : </th>
                                                <th>{totalPembayaran}</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div> // Konten utama setelah loading selesai
                    )}

                    <div className="w-full flex justify-center mt-3">
                        <button
                            className="w-32 p-2 bg-green-custom text-white rounded-md hover:bg-blue-gray-500"
                            type="submit"
                            onClick={handleButtonClick}
                        >
                            Hitung
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default SimulasiKPR;
