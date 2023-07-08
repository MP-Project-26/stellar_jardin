import Layout from "@/Layouts/Layout";
import ImageOurBlog1 from "@/assets/ourblog1-1.png";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import React from "react";
import moment from "moment/moment";
import ContentBlog from "@/components/blog/ContentBlog";
import PopularBlog from "@/components/blog/PopularBlog";
import { useEffect } from "react";
import { useState } from "react";

export default function Blog({ dataBlog }) {
    const [data, setData] = useState([]);
    const [pupular, setPupular] = useState([]);

    useEffect(() => {
        const dataPopularBlog = [...dataBlog.data].sort(
            (a, b) => b.views - a.views
        );
        setPupular(dataPopularBlog.slice(0, 3));
    }, [dataBlog]);

    useEffect(() => {
        setData(dataBlog.data);
    }, [dataBlog]);
    return (
        <Layout title="Blog">
            <div className="w-full py-[10rem] px-0 lg:px-[6rem] bg-white">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="text-6xl font-extrabold flex flex-col items-center gap-6 mb-6">
                        <div>
                            <span className="text-green-custom">OUR</span> BLOG
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row   w-full  justify-between gap-[5rem] columns-2">
                        <ContentBlog data={data} meta={dataBlog} />

                        {/* kanan */}
                        <div className="px-5 flex flex-col gap-10 w-full lg:w-[35%] sticky top-0 ">
                            <div className=" border-green-custom border-[2px] rounded-2xl flex flex-row p-5 gap-4 bg-white shadow-xl">
                                <input
                                    className="w-full px-4 py-2 rounded-xl"
                                    type="text"
                                    name="search"
                                    id="search"
                                    placeholder="search"
                                />{" "}
                                <button
                                    type="sumbit"
                                    className=" rounded-xl bg-green-custom flex justify-center items-center px-5 text-white"
                                >
                                    Search
                                </button>
                            </div>
                            {/* Popular Posts */}
                            <PopularBlog data={pupular} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
