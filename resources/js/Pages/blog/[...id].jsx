import Layout from "@/Layouts/Layout";
import React from "react";
import SpesifikContentBlog from "@/components/blog/spesifik/SpesifikContentBlog";
import SpesifikPopularBlog from "@/components/blog/spesifik/SpesifikPopularBlog";
import { useEffect } from "react";

const pupular = [
    {
        id: 1,
        title: "Manage House Property",
        author: "Fikri",
        image: "/storage/assets/img/blog/1UChfbUR36CR7BVY8Q3RIFBbWf6T273m.jpg",
        link: "/blog/1",
        views: 1222,
        comments: 12,
        date: 1687779024740,
    },
    {
        id: 2,
        title: "Manage House Property",
        author: "Zaldi",
        image: "/storage/assets/img/blog/1UChfbUR36CR7BVY8Q3RIFBbWf6T273m.jpg",
        link: "/blog/1",
        views: 1152,
        comments: 2,
        date: 1687779090579,
    },
];

export default function SpesifikBlog({ blogSpesifik }) {
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
