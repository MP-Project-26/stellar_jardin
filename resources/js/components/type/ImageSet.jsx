import { CardImage } from "./CardImage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const ImageSet = ({ galleries }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTab, setActiveTab] = useState("Exterior");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const exteriorGallery = galleries.filter(
        (item) => item.category.category_name === "Exterior"
    );
    const interiorGallery = galleries.filter(
        (item) => item.category.category_name === "Interior"
    );
    const potonganGallery = galleries.filter(
        (item) => item.category.category_name === "Potongan"
    );
    const denahGallery = galleries.filter(
        (item) => item.category.category_name === "Denah"
    );

    const Exterior = exteriorGallery.map((item, index) => {
        return (
            <TabPanel key={item.id} value={item.category.category_name}>
                <div
                    className="flex  justify-center item-img  hover:scale-110 transform transition-all duration-500 ease-in-out"
                    key={index}
                    onClick={(event) => handleImageClick(event,item.image)}
                >
                    <a href={`#${item.id}`}>
                        <CardImage
                            image={`/assets/img/gallery/${item.image}`}
                            title={item.id}
                        />
                    </a>
                </div>
            </TabPanel>
        );
    });

    const Interior = interiorGallery.map((item, index) => {
        return (
            <TabPanel key={item.id} value={item.category.category_name}>
                <div
                    className="flex lg:gap-[3rem] justify-center item-img hover:scale-110 transform transition-all duration-500 ease-in-out"
                    key={index}
                    onClick={(event) => handleImageClick(event,item.image)}
                >
                    <a href={`#${item.id}`}>
                        <CardImage
                            image={`/assets/img/gallery/${item.image}`}
                            title={item.id}
                        />
                    </a>
                </div>
            </TabPanel>
        );
    });

    const Potongan = potonganGallery.map((item, index) => {
        return (
            <TabPanel key={item.id} value={item.category.category_name}>
                <div
                    className="flex  justify-center item-img hover:scale-110 transform transition-all duration-500 ease-in-out"
                    key={index}
                    onClick={(event) => handleImageClick(event,item.image)}
                >
                    <a href={`#${item.id}`}>
                        <CardImage
                            className="h-full w-auto"
                            image={`/assets/img/gallery/${item.image}`}
                            title={item.id}
                        />
                    </a>
                </div>
            </TabPanel>
        );
    });

    const Denah = denahGallery.map((item, index) => {
        return (
            <TabPanel key={item.id} value={item.category.category_name}>
                <div
                    className="flex  justify-center item-img hover:scale-110 transform transition-all duration-500 ease-in-out"
                    key={index}
                    onClick={(event) => handleImageClick(event,item.image)}
                >
                    <a href={`#${item.id}`}>
                        <CardImage
                            className="h-full w-auto"
                            image={`/assets/img/gallery/${item.image}`}
                            title={item.id}
                        />
                    </a>
                </div>
            </TabPanel>
        );
    });

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
            items: 2,
        },
    };

    const data = [
        { label: "Exterior", value: "Exterior" },
        { label: "Interior", value: "Interior" },
        { label: "Potongan", value: "Potongan" },
        { label: "Denah", value: "Denah" },
    ];

    const handleImageClick = (event,image) => {
        event.preventDefault();
        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedImage(image);
            setIsTransitioning(false);
        }, 500);
    };

    useEffect(() => {
        const imageElement = document.querySelector(".selected-image");
        if (imageElement) {
            imageElement.classList.remove("selected-image");
            setTimeout(() => {
                imageElement.classList.add("selected-image");
            }, 0);
        }
    }, [selectedImage]);

    return (
        <>
            <div className="w-full  h-auto flex mb-3 lg:px-40 md:px-20 px-4">
                    <div className="w-2 bg-green-custom mr-2 lg:mr-5 md:mr-3"></div>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-green-custom">
                        GAL
                        <span className="text-black">ERI</span>
                    </h1>
                </div>
            <div id="gallery" className="lg:px-40 md:px-20 px-4">
                <img
                    src={
                        selectedImage
                            ? `/assets/img/gallery/${selectedImage}`
                            : "/assets/img/gallery/eksterior_2.jpg"
                    }
                    alt="image1"
                    className={`w-auto h-full md:rounded-3xl object-cover  ${
                        isTransitioning ? "transitioning" : ""
                    }`}
                    style={{ zIndex: selectedImage ? 2 : 1 }}
                />
                <div className="py-5">
                    <Tabs value={activeTab}>
                        <TabsHeader
                            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-2/4"
                            indicatorProps={{
                                className:
                                    "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                            }}
                        >
                            {data.map(({ label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    className={
                                        activeTab === value
                                            ? "text-blue-500"
                                            : ""
                                    }
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {activeTab === "Exterior" ? (
                                <div>
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        className="image-slider"
                                        renderButtonGroupOutside={true}
                                        centerMode={true}
                                        centerSlidePercentage={75}
                                        partialVisible={false}
                                        itemClass="carousel-item"
                                    >
                                        {Exterior}
                                    </Carousel>
                                </div>
                            ) : activeTab === "Interior" ? (
                                <div>
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        className="image-slider"
                                        renderButtonGroupOutside={true}
                                        centerMode={true}
                                        centerSlidePercentage={75}
                                        partialVisible={false}
                                        itemClass="carousel-item"
                                    >
                                        {Interior}
                                    </Carousel>
                                </div>
                            ) : activeTab === "Potongan" ? (
                                <div>
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        className="image-slider"
                                        renderButtonGroupOutside={true}
                                        centerMode={true}
                                        centerSlidePercentage={75}
                                        partialVisible={false}
                                        itemClass="carousel-item"
                                    >
                                        {Potongan}
                                    </Carousel>
                                </div>
                            ):(
                                <div>
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        className="image-slider"
                                        renderButtonGroupOutside={true}
                                        centerMode={true}
                                        centerSlidePercentage={75}
                                        partialVisible={false}
                                        itemClass="carousel-item"
                                    >
                                        {Denah}
                                    </Carousel>
                                </div>
                            )}
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default ImageSet;
