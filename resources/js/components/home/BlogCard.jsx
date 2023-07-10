import { Link } from "@inertiajs/react";
import React from "react";

const BlogCard = () => {
    const Posts = [
        {
            id: 1,
            title: "Cara Membersihkan Rumah dengan Efisien",
            description: `Anda dapat membersihkan rumah dengan efisien dan menghemat waktu.
            Berikut adalah beberapa tips yang dapat membantu Anda membersihkan rumah dengan efisien`,
            img: "/assets/img/gallery/living_room_2.jpg",
        },
        {
            id: 2,
            title: "Mengelola Pembayaran Rumah dengan Mudah",
            description: `Anda dapat mengelola pembayaran rumah dengan mudah dan menghindari stres yang tidak perlu. Berikut ini beberapa tips untuk membantu Anda mengatur pembayaran rumah dengan mudah`,
            img: "/assets/img/gallery/site_plan_1.jpg",
        },
        {
            id: 3,
            title: "Cara Mendekorasi Dapur Anda",
            description: `Jika Anda ingin menghias dapur Anda agar terlihat indah dan fungsional, berikut adalah beberapa tips yang dapat Anda terapkan`,
            img: "/assets/img/gallery/site_plan_1.jpg",
        },
    ];

    return (
        <div className="lg:px-40 lg:py-9 md:px-20 md:py-6 px-4 py-4 flex flex-wrap gap-4">
            <div className="w-full flex flex-col justify-center items-center mb-10 lg:mb-10 md:mb-10"
            data-aos="zoom-in-down">
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-green-custom">
                    TENDING <span className="text-black">TOPIK</span>
                </h1>
                <div className="h-2 w-[10%] bg-green-custom"></div>
            </div>

            <div className="flex w-full justify-center gap-4 flex-wrap md:h-auto">
                {Posts.map((item, index) => (
                    <div key={index} className="card lg:w-[30%] md:w-[30%] w-full shadow-xl rounded-none md:h-full"
                    data-aos="zoom-in-down
                    ">
                        <figure>
                            <img src={item.img} alt={item.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <div className="card-actions">
                                <div className="badge badge-outline">
                                    Properti
                                </div>
                                <div className="badge badge-outline">
                                    Interior
                                </div>
                                <div className="badge badge-outline">
                                    Ekterior
                                </div>
                            </div>
                            <p>{item.description}</p>
                            <div className="text-blue-700 cursor-pointer">
                                <Link href="/blog/spesifik/1">
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
