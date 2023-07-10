import Layout from "@/Layouts/Layout";
import React from "react";
import SpesifikContentBlog from "@/components/blog/spesifik/SpesifikContentBlog";
import SpesifikPopularBlog from "@/components/blog/spesifik/SpesifikPopularBlog";
import { useEffect } from "react";
import { useState } from "react";

export default function SpesifikBlog({ blogSpesifik, allDataBlog }) {
    const [pupular, setPupular] = useState([]);

    useEffect(() => {
        const dataPopularBlog = [...allDataBlog].sort(
            (a, b) => b.views - a.views
        );
        setPupular(dataPopularBlog.slice(0, 3));
    }, [dataBlog]);
    return (
        <Layout title="SpesifikBlog">
            <div className="w-full py-[10rem] px-0 lg:px-[6rem] bg-white">
                <div className="flex flex-col lg:flex-row   w-full  justify-between gap-[5rem] columns-2">
                    <SpesifikContentBlog dataContent={blogSpesifik} />
                    {/* kanan */}
                    <div className="px-5 flex flex-col gap-10 w-full lg:w-[35%] sticky top-0 ">
                        {/* Popular Posts */}
                        <SpesifikPopularBlog dataPopular={pupular} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
