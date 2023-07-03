import React from "react";

const ModalGalleries = ({ galleries }) => {
    const exteriorGallery = galleries.filter(
        (item) => item.category.category_name === "Exterior"
    );
    const interiorGallery = galleries.filter(
        (item) => item.category.category_name === "Interior"
    );
    const potonganGallery = galleries.filter(
        (item) => item.category.category_name === "Potongan"
    );

    // const denahGallery = gallery.filter(
    //     (item) => item.category === "denah");

    if (!exteriorGallery || !interiorGallery || !potonganGallery) {
        console.log("no item");
        return;
    }

    const Exterior = exteriorGallery.map((item) => {

        return (
            <div key={item.id} className="w-16 lg:w-28">
                <a href={`#${item.id}`}>
                    <img
                        src={`/assets/img/gallery/${item.image}`}
                        alt=""
                        className="w-full"
                    />
                </a>
            </div>
        );


    });

    const Interior = interiorGallery.map((item) => {
        return (
            <div key={item.id} className="w-16 lg:w-28">
                <a href={`#${item.id}`}>
                    <img
                        src={`/assets/img/gallery/${item.image}`}
                        alt=""
                        className="w-full"
                    />
                </a>
            </div>
        );
    });

    const Potongan = potonganGallery.map((item) => {
        return (
            <div key={item.id} className="w-16 lg:w-28">
                <a href={`#${item.id}`}>
                    <img
                        src={`/assets/img/gallery/${item.image}`}
                        alt=""
                        className="w-full"
                    />
                </a>
            </div>
        );
    });
    return (
        <dialog id="my_modal_3" className="modal">
            <form
                method="dialog"
                className="modal-box rounded-none w-11/12 max-w-7xl"
            >
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                </button>

                <div className="w-full h-auto pb-2 ">
                    <div className="flex w-full justify-center mb-8">
                        <div className="carousel lg:w-2/3 ">
                            {galleries.map((item) => (
                                <div
                                    key={item.id}
                                    id={item.id}
                                    className="carousel-item w-full"
                                >
                                    <img
                                        src={`/assets/img/gallery/${item.image}`}
                                        className="w-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col h-40 lg:h-40 overflow-y-auto scrollbar-hide">
                        <div className="">
                            <h1 className="text-xl">Exterior</h1>
                        </div>
                        <div className="flex  items-center w-auto gap-2 flex-wrap mb-4">
                            {Exterior}
                        </div>

                        <div>
                            <h1 className="text-xl">Interior</h1>
                        </div>
                        <div className="flex items-center w-auto gap-2 flex-wrap mb-4">
                            {Interior}
                        </div>

                        <div>
                            <h1 className="text-xl">Potongan</h1>
                        </div>
                        <div className="flex items-center w-auto gap-2 flex-wrap mb-4">
                            {Potongan}
                        </div>
                    </div>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default ModalGalleries;
