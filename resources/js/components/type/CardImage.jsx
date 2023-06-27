export const CardImage = ({ image, title }) => {
    return (
        <div className=" flex bg-white">
            <img
                src={image}
                alt={title}
                className="lg:h-[9rem] lg:w-[16rem] md:h-[7rem] md:w-[11rem]"
            />
        </div>
    );
};
