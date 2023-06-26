export const CardImage = ({ image, title }) => {
    return (
        <div className=" flex bg-white">
            <img
                src={image}
                alt={title}
                className="h-[9rem] w-[16rem] rounded-[1rem]"
            />
        </div>
    );
};
