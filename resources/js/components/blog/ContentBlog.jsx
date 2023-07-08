import React from "react";
import { Link } from "@inertiajs/react";
import ModalComments from "@/components/utils/modal/modalComments";
import moment from "moment";
import { useState } from "react";
import axios from "axios";

export default function ContentBlog({ data, meta }) {
    const [dataModalComments, setDataModalComments] = useState([]);
    // const [countView, setCountView] = useState([]);

    const addViewCount = async (dataView) => {
        // console.log(dataView);
        const response = await axios.put(
            `/blog/view/${dataView.id}`,
            dataView,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(response);
    };
    return (
        <>
            <ModalComments data={dataModalComments} />
            <div className="px-5 w-full lg:w-[65%] flex flex-col gap-[5rem]">
                {data.map((item, index) => (
                    <div className=" space-y-7" key={index}>
                        <span className="text-6xl font-semibold text-green-custom">
                            {item.title}
                        </span>
                        <p className="text-xl font-semibold ">
                            {moment(item?.created_at).format("DD MMMM YYYY")}-{" "}
                            {item.author} - {"Property"}
                        </p>
                        <img
                            src={item.image}
                            alt=""
                            className="w-full"
                            data-aos="fade-right"
                        />
                        <div className="text-green-custom flex flex-row items-center gap-5 font-semibold text-xl">
                            <p>Tags</p> <p> : </p>
                            {item.tags.map((tag, index) => (
                                <button
                                    key={index}
                                    className="rounded-md px-4 py-1 bg-green-custom text-white"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                        <p className="text-lg text-justify text-black paragraph-Blog font-roboto font-medium max-w-full">
                            {item.content}
                        </p>
                        <div className="w-full flex justify-between items-center">
                            <div className="flex  flex-row">
                                <div className="bg-green-custom px-5 py-2 flex gap-2 justify-center items-center ">
                                    <svg
                                        width="21"
                                        height="22"
                                        viewBox="0 0 21 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g>
                                            <path
                                                d="M10.6437 4.08524C6.55739 4.08524 3.06767 6.90857 1.65381 10.8939C3.06767 14.8793 6.55739 17.7026 10.6437 17.7026C14.73 17.7026 18.2197 14.8793 19.6336 10.8939C18.2197 6.90857 14.73 4.08524 10.6437 4.08524ZM10.6437 15.433C8.38805 15.433 6.55739 13.3995 6.55739 10.8939C6.55739 8.38832 8.38805 6.3548 10.6437 6.3548C12.8993 6.3548 14.73 8.38832 14.73 10.8939C14.73 13.3995 12.8993 15.433 10.6437 15.433ZM10.6437 8.17045C9.28704 8.17045 8.19191 9.38693 8.19191 10.8939C8.19191 12.4009 9.28704 13.6174 10.6437 13.6174C12.0004 13.6174 13.0955 12.4009 13.0955 10.8939C13.0955 9.38693 12.0004 8.17045 10.6437 8.17045Z"
                                                fill="#FFDE59"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_120_115">
                                                <rect
                                                    x="0.836426"
                                                    y="3.05176e-05"
                                                    width="19.6143"
                                                    height="21.7878"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="font-roboto text-xl font-semibold text-white">
                                        {item.views}
                                    </p>
                                </div>
                                <div className="bg-green-custom px-5 py-2 flex gap-2 justify-center items-center ">
                                    <svg
                                        onClick={() => {
                                            setDataModalComments(item);
                                            window.my_modal_2.showModal();
                                        }}
                                        className="cursor-pointer"
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g>
                                            <path
                                                d="M17.2431 5.44697H15.6086V13.6174H4.98414V15.433C4.98414 15.9323 5.35191 16.3409 5.8014 16.3409H14.7913L18.0603 19.9722V6.3548C18.0603 5.85549 17.6926 5.44697 17.2431 5.44697ZM13.974 10.8939V2.7235C13.974 2.22419 13.6063 1.81567 13.1568 1.81567H2.53235C2.08286 1.81567 1.71509 2.22419 1.71509 2.7235V15.433L4.98414 11.8017H13.1568C13.6063 11.8017 13.974 11.3932 13.974 10.8939Z"
                                                fill="#FFDE59"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_120_119">
                                                <rect
                                                    x="0.0805664"
                                                    y="3.05176e-05"
                                                    width="19.6143"
                                                    height="21.7878"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p
                                        className="font-roboto text-xl font-semibold text-white cursor-pointer"
                                        onClick={() => {
                                            setDataModalComments(item);
                                            window.my_modal_2.showModal();
                                        }}
                                    >
                                        {item.comments.length}
                                    </p>
                                </div>
                                {/* <ModalComments item={item} /> */}
                            </div>
                            <div className="flex  flex-row">
                                <div className="w-50 flex justify-end">
                                    <Link
                                        onClick={() => {
                                            addViewCount(item);
                                        }}
                                        href={`/blog/spesifik/${item.id}`}
                                        className=" font-semibold text-xl text-white  bg-green-custom rounded-r-[2rem] rounded-tl-none rounded-bl-[2rem] px-3 py-2 lg:px-[3.4rem] lg:py-[1.2rem]"
                                    >
                                        MORE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <Paginator meta={meta} />
            </div>
        </>
    );
}

const Paginator = ({ meta }) => {
    const { total, per_page, current_page } = meta;
    const last_page = Math.ceil(total / per_page);
    const prev_page = current_page - 1;
    const next_page = current_page + 1;

    const prev = () => {
        // router.push(`/blog?page=${prev_page}`);
        window.location.href = `/blog?page=${prev_page}`;
    };

    const next = () => {
        // router.push(`/blog?page=${next_page}`);
        window.location.href = `/blog?page=${next_page}`;
    };

    return (
        <div className="flex flex-row justify-center items-center gap-5 mt-10">
            <div className="flex flex-row justify-center items-center gap-5">
                <button
                    onClick={prev}
                    disabled={prev_page < 1}
                    className={`${
                        prev_page < 1 ? "bg-gray-400" : "bg-green-custom"
                    } px-5 py-2 rounded-md text-white font-roboto font-medium`}
                >
                    Prev
                </button>
                <p className="font-roboto font-medium text-xl">
                    {current_page} of {last_page}
                </p>
                <button
                    onClick={next}
                    disabled={next_page > last_page}
                    className={`${
                        next_page > last_page
                            ? "bg-gray-400"
                            : "bg-green-custom"
                    } px-5 py-2 rounded-md text-white font-roboto font-medium`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
