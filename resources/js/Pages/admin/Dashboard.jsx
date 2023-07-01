import LayoutAdmin from "@/Layouts/LayoutAdmin";

export default function Dashboard({ auth }) {
    return (
        <LayoutAdmin title="Dashboard" auth={auth}>
            <div className="w-full justify-center items-center">
                <div className="flex w-full pt-10 pb-6 gap-4">
                    <div className="w-4/12 h-[16rem] rounded-lg bg-blue-gray-300"></div>
                    <div className="w-4/12 h-[16rem] rounded-lg bg-blue-gray-300"></div>
                    <div className="w-4/12 h-[16rem] rounded-lg bg-blue-gray-300"></div>
                </div>
                <div className="flex w-full h-[16rem] rounded-lg bg-blue-gray-300 gap-4"></div>
            </div>
        </LayoutAdmin>
    );
}
