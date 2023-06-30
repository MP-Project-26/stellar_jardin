import React from "react";
import ImageOurBlog1 from "@/assets/ourblog1-1.png";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import ModalComments from "@/components/utils/modal/modalComments";

export default function ContentBlog({ data }) {
    const [active, setActive] = React.useState(1);
    const [dataItems, setDataItems] = React.useState(data);

    const getItemProps = (index) => ({
        className:
            active === index
                ? "text-[2rem] p-[2rem] border-[#209094] bg-[#209094] text-white"
                : "text-[2rem] p-[2rem] border-green-custom bg-green-custom text-white",
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };
    return (
        <>
            <ModalComments />
            <div className="px-5 w-full lg:w-[65%] flex flex-col gap-[5rem]">
                {data.map((item, index) => (
                    <div className=" space-y-7" key={index}>
                        <span className="text-6xl font-semibold text-green-custom">
                            {item.title}
                        </span>
                        <p className="text-xl font-semibold ">
                            {item.date} - {item.author} - {"Property"}
                        </p>
                        <img
                            src={ImageOurBlog1}
                            alt=""
                            className="w-full"
                            data-aos="fade-right"
                        />
                        <div
                            className="text-green-custom flex flex-row items-center gap-5 font-semibold text-xl"
                        >
                            <p>Tags</p> <p> : </p>
                            <span className="rounded-md px-4 py-1 bg-green-custom text-white">
                                {item.tags[0]}
                            </span>{" "}
                            <span className="rounded-md px-4 py-1 bg-green-custom text-white">
                                {item.tags[1]}
                            </span>
                        </div>
                        <p className="text-lg text-justify text-black paragraph-Blog font-roboto font-medium max-w-full">
                            {item.content}
                        </p>
                        <div className="w-full flex justify-between items-center">
                            <div className="flex  flex-row">
                                <div className="bg-green-custom px-5 py-2 flex gap-2 justify-center items-center ">
                                    <svg
                                        width="21"
                                        height="22"
                                        viewBox="0 0 21 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g>
                                            <path
                                                d="M10.6437 4.08524C6.55739 4.08524 3.06767 6.90857 1.65381 10.8939C3.06767 14.8793 6.55739 17.7026 10.6437 17.7026C14.73 17.7026 18.2197 14.8793 19.6336 10.8939C18.2197 6.90857 14.73 4.08524 10.6437 4.08524ZM10.6437 15.433C8.38805 15.433 6.55739 13.3995 6.55739 10.8939C6.55739 8.38832 8.38805 6.3548 10.6437 6.3548C12.8993 6.3548 14.73 8.38832 14.73 10.8939C14.73 13.3995 12.8993 15.433 10.6437 15.433ZM10.6437 8.17045C9.28704 8.17045 8.19191 9.38693 8.19191 10.8939C8.19191 12.4009 9.28704 13.6174 10.6437 13.6174C12.0004 13.6174 13.0955 12.4009 13.0955 10.8939C13.0955 9.38693 12.0004 8.17045 10.6437 8.17045Z"
                                                fill="#FFDE59"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_120_115">
                                                <rect
                                                    x="0.836426"
                                                    y="3.05176e-05"
                                                    width="19.6143"
                                                    height="21.7878"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="font-roboto text-xl font-semibold text-white">
                                        {item.views}
                                    </p>
                                </div>
                                <div className="bg-green-custom px-5 py-2 flex gap-2 justify-center items-center ">
                                    <svg
                                        onClick={() =>
                                            window.my_modal_2.showModal()
                                        }
                                        className="cursor-pointer"
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g>
                                            <path
                                                d="M17.2431 5.44697H15.6086V13.6174H4.98414V15.433C4.98414 15.9323 5.35191 16.3409 5.8014 16.3409H14.7913L18.0603 19.9722V6.3548C18.0603 5.85549 17.6926 5.44697 17.2431 5.44697ZM13.974 10.8939V2.7235C13.974 2.22419 13.6063 1.81567 13.1568 1.81567H2.53235C2.08286 1.81567 1.71509 2.22419 1.71509 2.7235V15.433L4.98414 11.8017H13.1568C13.6063 11.8017 13.974 11.3932 13.974 10.8939Z"
                                                fill="#FFDE59"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_120_119">
                                                <rect
                                                    x="0.0805664"
                                                    y="3.05176e-05"
                                                    width="19.6143"
                                                    height="21.7878"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p
                                        className="font-roboto text-xl font-semibold text-white cursor-pointer"
                                        onClick={() =>
                                            window.my_modal_2.showModal()
                                        }
                                    >
                                        {item.comments.length}
                                    </p>
                                </div>
                                {/* <ModalComments item={item} /> */}
                            </div>
                            <div className="flex  flex-row">
                                <div className="w-50 flex justify-end">
                                    <Link
                                        href={item.link}
                                        className=" font-semibold text-xl text-white  bg-green-custom rounded-r-[2rem] rounded-tl-none rounded-bl-[2rem] px-[3.4rem] py-[1.2rem]"
                                    >
                                        MORE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="w-full flex justify-center items-center">
                    <ButtonGroup
                        variant="outlined"
                        color="blue-gray"
                        className="space-x-[1px]"
                    >
                        <IconButton
                            onClick={prev}
                            style={{
                                fontSize: "2rem",
                                padding: "2rem",
                                borderColor: "#0D7377",
                                backgroundColor: "#0D7377",
                                color: "white",
                            }}
                        >
                            <ArrowLeftIcon
                                strokeWidth={2}
                                className="h-6 w-6"
                            />
                        </IconButton>
                        <IconButton {...getItemProps(1)}>1</IconButton>
                        <IconButton {...getItemProps(2)}>2</IconButton>
                        <IconButton {...getItemProps(3)}>3</IconButton>
                        <IconButton {...getItemProps(4)}>4</IconButton>
                        <IconButton {...getItemProps(5)}>5</IconButton>
                        <IconButton
                            onClick={next}
                            style={{
                                fontSize: "2rem",
                                padding: "2rem",
                                borderColor: "#0D7377",
                                backgroundColor: "#0D7377",
                                color: "white",
                            }}
                        >
                            <ArrowRightIcon
                                strokeWidth={2}
                                className="h-6 w-6"
                            />
                        </IconButton>
                    </ButtonGroup>
                </div>
            </div>
        </>
    );
}
