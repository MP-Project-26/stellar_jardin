import { CardImage } from "./CardImage";
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

    return (
        <div className="flex gap-[3rem] py-10">
            {image.map((item, index) => (
                <CardImage key={index} image={item.image} title={item.title} />
            ))}
        </div>
    );
};
