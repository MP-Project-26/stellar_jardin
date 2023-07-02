import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import Layout from "@/Layout/Layout";

const SimulasiKPR = ({title}) => {
    //insialisasi state untuk menampung data dari form
    const { data, setData, errors, post } = useForm({
        nilai_properti: "",
        persentase_uang_muka: "",
        suku_bunga: "",
        jangka_waktu: "",
    });
    const [cicilanBulanan, setCicilanBulanan] = useState("");
    const [totalPembayaran, setTotalPembayaran] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const cleanNilaiProperti = data.nilai_properti.replace(
                    /\D/g,
                    ""
                );
                const numberNilaiProperti = parseInt(cleanNilaiProperti, 10);
                const response = await axios.post("/simulasi_kpr", {
                    nilai_properti: numberNilaiProperti,
                    persentase_uang_muka: data.persentase_uang_muka,
                    suku_bunga: data.suku_bunga,
                    jangka_waktu: data.jangka_waktu,
                });

                const { cicilan_bulanan, total_pembayaran } = response.data;
                setCicilanBulanan(cicilan_bulanan);
                setTotalPembayaran(total_pembayaran);
            } catch (error) {
                console.log(error);
            }
        }
    };
    const validateForm = () => {
        let isValid = true;
        // Validasi nilai_properti
        if (data.nilai_properti === "" ) {
            setData("nilai_properti", "");
            errors.nilai_properti = "Nilai Properti harus diisi";
            isValid = false;
        } else if (parseInt(data.nilai_properti) === 0) {
            setData("nilai_properti", "");
            errors.nilai_properti = "Nilai Properti minimal 1";
            isValid = false;
        }
        // Validasi persentase_uang_muka
        if (data.persentase_uang_muka === "") {
            setData("persentase_uang_muka", "");
            errors.persentase_uang_muka = "Persentase Uang Muka harus diisi";
            isValid = false;
        } else if (parseInt(data.persentase_uang_muka) === 0) {
            setData("persentase_uang_muka", "");
            errors.persentase_uang_muka = "Persentase Uaaang Muka minimal 1";
            isValid = false;
        }else if (parseInt(data.persentase_uang_muka) > 100) {
            setData("persentase_uang_muka", "");
            errors.persentase_uang_muka = "Persentase Uang Muka maksimal 100";
            isValid = false;
        }

        // Validasi suku_bunga
        if (data.suku_bunga === "") {
            setData("suku_bunga", "");
            errors.suku_bunga = "Suku Bunga per Tahun harus diisi";
            isValid = false;
        } else if (parseInt(data.suku_bunga) === 0) {
            setData("suku_bunga", "");
            errors.suku_bunga = "Suku Bunga per Tahun minimal 1";
            isValid = false;
        }else if (parseInt(data.suku_bunga) > 100) {
            setData("suku_bunga", "");
            errors.suku_bunga = "Suku Bunga per Tahun maksimal 100";
            isValid = false;
        }

        // Validasi jangka_waktu
        if (data.jangka_waktu === "") {
            setData("jangka_waktu", "");
            errors.jangka_waktu = "Jangka Waktu KPR harus diisi";
            isValid = false;
        }else if (parseInt(data.jangka_waktu) === 0) {
            setData("jangka_waktu", "");
            errors.jangka_waktu = "Jangka Waktu KPR minimal 1 Tahun";
            isValid = false;
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
        <div className="flex flex-col w-full h-auto my-32">
            <h1>Simulasi KPR</h1>
            <form onSubmit={onSubmit}>
                <label>
                    Nilai Properti:
                    <input
                        type="text"
                        name="nilai_properti"
                        value={formatNumber(data.nilai_properti)}
                        onChange={(e) =>
                            setData("nilai_properti", e.target.value)
                        }
                    />
                    {errors.nilai_properti && (
                        <span style={{ color: "red" }}>
                            {errors.nilai_properti}
                        </span>
                    )}
                </label>

                <label>
                    Persentase Uang Muka:
                    <input
                        type="number"
                        name="persentase_uang_muka"
                        value={data.persentase_uang_muka}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const numericValue = parseInt(inputValue, 10);
                            if (numericValue >= 0) {
                                setData("persentase_uang_muka", inputValue);
                            }
                        }}
                    />
                     {errors.persentase_uang_muka && (
                        <span style={{ color: "red" }}>
                            {errors.persentase_uang_muka}
                        </span>
                    )}
                </label>

                <label>
                    Suku Bunga per Tahun:
                    <input
                        type="number"
                        name="suku_bunga"
                        value={data.suku_bunga}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const numericValue = parseInt(inputValue, 10);
                            if (numericValue >= 0) {
                                setData("suku_bunga", inputValue);
                            }
                        }}
                    />
                    {errors.suku_bunga && (
                        <span style={{ color: "red" }}>
                            {errors.suku_bunga}
                        </span>
                    )}
                </label>

                <label>
                    Jangka Waktu KPR (Tahun):
                    <input
                        type="number"
                        name="jangka_waktu"
                        value={data.jangka_waktu}
                        onChange={(e) =>
                            setData("jangka_waktu", e.target.value)
                        }
                    />
                    {errors.jangka_waktu && (
                        <span style={{ color: "red" }}>
                            {errors.jangka_waktu}
                        </span>
                    )}
                </label>

                <button type="submit">Simulasi</button>
            </form>

            {cicilanBulanan && totalPembayaran && (
                <div>
                    <h2>Hasil Simulasi:</h2>
                    <p>Cicilan Bulanan: {cicilanBulanan}</p>
                    <p>Total Pembayaran: {totalPembayaran}</p>
                </div>
            )}
        </div>
        </Layout>
    );
};

export default SimulasiKPR;
