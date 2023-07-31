import EditModalBlog from "@/Components/utils/modal_admin_blog/EditModalBlog";
import NewModalBlog from "@/Components/utils/modal_admin_blog/newModalBlog";
import LayoutAdmin from "@/Layouts/LayoutAdmin";
import axios from "axios";
import moment from "moment/moment";
import { useState } from "react";
import { useEffect } from "react";
import parse from "html-react-parser";

export default function Index({ auth, dataBlog }) {
    const [data, setData] = useState(dataBlog);
    const [modalDataEdit, setModalDataEdit] = useState([]);
    const [modalDataDelete, setModalDataDelete] = useState([]);
    useEffect(() => {
        setData(dataBlog);
    }, [dataBlog]);

    return (
        <LayoutAdmin title="Dashboard" auth={auth}>
            <NewModalBlog />
            <EditModalBlog dataBlog={modalDataEdit} />
            <DeleteModalBlog data={modalDataDelete} />
            <div className="w-full pt-10 justify-center items-center">
                <h1 className="font-sans font-bold text-black text-2xl md:text-3xl">
                    BLOG MANAGEMENT
                </h1>
                <div className="w-full flex flex-row justify-end">
                    <button
                        onClick={() => window.my_modal_1.show()}
                        className="p-2 bg-green-custom rounded-xl text-xl font-extrabold text-white"
                    >
                        New Blog
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
                                    <td className=" border-r w-[7rem]">
                                        {res?.title}
                                    </td>
                                    <td className=" border-r w-[16rem]">
                                        <img
                                            src={res?.image}
                                            className="w-[16rem]"
                                            alt=""
                                        />
                                    </td>
                                    <td className=" border-r">
                                        {res?.tags?.length}
                                    </td>
                                    <td className=" border-r paragraph-table-Blog h-[8rem] mb-3 text-justify">
                                        {parse(res?.content)}
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
                                                    setModalDataEdit(res);
                                                    window.my_modal_2.show();
                                                }}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setModalDataDelete(res);
                                                    window.my_modal_3.show();
                                                }}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            >
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

const DeleteModalBlog = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const [gagal, setGagal] = useState(false);

    const onDelete = () => {
        axios
            .delete(`/admin/blog/delete/${data.id}`)
            .then((res) => {
                setLoading(true);
                window.my_modal_3.close();
                setTimeout(() => {
                    window.location.reload();
                    setLoading(false);
                }, 1000);
            })
            .catch((err) => {
                window.my_modal_3.close();
                setGagal(true);
                setTimeout(() => {
                    window.location.reload();

                    setGagal(false);
                }, 1000);
            });
    };
    return (
        <>
            {loading && (
                <div className="fixed z-[100] inset-0 overflow-y-auto">
                    <div className="toast toast-center toast-top">
                        <div className="alert alert-success mt-[5rem]">
                            <span className="text-2xl text-white font-extrabold">
                                Menghapus Data Berhasil
                            </span>
                        </div>
                    </div>
                </div>
            )}
            {gagal && (
                <div className="fixed z-[100] inset-0 overflow-y-auto">
                    <div className="toast toast-center toast-top">
                        <div className="alert alert-success mt-[5rem]">
                            <span className="text-2xl text-white font-extrabold">
                                Gagal Bro
                            </span>
                        </div>
                    </div>
                </div>
            )}
            <dialog
                id="my_modal_3"
                className="modal backdrop-blur-sm border-0 "
            >
                <div className="lg:w-[60rem] lg:h-[43rem] h-[20rem] relative rounded-xl bg-transparant">
                    <div className="lg:w-[60rem] lg:h-[38rem]  h-[20rem]  p-[3rem] bg ">
                        <div className="bg-white flex flex-col gap-[1.2rem] p-10 h-[100%]  overflow-y-auto scrollModal_type rounded-2xl shadow-xl">
                            {/* content delete blog */}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row justify-between">
                                    <h1 className="text-3xl font-bold">
                                        Delete Blog
                                    </h1>
                                    <h1 className="text-3xl font-bold">
                                        {data?.title}
                                    </h1>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-xl font-bold">
                                            Author
                                        </h1>
                                        <h1 className="text-xl font-bold">
                                            Title
                                        </h1>
                                        <h1 className="text-xl font-bold mb-[2.8rem]">
                                            Image
                                        </h1>
                                        <h1 className="text-xl font-bold">
                                            Tags
                                        </h1>
                                        <h1 className="text-xl font-bold">
                                            Content
                                        </h1>
                                        <h1 className="text-xl font-bold">
                                            Views
                                        </h1>
                                        <h1 className="text-xl font-bold">
                                            Comments
                                        </h1>
                                        <h1 className="text-xl font-bold">
                                            Date
                                        </h1>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-xl font-bold">
                                            : {data?.author}
                                        </h1>
                                        <h1 className="text-xl font-bold">
                                            : {data?.title}
                                        </h1>
                                        <div className="flex flex-row gap-2 text-xl font-bold">
                                            :{" "}
                                            <img
                                                src={data?.image}
                                                className="w-[8rem] "
                                                alt=""
                                            />
                                        </div>
                                        <h1 className="text-xl font-bold">
                                            : {data?.tags?.length}
                                        </h1>
                                        <h1 className="text-xl font-bold">
                                            : {data?.content}
                                        </h1>
                                        <h1 className="text-xl font-bold">
                                            : {data?.views}
                                        </h1>
                                        <h1 className="text-xl font-bold">
                                            : {data?.comments?.length}
                                        </h1>
                                        <h1 className="text-xl font-bold">
                                            :{" "}
                                            {moment(data?.created_at).format(
                                                "DD MMMM YYYY"
                                            )}
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            {/* button Delete */}
                            <div className="flex flex-row gap-5 justify-end">
                                <button
                                    onClick={() => window.my_modal_3.close()}
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    X
                                </button>

                                <button
                                    onClick={() => onDelete()}
                                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};
