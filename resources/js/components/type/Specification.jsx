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
            <h1 className="font-extrabold text-5xl py-[2rem]">Specification</h1>
            <div>
                {spek.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <li className="font-normal">{item.description}</li>
                    </div>
                ))}
            </div>
        </div>
    );
};
