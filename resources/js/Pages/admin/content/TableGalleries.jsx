import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import axios from "axios";
import moment from "moment";

const TableGalleries = ({ galleries }) => {
    const [galleri, setGalleri] = useState(galleries);
    const previous = galleri.links[0].url;
    const next = galleri.links[galleri.links.length - 1].url;
    const current = galleri.current_page;
    const lastPage = galleri.last_page;
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSelectImage = (e, value) => {
        e.preventDefault();
        window.my_modal_1.showModal();
        setSelectedImage(value);
    };

    const formatDate = (date) => {
        return moment(date).format("DD-MMMM-YYYY HH:mm");
    };

    // variable tambah data
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [categoryGalleryId, setCategoryGalleryId] = useState("");
    const [messageSucceeded, setMessageSuccess] = useState("");
    const [messageFailed, setMessageFailed] = useState("");
    // end variable tambah data

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        axios
            .get(`/admin/content/search?query=${searchTerm}`)
            .then((response) => {
                const searchResults = response.data;
                setGalleri(searchResults.galleries); // Memperbarui daftar galeri dengan hasil pencarian
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);
        formData.append("category_gallery_id", categoryGalleryId);
        axios
            .post("/admin/content/store", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                setTitle("");
                setImage("");
                setCategoryGalleryId("");
                window.my_modal_3.close();

                setMessageSuccess(response.data.message);
            })
            .catch((error) => {
                console.error(error);
                setMessageFailed("Gagal Menambahkan Foto ", error);
            });
    };

    // Fungsi untuk menghasilkan array halaman yang akan ditampilkan
    const generatePageNumbers = () => {
        const pageNumbers = [];
        const totalPages = lastPage;

        // Jumlah halaman yang ingin ditampilkan sebelum dan sesudah halaman saat ini
        const totalDisplayedPages = 3;

        let startPage = Math.max(1, current - totalDisplayedPages);
        let endPage = Math.min(totalPages, current + totalDisplayedPages);

        if (startPage > 1) {
            // Menambahkan tanda titik jika halaman awal tidak berada di halaman pertama
            pageNumbers.push("...");
        }

        for (let page = startPage; page <= endPage; page++) {
            pageNumbers.push(page);
        }

        if (endPage < totalPages) {
            // Menambahkan tanda titik jika halaman akhir tidak berada di halaman terakhir
            pageNumbers.push("...");
        }

        return pageNumbers;
    };


    const handleDelete = (id) => {
        const shouldDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");

        if (shouldDelete) {
          // Lakukan penghapusan data dengan menggunakan axios atau metode yang sesuai
          axios
            .delete(`/admin/content/delete/${id}`)
            .then((response) => {
              // Tampilkan pesan sukses atau lakukan tindakan lain setelah penghapusan berhasil
              console.log(response.data);
                setMessageSuccess(response.data.message);
            })
            .catch((error) => {
              // Tampilkan pesan error atau lakukan tindakan lain jika terjadi kesalahan
            });
        }
      };

    return (
        <div className="w-full h-auto overflow-y-auto mb-20">
            <div className="bg-white text-xl font-bold lg:text-4xl md:text-3xl w-full sticky z-30 top-0">
                <h1>Table Galleri</h1>
                <button
                    className="text-xl bg-green-custom text-white px-5 py-2 rounded-md mb-3 hover:bg-gray-400"
                    onClick={() => window.my_modal_3.showModal()}
                >
                    Tambah Galleri
                </button>
                <form onSubmit={handleSearch} className="mb-4">
                    <input
                        type="text"
                        placeholder="Cari Bedasarkan Title / Category"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none w-[40%]"
                    />
                    <button
                        type="submit"
                        className="bg-gray-300 text-xl text-gray-700 rounded px-4 py-2 ml-2 hover:bg-gray-400 focus:outline-none"
                    >
                        Search
                    </button>
                </form>
                {messageSucceeded && (
                    <div className="alert alert-success w-[50%] mb-3">
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
                        <span className="text-xl">{messageSucceeded}</span>
                        <button className="text-xl text-blue-600 font-medium  border-b-2 border-blue-600"
                            onClick={() => window.location.reload()}
                        >Muat Ulang Halaman</button>
                    </div>
                )}

                {messageFailed && (
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
                        <span>{messageFailed}</span>
                    </div>
                )}
            </div>

            <table className="table">
                {/* head */}
                <thead className="sticky top-[9rem] z-20">
                    <tr className="bg-green-custom text-center">
                        <th className="text-xl font-extrabold text-white border">
                            No
                        </th>
                        <th className="text-xl font-extrabold text-white border">
                            Title
                        </th>
                        <th className="text-xl font-extrabold text-white border">
                            Foto
                        </th>
                        <th className="text-xl font-extrabold text-white border">
                            Kategori
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
                    {galleri.data.map((item, index) => (
                        <tr className="text-center" key={index}>
                            <th className="border">
                                {(current - 1) * galleries.per_page + index + 1}
                            </th>
                            <td className="border">{item.title}</td>
                            <td
                                className="md:w-[20%] w-[80%] h-auto border cursor-pointer"
                                onClick={(e) =>
                                    handleSelectImage(e, item.image)
                                }
                            >
                                <img
                                    className="md:w-full w-full "
                                    src={`/assets/img/gallery/${item.image}`}
                                    alt=""
                                />
                            </td>
                            <td className="border">
                                {item.category.category_name}
                            </td>
                            <td className="border">
                                {formatDate(item.created_at)}
                            </td>
                            <td className="border">
                                {formatDate(item.updated_at)}
                            </td>
                            <td className="border">
                                <div className="flex gap-3 justify-center">
                                    <Link
                                        href={`/admin/content/edit/${item.id}/`+current}
                                        className="p-3 bg-yellow-400 hover:bg-yellow-200"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="p-3 bg-red-400 hover:bg-red-200"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="Join w-full flex justify-center sticky bottom-0 bg-white py-5 shadow-xl">
                {previous ? (
                    <Link
                        href={previous}
                        className="join-item btn rounded-none "
                    >
                        «
                    </Link>
                ) : (
                    <button disabled className="join-item btn rounded-none">
                        «
                    </button>
                )}

                {generatePageNumbers().map((page, index) => (
                    <React.Fragment key={index}>
                        {page === "..." ? (
                            <span className="join-item btn rounded-none">
                                ...
                            </span>
                        ) : (
                            <Link
                                href={
                                    page === 1
                                        ? "/admin/content"
                                        : `/admin/content?page=${page}`
                                }
                                className={`join-item btn  rounded-none ${
                                    current === page
                                        ? "btn-active bg-green-custom"
                                        : ""
                                }`}
                            >
                                {page}
                            </Link>
                        )}
                    </React.Fragment>
                ))}

                {next ? (
                    <Link href={next} className="join-item btn rounded-none">
                        »
                    </Link>
                ) : (
                    <button disabled className="join-item btn rounded-none">
                        »
                    </button>
                )}
            </div>

            <dialog id="my_modal_3" className="modal justify-center ">
                <div className="w-auto ">
                    <div className="w-full bg-white flex justify-end">
                        <button
                            className="btn rounded-none btn-sm hover:none bg-white border-none right-2 top-2"
                            onClick={() => window.my_modal_3.close()}
                        >
                            ✕
                        </button>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        method="dialog"
                        className="modal-box bg-white rounded-none flex flex-col gap-6 p-5 w-full md:w-[40rem]"
                    >
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Judul Gambar</span>
                            </label>
                            <input
                                required
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full "
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="image">Upload Foto</label>
                            <input
                                required
                                id="image"
                                name="image"
                                type="file"
                                className="file-input w-full border border-gray-300"
                                onChange={handleImageChange}
                            />
                        </div>

                        <div className="flex flex-col">
                            <select
                                required
                                name="category_gallery_id"
                                className="select select-bordered w-full "
                                value={categoryGalleryId}
                                onChange={(e) =>
                                    setCategoryGalleryId(e.target.value)
                                }
                            >
                                <option value="">Pilih Kategori</option>
                                <option value="1">Exterior</option>
                                <option value="2">Interior</option>
                                <option value="3">Potongan</option>
                                <option value="4">Denah</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Simpan
                        </button>
                    </form>
                </div>
            </dialog>

            <dialog id="my_modal_1" className="modal w-full">
                <form
                    method="dialog"
                    className="modal-box w-11/12 max-w-5xl rounded-none"
                >
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <div className="w-full">
                        {selectedImage && (
                            <img
                            className="w-full h-full"
                            src={`/assets/img/gallery/${selectedImage}`}
                            alt=""
                        />
                        )}

                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default TableGalleries;
