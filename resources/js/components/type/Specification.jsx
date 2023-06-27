export const Specification = () => {
    const spek = [
        {
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
    ];
    return (
        <div className="flex flex-col pb-[2rem]">
            <h1 className="font-extrabold lg:text-5xl py-[2rem] md:text-3xl text-2xl">
                Specification
            </h1>
            <div>
                {spek.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <li
                            className="font-normal"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            {item.description}
                        </li>
                    </div>
                ))}
            </div>
        </div>
    );
};
