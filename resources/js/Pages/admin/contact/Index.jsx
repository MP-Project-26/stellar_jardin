import LayoutAdmin from "@/Layouts/LayoutAdmin";

export default function Index({ auth }) {
    return (
        <LayoutAdmin title="Dashboard" auth={auth}>
            <div className="w-full pt-10 justify-center items-center">
                <h1 className="font-sans font-bold text-black text-2xl md:text-3xl">
                    CONTACT MANAGEMENT
                </h1>
            </div>
        </LayoutAdmin>
    );
}
