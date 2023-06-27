import { CardImage } from "./CardImage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageType1 from "@/assets/imageType2.png";
import ImageType2 from "@/assets/imageType4.png";
import ImageType3 from "@/assets/imageType5.png";
import ImageType4 from "@/assets/imageType6.png";

export const ImageSet = () => {
    const image = [
        {
            title: "image1",
            image: ImageType1,
        },
        {
            title: "image2",
            image: ImageType2,
        },
        {
            title: "image3",
            image: ImageType3,
        },
        {
            title: "image4",
            image: ImageType4,
        },
    ];

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
            items: 1,
        },
    };

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            className="image-slider"
        >
            {image.map((item, index) => (
                <div
                    className="flex lg:gap-[3rem] py-10 justify-center item-img"
                    key={index}
                >
                    <div>
                        <CardImage image={item.image} title={item.title} />
                    </div>
                </div>
            ))}
        </Carousel>
    );
};
