import { Link, usePage } from "@inertiajs/react";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { set } from "react-hook-form";
import FormEdit from "./FormEdit";


const TablePemesanan = ({ pemesananUnit }) => {
    const [detailPesanan, setDetailPesanan] = useState([]);
    const [dataEditPesanan, setEditPesanan] = useState([]);


    const formatDate = (date) => {
        return moment(date).format("DD-MMMM-YYYY HH:mm");
    };

    const [unitKavling, setUnitKavling] = useState("");
    const [sistemPengajuan, setSistemPengajuan] = useState("");
    const [namaLengkap, setNamaLengkap] = useState("");
    const [email, setEmail] = useState("");
    const [noWa, setNoWa] = useState("");
    const [alamat, setAlamat] = useState("");
    const [pesan, setPesan] = useState("");
    const [message, setMessage] = useState(null);


    const showDetailPemesanan = (e, item) => {
        e.preventDefault();
        setDetailPesanan(item);
        window.my_modal_4.show();
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


    useEffect(() => {
        if (message) {
          localStorage.setItem("message", message);
          window.location.reload();
        }
      }, [message]);

    useEffect(() => {
        const storedMessage = localStorage.getItem("message");
        if (storedMessage) {
          alert(storedMessage);
          localStorage.removeItem("message");
        }
      }, []);

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
            .post("/admin/tambah_pesanan", formData)
            .then((res) => {
                setUnitKavling("");
                setSistemPengajuan("");
                setNamaLengkap("");
                setEmail("");
                setNoWa("");
                setAlamat("");
                setPesan("");
                window.my_modal_3.close();
                setMessage(res.data.message);
                window.location.reload();
            })
            .catch((err) => {
                setMessage("Terjadi kesalahan, silahkan coba lagi nanti");
                scrollToTop();
            });
    };

    const deletePesanan = (e, id) => {
        e.preventDefault();
        axios
            .post(`/admin/delete_pesanan/${id}`)
            .then((res) => {
                setMessage(res.data.message);
                window.location.reload();
            })
            .catch((err) => {
                setMessage("Terjadi kesalahan, silahkan coba lagi nanti");
                scrollToTop();
            });
    };

    return (
        <div className="w-full h-auto mb-20">
        <FormEdit data={dataEditPesanan}  dataUnitKavling={dataUnitKavling}/>

            <div className="bg-white text-xl font-bold lg:text-4xl md:text-3xl w-full sticky z-30 top-0">
                <h1>Table Pemesanan Unit</h1>
                <button
                    className="text-xl bg-green-custom text-white px-5 py-2 rounded-md mb-3 hover:bg-gray-400"
                    onClick={() => window.my_modal_3.showModal()}
                >
                    Tambah Pesanan
                </button>
            </div>

            <div className="w-[75rem] overflow-x-auto py-3">
                <table className="table w-full">
                    {/* head */}
                    <thead className="">
                        <tr className="bg-green-custom text-center">
                            <th className="text-xl font-extrabold text-white border">
                                No
                            </th>

                            <th className="text-xl font-extrabold text-white border">
                                ID Pemesanan
                            </th>

                            <th className="text-xl font-extrabold text-white border">
                                Nama Lengkap
                            </th>

                            <th className="text-xl font-extrabold text-white border">
                                Alamat Email
                            </th>

                            <th className="text-xl font-extrabold text-white border">
                                No Wa
                            </th>
                            <th className="text-xl font-extrabold text-white border">
                                Tanggal penambahan
                            </th>
                            <th className="text-xl font-extrabold text-white border">
                                Terakhir di Update
                            </th>
                            <th className="text-xl font-extrabold text-white border">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {pemesananUnit.map((item, index) => (
                            <tr className="text-center" key={index}>
                                <th className="border">{index + 1}</th>
                                <td className="border">
                                    {item.id + "_" + item.no_unit}
                                </td>
                                <td className="border">{item.nama_lengkap}</td>
                                <td className="border">{item.email}</td>
                                <td className="border">{item.no_wa}</td>
                                <td className="border">
                                    {formatDate(item.created_at)}
                                </td>
                                <td className="border">
                                    {formatDate(item.updated_at)}
                                </td>
                                <td className="flex gap-2">
                                    <button
                                        className="bg-blue-300 text-white py-1 px-2 rounded-md hover:bg-blue-200"
                                        onClick={(e) =>
                                            showDetailPemesanan(e, item)
                                        }
                                    >
                                        Detail
                                    </button>

                                    <button
                                       onClick={() => {
                                            setEditPesanan(item);
                                            window.my_modal_2.show();
                                        }
                                       }
                                        className="btn btn-warning rounded-md hover:bg-yellow-300 text-white"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn bg-red-500 rounded-md hover:bg-red-300 text-white"
                                        onClick={(e) => {
                                            deletePesanan(e, item.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {detailPesanan && (
                <dialog id="my_modal_4" className="modal">
                    <form
                        method="dialog"
                        className="modal-box w-6/12 max-w-5xl"
                    >
                        <h1 className="font-bold text-xl ">
                            Detail Pesanan{" "}
                            {detailPesanan.id + "_" + detailPesanan.no_unit}
                        </h1>
                        <p className="border-b border-gray-400 w-[50%]">
                            Id Pesanan : {detailPesanan.id}
                        </p>
                        <p className="border-b border-gray-400 w-[50%]">
                            Unit yang dipesan : {detailPesanan.no_unit}
                        </p>
                        <p className="border-b border-gray-400 w-[50%]">
                            Sistem Pengajuan : {detailPesanan.sistem_pengajuan}
                        </p>
                        <p className="border-b border-gray-400 w-[50%]">
                            Nama Lengkap : {detailPesanan.nama_lengkap}
                        </p>
                        <p className="border-b border-gray-400 w-[50%]">
                            Email : {detailPesanan.email}
                        </p>
                        <p className="border-b border-gray-400 w-[50%]">
                            No WhatsApp : {detailPesanan.no_wa}
                        </p>
                        <div className="flex flex-col w-full">
                            <label htmlFor="alamat">Alamat :</label>
                            <textarea
                                className="w-[50%] h-auto"
                                value={detailPesanan.alamat}
                                disabled
                                id="alamat"
                                autoComplete="on"
                            ></textarea>
                        </div>
                        <div className="modal-action">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>
            )}

            <dialog id="my_modal_3" className="modal">
                <div className="w-full rounded-none h-full bg-white flex flex-col justify-center items-center modal-box">
                    <div className="w-full flex justify-end">
                        <button
                            className="btn btn-sm btn-circle btn-ghost  right-2 top-2"
                            onClick={() => window.my_modal_3.close()}
                        >
                            ✕
                        </button>
                    </div>
                    <form
                        className=" flex flex-col gap-4 w-full"
                        onSubmit={handleSubmit}
                        ref={formRef}
                        method="dialog"
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
                                name="unit_kavling"
                                id="unit_kavling"
                                className="border border-gray-300 rounded-md px-2 py-1 lg:w-[50%] md:w-[100%] w-full lg:mr-3"
                                value={unitKavling}
                                autoComplete="on"
                                onChange={(e) => {
                                    setUnitKavling(e.target.value);
                                }}
                            >
                                <option value="">Pilih Unit/Kavling</option>
                                {dataUnitKavling.map((item, index) => (
                                    <option key={index} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="sistem_pengajuan">
                                Sistem Pengajuan :
                            </label>
                            <select
                                required
                                name="sistem_pengajuan"
                                id="sistem_pengajuan"
                                className="border border-gray-300 rounded-md px-2 py-1 lg:w-[50%] md:w-[100%] w-full lg:mr-3"
                                value={sistemPengajuan}
                                autoComplete="on"
                                onChange={(e) => {
                                    setSistemPengajuan(e.target.value);
                                }}
                            >
                                <option value="">Pilih Sistem Pengajuan</option>
                                <option value="kpr">KPR</option>
                                <option value="cash">Cash</option>
                                <option value="cash bertahap">
                                    Cash Bertahap
                                </option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="nama_lengkap">Nama Lengkap:</label>
                            <input
                                required
                                type="text"
                                name="nama_lengkap"
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
                                name="email"
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
                                name="no_wa"
                                id="no_wa"
                                className="border border-gray-300 rounded-md px-2 py-1"
                                value={noWa}
                                onChange={(e) => {
                                    setNoWa(
                                        cleanValue(e.target.value, /[^0-9+-]/g)
                                    );
                                }}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="alamat">Alamat:</label>
                            <textarea
                                required
                                name="alamat"
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
                            <label htmlFor="pesan">Pesan (Opsional):</label>
                            <textarea
                                required
                                name="pesan"
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
            </dialog>

            {/* dialog edit */}




        </div>
    );
};

export default TablePemesanan;
