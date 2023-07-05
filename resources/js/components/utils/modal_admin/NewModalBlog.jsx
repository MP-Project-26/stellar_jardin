import React from "react";
import InputLabel from "@/Components/login/InputLabel";
import PrimaryButton from "@/Components/login/PrimaryButton";
import TextInput from "@/Components/login/TextInput";
import { useForm } from "@inertiajs/react";
import { Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRef } from "react";

export default function newModalBlog() {
    const dataSearch = ["Home", "Forniture", "Office", "Kitchen"];
    const [searchTags, setSearchTags] = useState("");
    const [dataTags, setDataTags] = useState([]);
    const [images, setImages] = useState("");
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        author: "",
        image: "",
        content: "",
        tags: [],
    });

    const removeTags = (indexToRemove) => {
        setDataTags([
            ...dataTags.filter((_, index) => index !== indexToRemove),
        ]);
    };

    useEffect(() => {
        setData("tags", dataTags);
    }, [dataTags]);

    const addImageToPost = (e) => {
        const render = new FileReader();
        setData("image", e.target.files[0]);
        if (e.target.files[0]) {
            render.readAsDataURL(e.target.files[0]);
        }
        render.onload = (readerEvent) => {
            setImages(readerEvent.target.result);
        };
    };

    const submit = async (e) => {
        e.preventDefault();

        // try {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("author", data.author);
        formData.append("image", data.image);
        formData.append("content", data.content);
        formData.append("tags", data.tags);

        const response = await axios.post("/createBlog", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        if (response.status) {
            window.my_modal_1.close();
            window.location.reload();
        }
    };
    return (
        <>
            {processing && (
                <div className="fixed z-[100] inset-0 overflow-y-auto">
                    <div className="toast toast-center toast-top">
                        <div className="alert alert-success mt-[5rem]">
                            <span className="text-2xl text-white font-extrabold">
                                Berhasil membuat akun
                            </span>
                        </div>
                    </div>
                </div>
            )}
            <dialog
                id="my_modal_1"
                className="modal backdrop-blur-sm border-0 "
            >
                <div className="lg:w-[60rem] lg:h-[43rem] h-[20rem] relative rounded-xl bg-transparant">
                    <button
                        className=" btn btn-sm btn-circle btn-ghost absolute right-5 top-5 bg-white shadow-xl border border-gray-500 z-[100] select-none"
                        onClick={() => window.my_modal_1.close()}
                    >
                        ✕
                    </button>
                    <div className="lg:w-[60rem] lg:h-[40rem]  h-[20rem]  p-[3rem] bg ">
                        <form
                            onSubmit={submit}
                            className="bg-white flex flex-col gap-[1.2rem] p-10 h-[100%]  overflow-y-auto scrollModal_type rounded-2xl shadow-xl"
                        >
                            <InputLabel htmlFor="title" value="Title" />
                            <TextInput
                                id="title"
                                name="title"
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                placeholder="Title"
                                className="border border-gray-300 rounded-md p-2"
                            />
                            <InputLabel htmlFor="author" value="author" />
                            <TextInput
                                id="author"
                                name="author"
                                type="text"
                                value={data.author}
                                onChange={(e) =>
                                    setData("author", e.target.value)
                                }
                                placeholder="author"
                                className="border border-gray-300 rounded-md p-2"
                            />
                            <InputLabel htmlFor="image" value="image" />
                            <img
                                src={
                                    images ||
                                    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                                }
                                alt=""
                                className="w-[7rem] h-[7rem]"
                            />
                            <input
                                id="image"
                                name="image"
                                type="file"
                                onChange={addImageToPost}
                                placeholder="image"
                                className=" py-[2rem]"
                            />
                            <InputLabel htmlFor="content" value="content" />
                            <Textarea
                                id="content"
                                name="content"
                                type="text"
                                value={data.content}
                                onChange={(e) =>
                                    setData("content", e.target.value)
                                }
                                placeholder="content"
                                className="border  p-2 border-gray-300 scrollModal_type focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            />
                            <InputLabel htmlFor="tags" value="tags" />
                            <TextInput
                                id="tags"
                                name="tags"
                                type="text"
                                value={searchTags}
                                onChange={(e) => setSearchTags(e.target.value)}
                                placeholder="tags"
                                className="border border-gray-300 rounded-md p-2"
                            />{" "}
                            <ul className="flex flex-col gap-3">
                                {dataSearch
                                    .filter((tag) => {
                                        if (searchTags === "") {
                                            return "";
                                        } else
                                            return tag.match(
                                                new RegExp(searchTags, "i")
                                            );
                                    })
                                    .map((tag) => {
                                        return (
                                            <li
                                                className="bg-gray-300 p-2 rounded-md cursor-pointer"
                                                onClick={() => {
                                                    setDataTags([
                                                        ...dataTags,
                                                        tag,
                                                    ]);
                                                    setSearchTags("");
                                                }}
                                                key={tag}
                                            >
                                                {tag}{" "}
                                            </li>
                                        );
                                    })}
                            </ul>
                            <div className="flex w-full flex-row gap-2 cursor-pointer ">
                                {dataTags?.map((item, i) => {
                                    return (
                                        <div
                                            className="relative px-3 py-2  rounded-md"
                                            key={i}
                                        >
                                            <span
                                                onClick={() => removeTags(i)}
                                                className=" absolute right-0 -top-2 bg-gray-300 w-5 h-6 rounded-full text-center text-black"
                                            >
                                                x
                                            </span>
                                            <span className=" px-3 py-2 bg-green-custom text-white rounded-xl ">
                                                {item}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton
                                    className="ml-4"
                                    disabled={processing}
                                >
                                    Tambah
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
