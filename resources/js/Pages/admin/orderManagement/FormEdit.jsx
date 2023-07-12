import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { set } from "react-hook-form";

const FormEdit = ({ data, dataUnitKavling }) => {
    const [dataOrder, setDataOrder] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (data !== undefined) {
            setDataOrder(data);
        }
    }, [data]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDataOrder((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const formEdit = useRef(null);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dataOrder) {
            const formData = new FormData();
            formData.append("nama_lengkap", dataOrder.nama_lengkap);
            formData.append("email", dataOrder.email);
            formData.append("no_wa", dataOrder.no_wa);
            formData.append("alamat", dataOrder.alamat);
            formData.append("pesan", dataOrder.pesan);
            formData.append("no_unit", dataOrder.no_unit);
            formData.append("sistem_pengajuan", dataOrder.sistem_pengajuan);

            axios
                .post(`/admin/update_pesanan/${dataOrder.id}`, formData)
                .then((response) => {
                    window.my_modal_2.close();
                    setMessage(response.data.message);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            alert("Data Kosong");
        }
    };

    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-11/12 max-w-5x flex flex-col gap-3 bg-white">
                    <button
                        onClick={() => window.my_modal_2.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>

                    <form
                    onSubmit={handleSubmit}
                    ref={formEdit}
                    method="dialog"

                >
                    <div className="w-full flex justify-center">
                        <h3 className="font-bold text-xl">
                            Edit Data Pemesanan
                        </h3>
                    </div>

                    <div className="flex flex-col">
                        <input
                            className="border-2 border-gray-400 rounded-md"
                            type="text"
                            id="id_pemesanan"
                            name="id_pemesanan"
                            value={dataOrder?.id || ""}
                            onChange={handleInputChange}
                            hidden
                            autoComplete="on"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="customer_name">Nama Customer :</label>
                        <input
                            className="border-2 border-gray-400 rounded-md"
                            type="text"
                            id="customer_name"
                            name="nama_lengkap"
                            value={dataOrder?.nama_lengkap || ""}
                            onChange={handleInputChange}
                            autoComplete="on"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email">Email :</label>
                        <input
                            className="border-2 border-gray-400 rounded-md"
                            type="email"
                            id="email"
                            name="email"
                            value={dataOrder?.email || ""}
                            onChange={handleInputChange}
                            autoComplete="on"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="no_wa">Nomor WhatsApp :</label>
                        <input
                            className="border-2 border-gray-400 rounded-md"
                            type="text"
                            id="no_wa"
                            name="no_wa"
                            value={dataOrder?.no_wa || ""}
                            onChange={handleInputChange}
                            autoComplete="on"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="alamat">Alamat :</label>
                        <textarea
                            className="border-2 border-gray-400 rounded-md"
                            type="text"
                            id="alamat"
                            name="alamat"
                            value={dataOrder?.alamat || ""}
                            onChange={handleInputChange}
                            autoComplete="on"
                        ></textarea>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="pesan">Pesan :</label>
                        <textarea
                            className="border-2 border-gray-400 rounded-md"
                            type="text"
                            id="pesan"
                            name="pesan"
                            value={dataOrder?.pesan || ""}
                            onChange={handleInputChange}
                            autoComplete="on"
                        ></textarea>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="no_unit" className="mb-2 w-full">
                            Unit/Kavling
                        </label>
                        <select
                            name="no_unit"
                            id="no_unit"
                            value={dataOrder?.no_unit || ""}
                            className="border border-gray-300 rounded-md px-2 py-1 lg:w-[50%] md:w-[100%] w-full lg:mr-3"
                            onChange={handleInputChange}
                            autoComplete="on"
                        >
                            <option value={dataOrder?.no_unit || ""}>
                                {dataOrder?.no_unit || ""}
                            </option>
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
                            id="sisitem_pengajuan"
                            className="border border-gray-300 rounded-md px-2 py-1 lg:w-[50%] md:w-[100%] w-full lg:mr-3"
                            value={dataOrder?.sistem_pengajuan || ""}
                            onChange={handleInputChange}
                            autoComplete="on"
                        >
                            <option value={dataOrder?.sistem_pengajuan}>
                                {dataOrder?.sistem_pengajuan}
                            </option>
                            <option value="kpr">Kpr</option>
                            <option value="cash">Cash</option>
                            <option value="cash bertahap">Cash Bertahap</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full justify-center items-center mt-4">
                        <button
                            className="bg-blue-600 w-[30%] py-2 rounded-2xl hover:bg-blue-500 text-white"
                            type="submit"
                        >
                            Simpan Perubahan
                        </button>
                    </div>

                    {/* Tambahkan input lainnya sesuai kebutuhan */}
                </form>
                </div>


                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default FormEdit;
