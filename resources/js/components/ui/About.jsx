import React from "react";

const AboutUs = () => {
    return (
        <div className="my-20 ">
            <div className="flex flex-col items-center justify-center gap-8">
                <h1 className="text-4xl font-bold">About us</h1>
                <div className="flex flex-col items-center justify-center space-y-10">
                    <p className=" text-center w-2/4">
                        Lorem ipsum dolor nobis aspernatur sint placeat quae
                        exercitationem laboriosam facilis rerum porro. Eaque
                        ipsum hic doloribus?
                    </p>
                    <div className="flex flex-row items-center justify-around px-36 gap-8">
                        <img
                            src="https://picsum.photos/800/500"
                            className="w-2/5 rounded-xl bg-blue-gray-500"
                            alt=""
                            data-aos="fade-up-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                        />
                        <div
                            className="flex flex-col gap-8 text-justify"
                            data-aos="zoom-in-down"
                        >
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Possimus eos provident unde
                                vitae doloribus ea culpa tenetur, quis aut
                                corporis. Amet dicta veniam architecto labore
                                explicabo quod vero reprehenderit. Odio!
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Possimus eos provident unde
                                vitae doloribus ea culpa tenetur, quis aut
                                corporis. Amet dicta veniam architecto labore
                                explicabo quod vero reprehenderit. Odio!
                            </p>
                            <div className="w-50 ">
                                <button className="text-blue-700 rounded-xl px-10 py-4 border-blue-700 border ">
                                    get
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
