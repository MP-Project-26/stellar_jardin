import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalGalleries from "@/components/type/ModalGalleries";

import { useState } from "react";

export const ImageSet = ({ galleries }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState(null);
    const handleImageClick = (image, title) => {
        setSelectedImage(image);
        setSelectedTitle(title);
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
        },
    };

    const data = [
        { label: "Exterior", value: "exterior" },
        { label: "Interior", value: "interior" },
        { label: "Potongan", value: "potongan" },
    ];

    return (
        <>
            <div id="gallery" className="lg:px-40 md:px-32 px-2">
                <div className="flex w-full justify-start h-auto mb-2 lg:px-0 lg:mb-2">
                    <div className="w-[6px] bg-[#0D7377] mr-3"></div>
                    <h1 className="font-sans font-bold text-[#0D7377] text-2xl md:text-4xl lg:text-5xl">
                        GA<span className="text-black">LLERY</span>
                    </h1>
                </div>
                <div className="flex flex-col relative w-auto lg:h-[35rem]">
                    <img
                        src={
                            selectedImage
                                ? `/assets/img/gallery/${selectedImage}`
                                : "/assets/img/gallery/eksterior_1.png"
                        }
                        alt="image1"
                        className="h-full w-full lg:rounded-bl-[4rem] lg:rounded-tr-[4rem] z-0 lg:object-cover "
                    />
                    <div className="flex justify-end items-end  pb-7 w-full absolute z-10 h-full lg:rounded-[2rem]  rounded-[1rem]">
                        <div className="w-auto bg-black p-2 bg-opacity-50">
                            <h1 className="text-center text-white text-xl font-medium">
                                {selectedTitle ? selectedTitle : "Eksterior 1"}
                            </h1>
                        </div>
                    </div>
                </div>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="image-slider"
                >
                    {galleries.slice(0, 10).map((item, index) => (
                        <div className="lg:mt-6 mt-2 mb-2" key={item.id}>
                            <div className="flex   px-0 justify-center items-center w-full">
                                <div
                                    onClick={() =>
                                        handleImageClick(item.image, item.title)
                                    }
                                    className="flex  bg-white select-none cursor-pointer gap-10"
                                >
                                    <div className="w-auto px-1 lg:px-0">
                                        <img
                                            src={`/assets/img/gallery/${item.image}`}
                                            alt={item.title}
                                            className="lg:h-[9rem] lg:w-[16rem] md:h-[7rem] md:w-[11rem] w-[8rem] h-[5rem] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <div className="w-full flex justify-end">
                    <div
                        className="bg-green-custom p-2 cursor-pointer hover:bg-blue-gray-400  rounded-md lg:mr-4 md:mr-4"
                        onClick={() => window.my_modal_3.showModal()}
                    >
                        <h1 className="text-xl font-normal text-white hover:text-black">
                            Lihat Semua Foto
                        </h1>
                    </div>
                    <ModalGalleries galleries={galleries} />
                </div>
            </div>
        </>
    );
};

export default ImageSet;
