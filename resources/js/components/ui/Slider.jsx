import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Corousel1 from "../../../assets/carousel_1.jpg";
import Corousel2 from "../../../assets/carousel_2.jpg";
import Corousel3 from "../../../assets/carousel_3.png";

const Slider = () => {
    const image = [
        {
            id: 1,
            src: Corousel1,
            alt: "carousel_1",
        },
        {
            id: 2,
            src: Corousel2,
            alt: "carousel_2",
        },
        {
            id: 3,
            src: Corousel3,
            alt: "carousel_3",
        },
    ];

    const [activeButton, setActiveButton] = useState(1);
    const [showCloseButton, setShowCloseButton] = useState(false);
    const [skip, setSkip] = useState(false);

    const handleClick = (id) => {
        setActiveButton(id);
    };

    const handleArrowClick = (index) => {
        const newIndex = index === 0 ? image.length - 1 : index - 1;
        setActiveButton(image[newIndex].id);
    };

    const Skip = () => {
        setSkip(true);
    };

    useEffect(() => {
        const modal = window.my_modal_1;
        window.addEventListener("load", () => {
            if (modal && !modal.hasAttribute("open")) {
                // modal.showModal();
            }
        });

        const timer = setTimeout(() => {
            setShowCloseButton(true);
        }, 5000);

        const handleKeyDown = (event) => {
            if (event.key === "Escape" && !showCloseButton) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const esc = document.getElementById("my_modal_1");
        esc.addEventListener("keydown", handleKeyDown);

        return () => {
            clearTimeout(timer);
            esc.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="select-none">
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_1" className="modal backdrop-blur-sm border-0">
                <form
                    method="dialog"
                    className=" relative flex border-0 justify-center items-center px-[.6rem] md:px-[8rem] w-full md:w-[880px]"
                >
                    {/* {!skip && (
                        <video
                            autoPlay
                            controls
                            playsInline
                            preload="auto"
                            muted
                        >
                            <source
                                src="./assets/video_opening.mp4"
                                type="video/mp4"
                            />
                        </video>
                    )} */}
                    {showCloseButton && (
                        <div className="modal-action absolute right-0 bottom-[7rem] px-[6rem] md:px-[8rem]  ">
                            <button
                                className="p-2 rounded-md text-sm md:text-lg bg-white select-none"
                                onClick={Skip}
                            >
                                skip
                            </button>
                        </div>
                    )}
                </form>
            </dialog>

            <div className="carousel w-full">
                {image.map((item, index) => (
                    <div
                        id={item.id}
                        key={item.id}
                        className="carousel-item relative w-full flex flex-col"
                    >
                        <img src={item.src} alt={item.alt} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <Link
                                href={
                                    index === 0
                                        ? `#${image[image.length - 1].id}`
                                        : `#${image[index - 1].id}`
                                }
                                className="btn btn-circle"
                                onClick={() => handleArrowClick(index)}
                            >
                                ❮
                            </Link>
                            <Link
                                href={
                                    index === image.length - 1
                                        ? `#${image[0].id}`
                                        : `#${image[index].id + 1}`
                                }
                                className={`btn btn-circle ${
                                    activeButton === item.id
                                        ? "hover active"
                                        : ""
                                }`}
                                onClick={() => handleClick(item.id)}
                            >
                                ❯
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute flex justify-center w-full -mt-10 gap-2">
                {image.map((item, index) => (
                    <a
                        href={`#${item.id}`}
                        className={`w-2 h-2 rounded-full ${
                            activeButton === item.id
                                ? " bg-blue-gray-100"
                                : "bg-blue-gray-400 "
                        }`}
                        onClick={() => handleClick(item.id)}
                        key={item.id}
                    ></a>
                ))}
            </div>
        </div>
    );
};

export default Slider;
