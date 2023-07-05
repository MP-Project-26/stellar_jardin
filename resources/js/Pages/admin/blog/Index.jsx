import InputLabel from "@/Components/login/InputLabel";
import PrimaryButton from "@/Components/login/PrimaryButton";
import TextInput from "@/Components/login/TextInput";
import NewModalBlog from "@/Components/utils/modal_admin/newModalBlog";
import LayoutAdmin from "@/Layouts/LayoutAdmin";
import { useForm } from "@inertiajs/react";
import { Textarea } from "@material-tailwind/react";
import axios from "axios";
import moment from "moment/moment";
import { useState } from "react";
import { useEffect } from "react";

export default function Index({ auth, dataBlog }) {
    const [data, setData] = useState(dataBlog);
    const [modalData, setModalData] = useState([]);
    useEffect(() => {
        setData(dataBlog);
    }, [dataBlog]);
    return (
        <LayoutAdmin title="Dashboard" auth={auth}>
            <NewModalBlog />
            <EditModalBlog dataBlog={modalData} />
            <div className="w-full pt-10 justify-center items-center">
                <h1 className="font-sans font-bold text-black text-2xl md:text-3xl">
                    BLOG MANAGEMENT
                </h1>
                <div className="w-full flex flex-row justify-end">
                    <button
                        onClick={() => window.my_modal_1.show()}
                        className="p-2 bg-green-custom rounded-xl text-xl font-extrabold text-white"
                    >
                        New User
                    </button>
                </div>
                <div className="overflow-x-auto mt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-green-custom">
                                <th className="text-xl font-extrabold text-white">
                                    No
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Author
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Title
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Image
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Tags
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Content
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Views
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Comments
                                </th>
                                <th className="text-xl font-extrabold text-white w-[7rem]">
                                    date
                                </th>
                                <th className="text-xl font-extrabold text-white">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border">
                            {data.map((res, i) => (
                                <tr key={i}>
                                    <th className=" border-r">{i + 1}</th>
                                    <td className=" border-r">{res?.author}</td>
                                    <td className=" border-r">{res?.title}</td>
                                    <td className=" border-r">{res?.image}</td>
                                    <td className=" border-r">
                                        {res?.tags?.length}
                                    </td>
                                    <td className=" border-r paragraph-table-Blog h-[8rem] mb-3 text-justify">
                                        {res?.content}
                                    </td>
                                    <td className=" border-r">{res?.views}</td>
                                    <td className=" border-r">
                                        {res?.comments?.length}
                                    </td>
                                    <td className=" border-r">
                                        {moment(res?.created_at).format(
                                            "DD MMMM YYYY"
                                        )}
                                    </td>
                                    <td>
                                        <div className="flex flex-row gap-2 ">
                                            <button
                                                onClick={() => {
                                                    setModalData(res);
                                                    window.my_modal_2.show();
                                                }}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Edit
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutAdmin>
    );
}

const EditModalBlog = ({ dataBlog }) => {
    const dataSearch = ["Home", "Forniture", "Office", "Kitchen"];
    const [searchTags, setSearchTags] = useState("");
    const [dataBlg, setDataBlg] = useState([]);
    const [dataTags, setDataTags] = useState([]);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        author: "",
        image: "",
        content: "",
        tags: [],
        views: "",
        link: "",
    });
    useEffect(() => {
        setDataBlg(dataBlog);
        setDataTags(dataBlog.tags);
    }, [dataBlog]);

    const removeTags = (indexToRemove) => {
        setDataTags([
            ...dataTags.filter((_, index) => index !== indexToRemove),
        ]);
    };

    useEffect(() => {
        setData("tags", dataTags);
    }, [dataTags]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const submit = (e) => {
        e.preventDefault();
        console.log("submit");
    };
    return (
        <dialog id="my_modal_2" className="modal backdrop-blur-sm border-0 ">
            <div className="lg:w-[60rem] lg:h-[43rem] h-[20rem] relative rounded-xl bg-transparant">
                <button
                    className=" btn btn-sm btn-circle btn-ghost absolute right-5 top-5 bg-white shadow-xl border border-gray-500 z-[100] select-none"
                    onClick={() => window.my_modal_2.close()}
                >
                    ✕
                </button>
                <div className="lg:w-[60rem] lg:h-[40rem]  h-[20rem]  p-[3rem] bg">
                    <form
                        onSubmit={submit}
                        className="bg-white flex flex-col gap-[1.2rem] p-10 h-[100%] overflow-y-auto scrollModal_type rounded-2xl shadow-xl"
                    >
                        <InputLabel htmlFor="title" value="Title" />
                        <TextInput
                            id="title"
                            name="title"
                            type="text"
                            value={data.title || dataBlg.title}
                            onChange={(e) => setData("title", e.target.value)}
                            placeholder="Title"
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <InputLabel htmlFor="author" value="author" />
                        <TextInput
                            id="author"
                            name="author"
                            type="text"
                            value={data.author || dataBlg.author}
                            onChange={(e) => setData("author", e.target.value)}
                            placeholder="author"
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <InputLabel htmlFor="image" value="image" />
                        <TextInput
                            id="image"
                            name="image"
                            type="text"
                            value={data.image || dataBlg.image}
                            onChange={(e) => setData("image", e.target.value)}
                            placeholder="image"
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <InputLabel htmlFor="content" value="content" />
                        <Textarea
                            id="content"
                            name="content"
                            type="text"
                            value={data.content || dataBlg.content}
                            onChange={(e) => setData("content", e.target.value)}
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
                                                setDataTags([...dataTags, tag]);
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
    );
};
