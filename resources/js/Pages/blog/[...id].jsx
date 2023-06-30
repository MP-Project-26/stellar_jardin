import Layout from "@/Layout/Layout";
import ImageOurBlog1 from "@/assets/ourblog1-1.png";
import { Link } from "@inertiajs/react";
import ImageUser from "@/assets/user.png";
import React from "react";
import moment from "moment/moment";
import SpesifikContentBlog from "@/components/blog/spesifik/SpesifikContentBlog";
import SpesifikPopularBlog from "@/components/blog/spesifik/SpesifikPopularBlog";

const data = [
    {
        id: 1,
        title: "Manage House Property",
        date: "18 May 2023",
        author: "Fikri",
        image: ImageOurBlog1,
        tags: ["Home", "Furniture"],
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eius veritatis velit veniam ipsum amet, laborum quaerat voluptates, et repellendus laudantium quos incidunt officiis minus animi sequi tempore hic, atque dicta maxime sint eum consequuntur! Magnam exercitationem odit laboriosam fuga dolore neque impedit necessitatibus repellat cum repellendus, illum eius, atque obcaecati voluptas. Assumenda quidem ad nulla quos, nesciunt accusamus quod voluptates repudiandae eum deleniti at molestiae incidunt obcaecati reprehenderit, est impedit. Ipsam eveniet tempora sint voluptatibus beatae architecto consequatur, facilis aperiam ullam quae veritatis, aliquid impedit ratione adipisci nam iste deserunt. Minima officiis ad aperiam quia molestias ipsa ea voluptate.",
        views: 100,
        comments: ["lorem", "ipsum", "dolor"],
        link: "/blog/1",
    },
];

const pupular = [
    {
        id: 1,
        title: "Manage House Property",
        author: "Fikri",
        image: ImageOurBlog1,
        link: "/blog/1",
        views: 1222,
        comments: 12,
        date: 1687779024740,
    },
    {
        id: 2,
        title: "Manage House Property",
        author: "Zaldi",
        image: ImageOurBlog1,
        link: "/blog/1",
        views: 1152,
        comments: 2,
        date: 1687779090579,
    },
];

export default function SpesifikBlog() {
    return (
        <Layout title="SpesifikBlog">
            <div className="w-full py-[10rem] px-0 lg:px-[6rem] bg-white">
                <div className="flex flex-col lg:flex-row   w-full  justify-between gap-[5rem] columns-2">
                    <SpesifikContentBlog dataContent={data} />
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
