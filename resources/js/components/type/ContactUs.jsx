export const ContactUs = () => {
    return (
        <div>
            <h1 className="font-extrabold text-5xl py-[2rem]">Contact Us</h1>
            <div className="bg-[#FBF9F9] w-full h-[34rem] justify-center rounded-[2rem] flex flex-col">
                <div className="mx-[4rem] my-[4rem] flex flex-col gap-[1rem]">
                    <div className="flex items-center gap-[2.5rem]">
                        <p className="px-[1rem]">Name</p>
                        <input type="text" className="w-full rounded-[1rem]" />
                    </div>
                    <div className="flex items-center gap-[2.5rem]">
                        <p className="px-[1rem]">Email</p>
                        <input type="text" className="w-full rounded-[1rem]" />
                    </div>
                    <div className="flex items-center gap-[3rem]">
                        <p className="px-[1rem]">Telp</p>
                        <input type="text" className="w-full rounded-[1rem]" />
                    </div>
                    <div className="flex items-center">
                        <p className="px-[1rem]">
                            Notes <span className="text-red-800">optional</span>
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
