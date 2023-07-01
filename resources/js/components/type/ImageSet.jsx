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
import React, { useState } from "react";

const ImageSet = ({ gallery }) => {
    console.log(gallery);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTab, setActiveTab] = useState("exterior");

    const exteriorGallery = gallery.filter(
        (item) => item.category === "exterior"
    );
    const interiorGallery = gallery.filter(
        (item) => item.category === "interior"
    );
    const potonganGallery = gallery.filter(
        (item) => item.category === "potongan"
    );

    const Exterior = exteriorGallery.map((item, index) => {
        return (
            <TabPanel key={item.id} value={item.category}>
                <div
                    className="flex lg:gap-[3rem] justify-center item-img"
                    key={index}
                    onClick={() => handleImageClick(item.image)}
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
            <TabPanel key={item.id} value={item.category}>
                <div
                    className="flex lg:gap-[3rem] justify-center item-img"
                    key={index}
                    onClick={() => handleImageClick(item.image)}
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
            <TabPanel key={item.id} value={item.category}>
                <div
                    className="flex lg:gap-[3rem] justify-center item-img"
                    key={index}
                    onClick={() => handleImageClick(item.image)}
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
        { label: "Exterior", value: "exterior" },
        { label: "Interior", value: "interior" },
        { label: "Potongan", value: "potongan" },
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <img
                src={
                    selectedImage
                        ? `/assets/img/gallery/${selectedImage}`
                        : "/assets/img/gallery/eksterior_2.png"
                }
                alt="image1"
                className="w-full h-3/4 lg:rounded-[2rem]  rounded-[1rem]"
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
                                    activeTab === value ? "text-blue-500" : ""
                                }
                            >
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    {console.log(activeTab)}
                    <TabsBody>
                        {/* {gallery.map((item, index) => ( */}

                        {activeTab === "exterior" ? (
                            <div>
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    className="image-slider"
                                >
                                    {Exterior}
                                </Carousel>
                            </div>
                        ) : activeTab === "interior" ? (
                            <div>
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    className="image-slider"
                                >
                                    {Interior}
                                </Carousel>
                            </div>
                        ) : (
                            <div>
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    className="image-slider"
                                >
                                    {Potongan}
                                </Carousel>
                            </div>
                        )}
                        {/* ))} */}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    );
};

export default ImageSet;
