import LayoutAdmin from "@/Layout/LayoutAdmin";

export default function Dashboard() {
    return (
        <LayoutAdmin title="Dashboard">
            <div className="w-full justify-center items-center">
                <h1 className="font-sans font-bold text-black text-2xl md:text-3xl">
                    DASHBOARD
                </h1>
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
