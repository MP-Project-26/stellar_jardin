export const ContactUs = () => {
    return (
        <div>
            <h1 className="font-extrabold lg:text-5xl py-[2rem] md:text-3xl text-2xl">
                Contact Us
            </h1>
            <div
                className="bg-[#FBF9F9] w-full h-[30rem]  lg:h-[34rem] justify-center lg:rounded-[2rem] flex flex-col md:h-[30rem] md:rounded-[1rem]"
                data-aos="zoom-in"
                data-aos-duration="2000"
            >
                <div className="lg:mx-[4rem] my-[3rem] flex flex-col gap-[1rem] md:mx-[2rem]">
                    <div className="md:flex items-center gap-[2.5rem]">
                        <p className="px-[1rem]">Name</p>
                        <input type="text" className="w-full rounded-[1rem]" />
                    </div>
                    <div className="md:flex items-center gap-[2.5rem]">
                        <p className="px-[1rem]">Email</p>
                        <input type="text" className="w-full rounded-[1rem]" />
                    </div>
                    <div className="md:flex items-center gap-[3rem]">
                        <p className="px-[1rem]">Telp</p>
                        <input type="text" className="w-full rounded-[1rem]" />
                    </div>
                    <div className="md:flex items-center">
                        <p className="px-[1rem]">
                            Notes <i className="text-red-800">optional</i>
                        </p>
                        <textarea
                            type="text"
                            className="w-full h-32 rounded-[1rem]"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button className="h-12 w-24 rounded-[2rem] rounded-tl-none text-white bg-[#0D7377]">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
