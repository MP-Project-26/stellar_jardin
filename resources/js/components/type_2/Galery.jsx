import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Galery = ({ gallery }) => {

    const exteriorGallery = gallery.filter(
        (item) => item.category === "exterior"
    );
    const interiorGallery = gallery.filter(
        (item) => item.category === "interior"
    );
    const potonganGallery = gallery.filter(
        (item) => item.category === "potongan"
    );
    // const denahGallery = gallery.filter(
    //     (item) => item.category === "denah");

    const [selectedImage, setSelectedImage] = useState(null);

    const Exterior = exteriorGallery.map((item) => {
        return (
            <div key={item.id} className="w-16 lg:w-28">
                <a href={`#${item.id}`}>
                    <img
                        src={`/assets/img/gallery/${item.image}`}
                        alt=""
                        className="w-full"
                    />
                </a>
            </div>
        );
    });

    const Interior = interiorGallery.map((item) => {
        return (
            <div key={item.id} className="w-16 lg:w-28">
                <a href={`#${item.id}`}>
                    <img
                        src={`/assets/img/gallery/${item.image}`}
                        alt=""
                        className="w-full"
                    />
                </a>
            </div>
        );
    });

    const Potongan = potonganGallery.map((item) => {
        return (
            <div key={item.id} className="w-16 lg:w-28">
                <a href={`#${item.id}`}>
                    <img
                        src={`/assets/img/gallery/${item.image}`}
                        alt=""
                        className="w-full"
                    />
                </a>
            </div>
        );
    });

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <>
            <div  className="flex flex-col w-full lg:h-[30rem] mb-10 lg:px-40 px-2">
                {/* title */}
                <div className="flex w-full justify-start h-auto mb-2 lg:px-0 lg:mb-2">
                    <div className="w-[6px] bg-[#0D7377] mr-3"></div>
                    <h1 className="font-sans font-bold text-[#0D7377] text-2xl md:text-4xl lg:text-5xl">
                        GA<span className="text-black">LLERY</span>
                    </h1>
                </div>

                {/* image */}
                <div className="flex flex-col  w-full gap-1 lg:flex-row lg:gap-3 lg:h-full">
                    <div className="w-full h-full lg:w-[80%] lg:h-full">
                        {/* Background Image */}
                        <div className="h-full">
                            <img
                                className="object-cover w-full lg:rounded-tl-3xl lg:rounded-br-3xl lg:h-full"
                                src={
                                    selectedImage
                                        ? `/assets/img/gallery/${selectedImage}`
                                        : "/assets/img/gallery/eksterior_1.png"
                                }
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="flex flex-row w-full gap-1 lg:h-full lg:flex-col lg:w-[20%] lg:gap-1 cursor-pointer">
                        {gallery.slice(0, 3).map((item) => (
                            <div
                                key={item.id}
                                className="h-full "
                                onClick={() => handleImageClick(item.image)}
                            >
                                <img
                                    className="object-cover lg:rounded-xl lg:h-28 lg:w-full"
                                    src={`/assets/img/gallery/${item.image}`}
                                    alt=""
                                />
                            </div>
                        ))}

                        <div
                            className="flex w-auto h-full relative cursor-pointer"
                            onClick={() => window.my_modal_4.showModal()}
                        >
                            <img
                                className="object-cover blur-[3px] z-10 lg:rounded-xl lg:h-28 lg:w-full"
                                src="/assets/img/gallery/eksterior_1.png"
                                alt=""
                            />
                            <div className="flex h-full w-full absolute z-20 bg-black text-white justify-center items-center bg-opacity-30 lg:rounded-xl">
                                <h1 className="font-bold text-sm lg:text-xl">
                                    lihat semua
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <dialog
                id="my_modal_4"
                className="modal w-full h-auto bg-black bg-opacity-50 backdrop-blur-sm px-2 lg:px-0"
            >
                <form
                    method="dialog"
                    className="modal-box w-full lg:h-auto  flex justify-end max-w-4xl rounded-none p-1"
                >
                    <div className="flex w-full  lg:w-auto fixed m-0 justify-end modal-action ">
                        <button className="btn-sm lg:btn-md btn-circle flex justify-center items-center rounded-full bg-black bg-opacity-40 border-none">
                            <FaXmark className="text-xl text-gray-300 lg:text-2xl" />
                        </button>
                    </div>

                    <div className="w-full h-auto pb-2">
                        <div className="carousel w-auto ">
                            {gallery.map((item) => (
                                <div
                                    key={item.id}
                                    id={item.id}
                                    className="carousel-item w-full"
                                >
                                    <img
                                        src={`/assets/img/gallery/${item.image}`}
                                        className="w-full"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col h-40 lg:h-[20%] overflow-y-auto">
                            <div className="">
                                <h1 className="text-xl">Exterior</h1>
                            </div>
                            <div className="flex  items-center w-auto gap-2 flex-wrap mb-4">
                                {Exterior}
                            </div>

                            <div>
                                <h1 className="text-xl">Interior</h1>
                            </div>
                            <div className="flex items-center w-auto gap-2 flex-wrap mb-4">
                                {Interior}
                            </div>

                            <div>
                                <h1 className="text-xl">Potongan</h1>
                            </div>
                            <div className="flex items-center w-auto gap-2 flex-wrap mb-4">
                                {Potongan}
                            </div>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    );
};

export default Galery;
