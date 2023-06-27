import { Carousel as DCarousel } from "@material-tailwind/react";
import ImageCarousel1 from "@/assets/carousal1.png";
import ImageCarousel2 from "@/assets/carousal2.png";
import ImageCarousel3 from "@/assets/carousal3.png";

export default function Carousel() {
    return (
        <DCarousel
            loop
            // autoplay
            autoplayDelay={4000}
            // className="h-[40rem]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-3 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i
                                    ? "bg-white w-14"
                                    : "bg-white/50 w-6"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <div className="relative h-[40rem]">
                <img
                    src={ImageCarousel1}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <div className="w-[50rem] space-y-5">
                        <h1 className="text-white text-7xl font-bold max-w-[25rem]">
                            BUILD HOUSE WITH PASSION
                        </h1>
                        <p className="text-white max-w-[25rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. In pariatur eius esse modi voluptates earum
                            praesentium ab dolorem nam veritatis quos dicta
                            eaque, quaerat explicabo similique laboriosam
                            incidunt nostrum placeat?
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative h-[40rem]">
                <img
                    src={ImageCarousel2}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <div className="bg-cyan-200 w-full ">
                        <h1 className="text-white text-4xl font-bold">
                            We are here to help you
                        </h1>
                    </div>
                </div> */}
            </div>
            <div className="relative h-[40rem]">
                <img
                    src={ImageCarousel3}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <div className="bg-cyan-200 w-full ">
                        <h1 className="text-white text-4xl font-bold">
                            We are here to help you
                        </h1>
                    </div>
                </div> */}
            </div>
           
        </DCarousel>
    );
}
