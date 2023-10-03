import { Link } from "@inertiajs/react";
import React from "react";

const BlogCard = ({blogs}) => {
    return (
        <div className="lg:px-40 lg:py-9 md:px-20 md:py-6 px-4 py-4 flex flex-wrap gap-4">
            <div className="w-full flex flex-col justify-center items-center mb-10 lg:mb-10 md:mb-10"
            data-aos="zoom-in-down">
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-green-custom">
                    POSTINGAN <span className="text-black">TERBARU</span>
                </h1>
                <div className="h-2 w-[10%] bg-green-custom"></div>
            </div>

            <div className="flex w-full justify-center gap-4 flex-wrap md:h-auto">

                {blogs && blogs.map((item, index) => (
                    <div key={index} className="card lg:w-[30%] md:w-[30%] w-full shadow-xl rounded-none md:h-full"
                    data-aos="zoom-in-down
                    ">
                        <figure>
                            <img src={`/storage/assets/img/blog/${item.image }`} alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <div className="card-actions">
                                {item.tags.map((tag, index) => (
                                <Link href={`/blog/tag/${tag}`} key={index} className="badge badge-outline">
                                    {tag}
                                </Link>
                                ))}
                            </div>
                            <p className="w-full line-clamp-4">{item.content}</p>
                            <div className="text-blue-700 cursor-pointer">
                                <Link href={`/blog/spesifik/${item.id}`}>
                                    <h1>Baca Selengkapnya</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCard;
