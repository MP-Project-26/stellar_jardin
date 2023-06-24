import { Carousel as DCarousel } from "@material-tailwind/react";
import ImageCarousel1 from "@/assets/carousal1.png";
import ImageCarousel2 from "@/assets/carousal2.png";
import ImageCarousel3 from "@/assets/carousal3.png";

export default function Carousel() {
    return (
        <DCarousel
            loop
            autoplay
            autoplayDelay={4000}
            className="h-[40rem]"
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
            <img
                src={ImageCarousel1}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={ImageCarousel2}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={ImageCarousel3}
                alt="image 1"
                className="h-full w-full object-cover"
            />
          
        </DCarousel>
    );
}
