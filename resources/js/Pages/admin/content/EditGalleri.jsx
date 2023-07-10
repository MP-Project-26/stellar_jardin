import React, { useState } from "react";
import LayoutAdmin from "@/Layouts/LayoutAdmin";

import axios from "axios";

const EditGalleri = ({ auth, title, gallery, category, paging }) => {
    if (!gallery) {
        return null;
    }


    const [selectedImage, setSelectedImage] = useState(null);
    const [imageTitle, setImageTitle] = useState(gallery.title);
    const [categoryId, setCategoryId] = useState(gallery.category_gallery_id);

    //message
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const alert = () => {
        if (successMessage) {
            return (
                <div className="bg-green-500 text-white rounded-md p-2 flex w-[40%] gap-4 items-center">
                    <p>{successMessage}</p>
                    <button
                        className="bg-green-custom py-1 px-3 hover:bg-gray-400 rounded-lg"
                        onClick={() => {
                            window.location.href = route("content", {
                                page: paging,
                            });
                        }}
                    >
                        Back
                    </button>
                </div>
            );
        } else {
            return (
                <div className="bg-red-500 text-white rounded-md p-2">
                    <p>{errorMessage}</p>
                </div>
            );
        }
    };

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("title", imageTitle);
            formData.append("category_gallery_id", categoryId);
            formData.append("image", selectedImage);

            const response = await axios.post(
                `/admin/content/update/${gallery.id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setSuccessMessage(response.data.message);
        } catch (error) {
            console.log(error);
            console.log("Gagal update data !!", error.message);
            if (error) {
                setErrorMessage("Gagal update data !! " + error.message);
            }
        }
    };

    

    return (
        <LayoutAdmin title={title} auth={auth}>
            <div className="p-10 w-full h-auto">
                <h1 className="text-2xl font-semibold">
                    {title + " " + gallery.title}
                </h1>
                <div className="my-10 flex flex-col">
                    <div className="w-full flex flex-col">
                        <img
                            className="w-[40%]"
                            src={`/assets/img/gallery/${gallery.image}`}
                            alt=""
                        />
                        <p className="w-[40%] text-center">{gallery.image}</p>
                    </div>
                    {successMessage || errorMessage ? (
                        <div className="w-full flex flex-col mt-3">
                            {alert()}
                        </div>
                    ) : null}
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3"
                    action=""
                >
                    <div className="flex w-full flex-col">
                        <label htmlFor="">Title Image :</label>
                        <input
                            type="text"
                            className="border-2 border-gray-400 rounded-md p-2"
                            value={imageTitle}
                            onChange={(e) => setImageTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex w-full flex-col">
                        <label htmlFor="">Ganti Foto: {gallery.image}:</label>
                        <input
                            type="file"
                            className="border-2 border-gray-400 rounded-md p-2"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="flex w-full flex-col">
                        <label htmlFor="">
                            Kategori = ({gallery.category.category_name})
                        </label>
                        <select
                            onChange={(e) => setCategoryId(e.target.value)}
                            className="border-2 border-gray-400 rounded-md p-2"
                            value={categoryId}
                        >
                            {category.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.category_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex w-full flex-col">
                        <button
                            className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-200"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </LayoutAdmin>
    );
};

export default EditGalleri;
